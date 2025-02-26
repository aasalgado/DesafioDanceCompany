"use client";

import CheckoutPage from "../components/CheckoutPage";
import convertToSubcurrency from "../lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

interface StripePaymentProps {
  totalAmount: number; // Define the type for totalAmount as a number
}

export default function Stripe({ totalAmount = 0 }: StripePaymentProps) {
  const isAmountValid = totalAmount > 0;
  return (
    <main
      className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-white to-black"
      style={{ backgroundColor: "pink" }}
    >
      <div className="mb-10">
        {/* <h1 className="text-4xl font-extrabold mb-2">Desafio</h1> */}
        <h2 className="text-2xl">
          {isAmountValid
            ? `Proceed to Payment: $${totalAmount}`
            : "Please add classes to proceed"}
        </h2>
      </div>

      {isAmountValid && (
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubcurrency(totalAmount),
            currency: "usd",
          }}
        >
          <CheckoutPage amount={totalAmount} />
        </Elements>
      )}
    </main>
  );
}
