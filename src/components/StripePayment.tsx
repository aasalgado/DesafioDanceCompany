"use client";

import CheckoutPage from "../components/CheckoutPage";
// import convertToSubcurrency from "../lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { format } from "date-fns";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

interface SelectedClass {
  className: string; // Name of the class
  price: number; // Price of the class
  date: string;
}

interface StripePaymentProps {
  totalAmount: number; // Define the type for totalAmount as a number
  selectedClasses: SelectedClass[];
}

export default function Stripe({
  totalAmount = 0,
  selectedClasses,
}: StripePaymentProps) {
  const [discountCode, setDiscountCode] = useState("");
  const [finalAmount, setFinalAmount] = useState(totalAmount);
  const [errorMessage, setErrorMessage] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false); // Track discount applied
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Sync finalAmount with totalAmount whenever totalAmount or selectedClasses changes
  useEffect(() => {
    let amount = 0;
    selectedClasses.forEach((item) => {
      amount += item.price; // Add the price of each selected class
    });
    setFinalAmount(amount); // Update the finalAmount
  }, [selectedClasses]); // This will run whenever selectedClasses changes

  // Define available discount codes
  const availableDiscountCodes = ["DISCOUNT10", "SUMMER20", "WELCOME30"];

  // Apply discount if code is valid
  const applyDiscount = () => {
    if (discountApplied) {
      setErrorMessage("Discount has already been applied.");
      return;
    }

    if (availableDiscountCodes.includes(discountCode.toUpperCase())) {
      let discount = 0;

      // Example discount logic based on code
      if (discountCode === "DISCOUNT10") {
        discount = finalAmount * 0.1; // 10% discount
      } else if (discountCode === "SUMMER20") {
        discount = finalAmount * 0.2; // 20% discount
      } else if (discountCode === "WELCOME30") {
        discount = 30; // $30 discount
      }

      // Apply discount
      setFinalAmount(finalAmount - discount);
      setDiscountApplied(true); // Mark discount as applied
      setErrorMessage(""); // Clear any previous error messages
    } else {
      setErrorMessage("Invalid discount code");
    }
  };

  const isAmountValid = finalAmount > 0;

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid =
    userInfo.firstName.trim() !== "" &&
    userInfo.lastName.trim() !== "" &&
    isValidEmail(userInfo.email);

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-white to-black">
      <div className="mb-10">
        <h2 className="text-2xl">
          {isAmountValid
            ? `Proceed to Payment: $${finalAmount}`
            : "Please add classes to proceed"}
        </h2>
      </div>

      {/* Display selected classes and their prices */}
      {selectedClasses.length > 0 && (
        <div className="mt-5">
          <h2 className="text-xl font-bold">Selected Classes:</h2>
          <ul className="space-y-2">
            {selectedClasses.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>
                  {item.className}
                  {item.date ? " - " + format(item.date, "PPP") : ""} - $
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Add Inputs for First Name, Last Name, and email here in a column*/}
      {isAmountValid && (
        <div className="my-8 text-left max-w-md mx-auto space-y-4">
          {/* First Name */}
          <input
            type="text"
            value={userInfo.firstName}
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, firstName: e.target.value }))
            }
            className="w-full px-4 py-2 rounded-md text-black border"
            placeholder="First Name (required)"
          />

          {/* Last Name */}
          <input
            type="text"
            value={userInfo.lastName}
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, lastName: e.target.value }))
            }
            className="w-full px-4 py-2 rounded-md text-black border"
            placeholder="Last Name (required)"
          />

          {/* Email */}
          <input
            type="email"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full px-4 py-2 rounded-md text-black border"
            placeholder="Email (required)"
          />

          {/* Discount Code */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Discount Code"
              className="flex-1 px-4 py-2 border rounded-md text-black"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button
              onClick={applyDiscount}
              className="w-1/3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      )}

      {/* Show Stripe Payment Form */}
      {isAmountValid && finalAmount && (
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: finalAmount * 100, // Convert to cents (Stripe's required format)
            currency: "usd",
          }}
        >
          {/* Your CheckoutPage component */}
          <CheckoutPage
            amount={finalAmount}
            userInfo={userInfo}
            isFormValid={isFormValid}
          />
        </Elements>
      )}
    </main>
  );
}
