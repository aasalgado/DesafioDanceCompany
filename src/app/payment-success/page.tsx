import Link from "next/link";

export default function PaymentSuccess({
  searchParams: { amount, firstName, email },
}: {
  searchParams: { amount: string; firstName: string; email: string };
}) {
  const name = firstName
    ? firstName.charAt(0).toUpperCase() + firstName.slice(1)
    : undefined;
  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-white to-black">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">
          Thank you{name ? `, ${name}` : ""}!
        </h1>
        <h2 className="text-2xl">You successfully sent</h2>

        <div className="bg-white p-2 rounded-md text-black mt-5 text-4xl font-bold">
          ${amount}
        </div>

        <h2 className="text-2xl mt-2">
          Keep an eye on your inbox — we’ve sent a confirmation to {email}.
        </h2>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-md text-xl"
        >
          Go Back to Homepage
        </Link>
      </div>
    </main>
  );
}
