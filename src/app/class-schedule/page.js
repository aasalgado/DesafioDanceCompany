"use client";
import { useState } from "react";
import Stripe from "@/components/StripePayment";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClassTable from "./ClassTable";

export default function ClassSchedule() {
  const [selectedClasses, setSelectedClasses] = useState([]);

  // Add a class to the selectedClasses array
  const addClass = (className, price) => {
    setSelectedClasses((prevClasses) => [
      ...prevClasses,
      { className, price }, // Add new class to the selected classes array
    ]);
  };

  // Remove a class from the selectedClasses array
  const removeClass = (className) => {
    setSelectedClasses((prevClasses) =>
      prevClasses.filter((classItem) => classItem.className !== className)
    );
  };

  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <ClassTable addClass={addClass} removeClass={removeClass} />
      <Stripe
        totalAmount={selectedClasses.reduce(
          (sum, classItem) => sum + classItem.price,
          0
        )}
        selectedClasses={selectedClasses}
      />
      <Footer />
    </div>
  );
}
