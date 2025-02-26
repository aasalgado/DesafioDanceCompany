export default function ClassTable({ addClass, removeClass }) {
  const classPrices = {
    "Bachata Basics/Beginners": 20,
    "Bachata Intermediate": 20,
    "Salsa On2 Basics/Beginners": 20,
    "Salsa On2 Intermediate": 20,
    "All Access Monthly Membership": 100,
  };
  return (
    <div class="overflow-x-auto mt-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mx-auto pb-5">
        Class Schedule
      </h1>

      <table class="min-w-full table-auto bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr class="bg-gray-200 text-left">
            <th class="px-6 py-3 font-bold text-gray-700">Class</th>
            <th class="px-6 py-3 font-bold text-gray-700">Instructor</th>
            <th class="px-6 py-3 font-bold text-gray-700">Time</th>
            <th class="px-6 py-3 font-bold text-gray-700">Price</th>
            <th class="px-6 py-3 font-bold text-gray-700"></th>
          </tr>
        </thead>
        <tbody>
          {/* Tuesday */}
          <tr>
            <td
              colspan="5"
              class="px-6 py-3 text-center font-bold text-lg bg-gray-100"
            >
              Tuesdays
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 border-t border-gray-200">
              Bachata Basics/Beginners
            </td>
            <td class="px-6 py-4 border-t border-gray-200">Luis Alberto</td>
            <td class="px-6 py-4 border-t border-gray-200">8:30 PM</td>
            <td class="px-6 py-4 border-t border-gray-200">$20</td>
            <td class="px-6 py-4 border-t border-gray-200">
              <button
                class="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() =>
                  addClass(classPrices["Bachata Basics/Beginners"])
                }
              >
                Add
              </button>
              <button
                class="ml-5 px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={() =>
                  removeClass(classPrices["Bachata Basics/Beginners"])
                }
              >
                Remove
              </button>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 border-t border-gray-200">
              Bachata Intermediate
            </td>
            <td class="px-6 py-4 border-t border-gray-200">Luis Alberto</td>
            <td class="px-6 py-4 border-t border-gray-200">8:30 PM</td>
            <td class="px-6 py-4 border-t border-gray-200">$20</td>
            <td class="px-6 py-4 border-t border-gray-200">
              <button
                class="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => addClass(classPrices["Bachata Intermediate"])}
              >
                Add
              </button>
              <button
                class="ml-5 px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={() => removeClass(classPrices["Bachata Intermediate"])}
              >
                Remove
              </button>
            </td>
          </tr>
          {/* Thursdays */}
          <tr>
            <td
              colspan="5"
              class="px-6 py-3 text-center font-bold text-lg bg-gray-100"
            >
              Thursdays
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 border-t border-gray-200">
              Salsa On2 Basics/Beginners
            </td>
            <td class="px-6 py-4 border-t border-gray-200">Luis Alberto</td>
            <td class="px-6 py-4 border-t border-gray-200">8:30 PM</td>
            <td class="px-6 py-4 border-t border-gray-200">$20</td>
            <td class="px-6 py-4 border-t border-gray-200">
              <button
                class="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() =>
                  addClass(classPrices["Salsa On2 Basics/Beginners"])
                }
              >
                Add
              </button>
              <button
                class="ml-5 px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={() =>
                  removeClass(classPrices["Salsa On2 Basics/Beginners"])
                }
              >
                Remove
              </button>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 border-t border-gray-200">
              Salsa On2 Intermediate
            </td>
            <td class="px-6 py-4 border-t border-gray-200">Luis Alberto</td>
            <td class="px-6 py-4 border-t border-gray-200">8:30 PM</td>
            <td class="px-6 py-4 border-t border-gray-200">$20</td>
            <td class="px-6 py-4 border-t border-gray-200">
              <button
                class="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => addClass(classPrices["Salsa On2 Intermediate"])}
              >
                Add
              </button>
              <button
                class="ml-5 px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={() =>
                  removeClass(classPrices["Salsa On2 Intermediate"])
                }
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mx-auto pb-5 pt-5">
        Packages
      </h1>
      <table class="min-w-full table-auto bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr class="bg-gray-200 text-left">
            <th class="px-6 py-3 font-bold text-gray-700">Package</th>
            <th class="px-6 py-3 font-bold text-gray-700"></th>
            <th class="px-6 py-3 font-bold text-gray-700"></th>
            <th class="px-6 py-3 font-bold text-gray-700">Price</th>
            <th class="px-6 py-3 font-bold text-gray-700"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-6 py-4 border-t border-gray-200">
              All Access Monthly Membership
            </td>
            <td class="px-6 py-4 border-t border-gray-200"></td>
            <td class="px-6 py-4 border-t border-gray-200"></td>
            <td class="px-6 py-4 border-t border-gray-200">$100</td>
            <td class="px-6 py-4 border-t border-gray-200">
              <button
                class="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() =>
                  addClass(classPrices["All Access Monthly Membership"])
                }
              >
                Add
              </button>
              <button
                class="ml-5 px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={() =>
                  removeClass(classPrices["All Access Monthly Membership"])
                }
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
