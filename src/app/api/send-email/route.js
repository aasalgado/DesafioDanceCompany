import nodemailer from "nodemailer";
import { google } from "googleapis";

// OAuth2 credentials
const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground"; // Ensure this matches your setup
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const USER = process.env.GMAIL_USER;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function POST(req) {
  try {
    // Get access token from OAuth2
    const accessToken = await oAuth2Client.getAccessToken();

    // Set up Nodemailer transport using OAuth2
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: USER,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
      debug: true,
      logger: true,
    });

    // Parse incoming request body (form data)
    const { name, email, message } = await req.json();

    // Define mail options
    const mailOptions = {
      from: USER,
      to: USER, // Adjust this if sending to a different email
      subject: `New message from ${name}`,
      text: message,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
