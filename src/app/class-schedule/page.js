"use client";
import { useState } from "react";
import Stripe from "@/components/StripePayment";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClassTable from "./ClassTable";

export default function ClassSchedule() {
  const [totalAmount, setTotalAmount] = useState(0);

  const addClass = (price) => {
    setTotalAmount((prevAmount) => prevAmount + price);
  };

  const removeClass = (price) => {
    setTotalAmount((prevAmount) =>
      prevAmount - price < 0 ? 0 : prevAmount - price
    );
  };
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <ClassTable addClass={addClass} removeClass={removeClass} />
      <Stripe totalAmount={totalAmount} />
      <Footer />
    </div>
  );
}
