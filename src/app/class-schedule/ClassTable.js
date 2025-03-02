// export default function ClassTable({ addClass, removeClass }) {
//   const classPrices = {
//     "Bachata Basics/Beginners": 20,
//     "Bachata Intermediate": 20,
//     "Salsa On2 Basics/Beginners": 20,
//     "Salsa On2 Intermediate": 20,
//     "All Access Monthly Membership": 100,
//   };
//   return (
//     <div className="mt-20">
//       <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mx-auto pb-5">
//         Class Schedule
//       </h1>

//       {/* Mobile View List */}
//       <div className="block sm:hidden">
//         {Object.entries(classPrices).map(([className, price]) => (
//           <div key={className} className="border-b border-gray-300 py-4 px-2">
//             <div className="font-bold">{className}</div>
//             <div className="text-sm">Instructor: Luis Alberto</div>
//             <div className="text-sm">Time: 8:30 PM</div>
//             <div className="text-sm">Price: ${price}</div>
//             <div className="mt-2 flex justify-between">
//               <button
//                 className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
//                 onClick={() => addClass(price)}
//               >
//                 Add Class
//               </button>
//               <button
//                 className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
//                 onClick={() => removeClass(price)}
//               >
//                 Remove Class
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Tablet and larger - Table view */}
//       <div className="hidden sm:block">
//         <table class="min-w-full table-auto bg-white border border-gray-300 rounded-lg shadow-md">
//           <thead>
//             <tr class="bg-gray-200 text-left">
//               <th class="px-6 py-3 font-bold text-gray-700">Class</th>
//               <th class="px-6 py-3 font-bold text-gray-700">Instructor</th>
//               <th class="px-6 py-3 font-bold text-gray-700">Time</th>
//               <th class="px-6 py-3 font-bold text-gray-700">Price</th>
//               <th class="px-6 py-3 font-bold text-gray-700"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Tuesday */}
//             <tr>
//               <td
//                 colspan="5"
//                 class="px-6 py-3 text-center font-bold text-lg bg-gray-100"
//               >
//                 Tuesdays
//               </td>
//             </tr>
//             <tr>
//               <td class="px-6 py-4 border-t border-gray-200">
//                 Bachata Basics/Beginners
//               </td>
//               <td class="px-6 py-4 border-t border-gray-200">Luis Alberto</td>
//               <td class="px-6 py-4 border-t border-gray-200">8:30 PM</td>
//               <td class="px-6 py-4 border-t border-gray-200">$20</td>
//               <td class="px-6 py-4 border-t border-gray-200">
//                 <div class="flex flex-col sm:flex-row sm:gap-5">
//                   <button
//                     class="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
//                     onClick={() =>
//                       addClass(classPrices["Bachata Basics/Beginners"])
//                     }
//                   >
//                     Add
//                   </button>
//                   <button
//                     class="mt-4 sm:mt-0 sm:ml-5 px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
//                     onClick={() =>
//                       removeClass(classPrices["Bachata Basics/Beginners"])
//                     }
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td class="px-6 py-4 border-t border-gray-200">
//                 Bachata Intermediate
//               </td>
//               <td class="px-6 py-4 border-t border-gray-200">Luis Alberto</td>
//               <td class="px-6 py-4 border-t border-gray-200">8:30 PM</td>
//               <td class="px-6 py-4 border-t border-gray-200">$20</td>
//               <td class="px-6 py-4 border-t border-gray-200">
//                 <div class="flex flex-col sm:flex-row sm:gap-5">
//                   <button
//                     class="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
//                     onClick={() =>
//                       addClass(classPrices["Bachata Intermediate"])
//                     }
//                   >
//                     Add
//                   </button>
//                   <button
//                     class="mt-4 sm:mt-0 sm:ml-5 px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
//                     onClick={() =>
//                       removeClass(classPrices["Bachata Intermediate"])
//                     }
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </td>
//             </tr>
//             {/* Thursdays */}
//             <tr>
//               <td
//                 colspan="5"
//                 class="px-6 py-3 text-center font-bold text-lg bg-gray-100"
//               >
//                 Thursdays
//               </td>
//             </tr>
//             <tr>
//               <td class="px-6 py-4 border-t border-gray-200">
//                 Salsa On2 Basics/Beginners
//               </td>
//               <td class="px-6 py-4 border-t border-gray-200">Luis Alberto</td>
//               <td class="px-6 py-4 border-t border-gray-200">8:30 PM</td>
//               <td class="px-6 py-4 border-t border-gray-200">$20</td>
//               <td class="px-6 py-4 border-t border-gray-200">
//                 <div class="flex flex-col sm:flex-row sm:gap-5">
//                   <button
//                     class="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
//                     onClick={() =>
//                       addClass(classPrices["Salsa On2 Basics/Beginners"])
//                     }
//                   >
//                     Add
//                   </button>
//                   <button
//                     class="mt-4 sm:mt-0 sm:ml-5 px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
//                     onClick={() =>
//                       removeClass(classPrices["Salsa On2 Basics/Beginners"])
//                     }
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td class="px-6 py-4 border-t border-gray-200">
//                 Salsa On2 Intermediate
//               </td>
//               <td class="px-6 py-4 border-t border-gray-200">Luis Alberto</td>
//               <td class="px-6 py-4 border-t border-gray-200">8:30 PM</td>
//               <td class="px-6 py-4 border-t border-gray-200">$20</td>
//               <td class="px-6 py-4 border-t border-gray-200">
//                 <div class="flex flex-col sm:flex-row sm:gap-5">
//                   <button
//                     class="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
//                     onClick={() =>
//                       addClass(classPrices["Salsa On2 Intermediate"])
//                     }
//                   >
//                     Add
//                   </button>
//                   <button
//                     class="mt-4 sm:mt-0 sm:ml-5 px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
//                     onClick={() =>
//                       removeClass(classPrices["Salsa On2 Intermediate"])
//                     }
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mx-auto pb-5 pt-5">
//           Packages
//         </h1>
//         <table class="min-w-full table-auto bg-white border border-gray-300 rounded-lg shadow-md">
//           <thead>
//             <tr class="bg-gray-200 text-left">
//               <th class="px-6 py-3 font-bold text-gray-700">Package</th>
//               <th class="px-6 py-3 font-bold text-gray-700"></th>
//               <th class="px-6 py-3 font-bold text-gray-700"></th>
//               <th class="px-6 py-3 font-bold text-gray-700">Price</th>
//               <th class="px-6 py-3 font-bold text-gray-700"></th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td class="px-6 py-4 border-t border-gray-200">
//                 All Access Monthly Membership
//               </td>
//               <td class="px-6 py-4 border-t border-gray-200"></td>
//               <td class="px-6 py-4 border-t border-gray-200"></td>
//               <td class="px-6 py-4 border-t border-gray-200">$100</td>
//               <td class="px-6 py-4 border-t border-gray-200">
//                 <div class="flex flex-col sm:flex-row sm:gap-5">
//                   <button
//                     class="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
//                     onClick={() =>
//                       addClass(classPrices["All Access Monthly Membership"])
//                     }
//                   >
//                     Add
//                   </button>
//                   <button
//                     class="mt-4 sm:mt-0 sm:ml-5 px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md"
//                     onClick={() =>
//                       removeClass(classPrices["All Access Monthly Membership"])
//                     }
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

