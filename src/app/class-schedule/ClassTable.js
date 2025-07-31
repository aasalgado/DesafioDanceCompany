export default function ClassTable({ addClass, removeClass }) {
  const classPrices = [
    {
      className: "Bachata Basics/Beginners",
      instructors: "Luis & Jess",
      price: 20,
      day: "Tuesday",
      time: "7:30 PM",
    },
    {
      className: "Bachata Intermediate",
      instructors: "Luis & Jess",
      price: 20,
      day: "Tuesday",
      time: "8:30 PM",
    },
    {
      className: "Bachata Shines/Styling",
      instructors: "Luis & Jess",
      price: 20,
      day: "Wednesday",
      time: "8:30 PM",
    },
    {
      className: "Salsa On2 Basics/Beginners",
      instructors: "Marco & Marylou",
      price: 20,
      day: "Thursday",
      time: "7:30 PM",
    },
    {
      className: "Salsa On2 Intermediate",
      instructors: "Luis & Jess",
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
                ({ className, instructors, price, day, time }) => (
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
