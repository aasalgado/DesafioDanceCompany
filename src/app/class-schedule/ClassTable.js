"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { format } from "date-fns";

export default function ClassTable({ addClass, removeClass }) {
  const classPrices = [
    {
      className: "Bachata Basics/Beginners",
      classType: "Bachata",
      instructors: "Luis & Jess",
      price: 20,
      day: "Tuesday",
      time: "7:30 PM",
    },
    {
      className: "Bachata Intermediate",
      classType: "Bachata",
      instructors: "Luis & Jess",
      price: 20,
      day: "Tuesday",
      time: "8:30 PM",
    },
    {
      className: "Bachata Shines/Styling",
      classType: "Bachata",
      instructors: "Luis & Jess",
      price: 20,
      day: "Wednesday",
      time: "8:30 PM",
    },
    {
      className: "Salsa On2 Basics/Beginners",
      classType: "Salsa",
      instructors: "Marco & Marylou",
      price: 20,
      day: "Thursday",
      time: "7:30 PM",
    },
    {
      className: "Salsa On2 Intermediate",
      classType: "Salsa",
      instructors: "Luis & Jess",
      price: 20,
      day: "Thursday",
      time: "8:30 PM",
    },
    {
      className: "Cha Cha Cha Basics/Beginners",
      classType: "ChaCha",
      instructors: "Luis & Jess",
      price: 20,
      day: "Thursday",
      time: "7:30 PM",
    },
    {
      className: "Cha Cha Cha Intermediate",
      classType: "ChaCha",
      instructors: "Luis & Jess",
      price: 20,
      day: "Thursday",
      time: "8:30 PM",
    },
  ];

  const packagePrices = {
    "All Access Monthly Membership": 100,
  };

  const [selectedDates, setSelectedDates] = useState({});

  const isMatchingDay = (date, day, classType) => {
    if (classType === "Salsa") {
      return isNotLastThursday(date);
    } else if (classType === "ChaCha") {
      return isLastThursday(date);
    }
    const dayMap = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };
    return date.getDay() === dayMap[day];
  };
  function isLastThursday(date) {
    if (date.getDay() !== 4) return false; // 4 = Thursday

    const nextWeek = new Date(date);
    nextWeek.setDate(date.getDate() + 7);

    return nextWeek.getMonth() !== date.getMonth(); // It's the last Thursday if the next Thursday is in the next month
  }

  function isNotLastThursday(date) {
    const isThursday = date.getDay() === 4; // 4 = Thursday
    if (!isThursday) return false;

    const nextWeek = new Date(date);
    nextWeek.setDate(date.getDate() + 7);

    // If the next Thursday is still in the same month, it's *not* the last Thursday
    return nextWeek.getMonth() === date.getMonth();
  }

  return (
    <>
      <div className="mt-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mx-auto pb-5">
          Class Schedule
        </h1>

        {/* Mobile View List */}
        <div className="block sm:hidden">
          {classPrices.map(({ className, instructors, price, day, time }) => (
            <div key={className} className="border-b border-gray-300 py-4 px-2">
              <div className="font-bold">{className}</div>
              <div className="text-sm">Instructors: {instructors}</div>
              <div className="text-sm">
                {day} - {time}
              </div>
              <div className="text-sm">Price: ${price}</div>
              <div className="mt-2 flex justify-between">
                <button
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
                  onClick={() => addClass(className, price)}
                >
                  Add Class
                </button>
                <button
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
                  onClick={() => removeClass(className)}
                >
                  Remove Class
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet and larger - Table view */}
        <div className="hidden sm:block">
          <table className="min-w-full table-auto bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-6 py-3 font-bold text-gray-700">Class</th>
                <th className="px-6 py-3 font-bold text-gray-700">
                  Instructor
                </th>
                <th className="px-6 py-3 font-bold text-gray-700">
                  Day - Time
                </th>
                <th className="px-6 py-3 font-bold text-gray-700">Price</th>
                <th className="px-6 py-3 font-bold text-gray-700"></th>
              </tr>
            </thead>
            <tbody>
              {classPrices.map(
                ({ className, classType, instructors, price, day, time }) => (
                  <tr key={className}>
                    <td className="px-6 py-4 border-t border-gray-200">
                      {className}
                    </td>
                    <td className="px-6 py-4 border-t border-gray-200">
                      {instructors}
                    </td>
                    <td className="px-6 py-4 border-t border-gray-200">
                      {day} - {time}
                    </td>
                    <td className="px-6 py-4 border-t border-gray-200">
                      ${price}
                    </td>
                    <td className="px-6 py-4 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <Popover>
                          <PopoverTrigger asChild>
                            <button className="px-4 py-2 bg-gray-200 rounded-md text-sm">
                              {selectedDates[className]
                                ? format(selectedDates[className], "PPP")
                                : "Pick Date"}
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={selectedDates[className]}
                              onSelect={(date) =>
                                setSelectedDates((prev) => ({
                                  ...prev,
                                  [className]: date,
                                }))
                              }
                              disabled={(date) =>
                                !isMatchingDay(date, day, classType)
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <button
                          disabled={!selectedDates[className]}
                          className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
                          onClick={() =>
                            addClass(className, price, selectedDates[className])
                          }
                        >
                          Add
                        </button>
                        <button
                          className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
                          onClick={() => removeClass(className)}
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Packages */}
      <div className="mt-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mx-auto pb-5">
          Packages
        </h1>

        {/* Mobile View List */}
        <div className="block sm:hidden">
          {Object.entries(packagePrices).map(([className, price]) => (
            <div key={className} className="border-b border-gray-300 py-4 px-2">
              <div className="font-bold">{className}</div>
              <div className="text-sm">Price: ${price}</div>
              <div className="mt-2 flex justify-between">
                <button
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
                  onClick={() => addClass(className, price)}
                >
                  Add Class
                </button>
                <button
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
                  onClick={() => removeClass(className)}
                >
                  Remove Class
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet and larger - Table view */}
        <div className="hidden sm:block">
          <table className="min-w-full table-auto bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-6 py-3 font-bold text-gray-700">Package</th>
                <th className="px-6 py-3 font-bold text-gray-700"></th>
                <th className="px-6 py-3 font-bold text-gray-700"></th>
                <th className="px-6 py-3 font-bold text-gray-700">Price</th>
                <th className="px-6 py-3 font-bold text-gray-700"></th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(packagePrices).map(([className, price]) => (
                <tr key={className}>
                  <td className="px-6 py-4 border-t border-gray-200">
                    {className}
                  </td>
                  <td className="px-6 py-4 border-t border-gray-200"></td>
                  <td className="px-6 py-4 border-t border-gray-200"></td>
                  <td className="px-6 py-4 border-t border-gray-200">
                    ${price}
                  </td>
                  <td className="px-6 py-4 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:gap-5">
                      <button
                        className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
                        onClick={() => addClass(className, price)}
                      >
                        Add
                      </button>
                      <button
                        className="mt-4 sm:mt-0 sm:ml-5 px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
                        onClick={() => removeClass(className)}
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