export default function ClassTable({ addClass, removeClass }) {
  const classPrices = [
    {
      className: "Bachata Basics/Beginners",
      price: 20,
      day: "Tuesday",
      time: "8:30 PM",
    },
    {
      className: "Bachata Intermediate",
      price: 20,
      day: "Tuesday",
      time: "8:30 PM",
    },
    {
      className: "Salsa On2 Basics/Beginners",
      price: 20,
      day: "Thursday",
      time: "8:30 PM",
    },
    {
      className: "Salsa On2 Intermediate",
      price: 20,
      day: "Thursday",
      time: "8:30 PM",
    },
  ];

  const packagePrices = {
    "All Access Monthly Membership": 100,
  };

  return (
    <>
      <div className="mt-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mx-auto pb-5">
          Class Schedule
        </h1>

        {/* Mobile View List */}
        <div className="block sm:hidden">
          {classPrices.map(({ className, price, day, time }) => (
            <div key={className} className="border-b border-gray-300 py-4 px-2">
              <div className="font-bold">{className}</div>
              <div className="text-sm">Instructor: Luis Alberto</div>
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
              {classPrices.map(({ className, price, day, time }) => (
                <tr key={className}>
                  <td className="px-6 py-4 border-t border-gray-200">
                    {className}
                  </td>
                  <td className="px-6 py-4 border-t border-gray-200">
                    Luis Alberto
                  </td>
                  <td className="px-6 py-4 border-t border-gray-200">
                    {day} - {time}
                  </td>
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
