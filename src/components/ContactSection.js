import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="pt-20 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
        {/* Left Column (50% width on larger screens) */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have questions or want to learn more about Desafio Dance Company?
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
          <ContactForm />
        </div>

        {/* Right Column (50% width on larger screens, centered vertically) */}
        <div className="flex justify-center items-center w-full md:h-full">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
            <h3 className="text-lg font-bold mt-4">Address:</h3>
            <p className="text-muted-foreground">
              1122 E Washington Blvd Suite B
            </p>
            <p className="text-muted-foreground">Montebello, CA 90640</p>
            <h3 className="text-lg font-bold mt-4">Email:</h3>
            <p className="text-muted-foreground">Info@DesafioDance.com</p>
            <h3 className="text-lg font-bold mt-4">Phone:</h3>
            <p className="text-muted-foreground">(404) 408-6656</p>
            <h3 className="text-lg font-bold mt-4">Social Media:</h3>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link
                href="https://www.instagram.com/desafio.dance.company/"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
                target="_blank"
              >
                <InstagramIcon className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.youtube.com/@DesafioDanceCompany"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
                target="_blank"
              >
                <YoutubeIcon className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-5">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?q=1122+E+Washington+Blvd+Suite+B,+Montebello,+CA+90640&key=${process.env.GOOGLE_MAPS_KEY}`}
          height="400"
          className="w-full h-[100dvh] sm:h-64 md:h-96" // Full width, responsive height
          style={{ border: "0" }}
          aria-hidden="false"
        ></iframe>
      </div>
    </section>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
