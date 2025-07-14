// src/pages/planning/Promotions.jsx

import React from "react";

const promotions = [
  {
    id: "T10000581",
    description: "Up to 40% Off Select Toys",
    discount: "Percentage Off 40%",
    deadline: "Jul 3rd 2025, 12:59 AM PST",
    start: "Jul 20th 2025, 1:00 AM PST",
    end: "Jul 27th 2025, 12:59 AM PST",
    status: "Upcoming",
  },
  {
    id: "T10000582",
    description: "Up to 20% Off Diecast Vehicles",
    discount: "Percentage Off 20%",
    deadline: "Jul 3rd 2025, 12:59 AM PST",
    start: "Jul 20th 2025, 1:00 AM PST",
    end: "Jul 27th 2025, 12:59 AM PST",
    status: "Upcoming",
  },
  {
    id: "T10000577",
    description: "Up to 30% off Home Fitness",
    discount: "Percentage Off 30%",
    deadline: "Jun 26th 2025, 12:59 AM PST",
    start: "Jul 20th 2025, 1:00 AM PST",
    end: "Jul 27th 2025, 12:59 AM PST",
    status: "Upcoming",
  },
  {
    id: "T10000580",
    description: "Up to 30% off Select Seasonal Items",
    discount: "Percentage Off 30%",
    deadline: "Jun 26th 2025, 12:59 AM PST",
    start: "Jul 20th 2025, 1:00 AM PST",
    end: "Jul 27th 2025, 12:59 AM PST",
    status: "Upcoming",
  },
  {
    id: "T10000578",
    description: "Up to 20% off Water Bottles",
    discount: "Percentage Off 20%",
    deadline: "Jun 26th 2025, 12:59 AM PST",
    start: "Jul 20th 2025, 1:00 AM PST",
    end: "Jul 27th 2025, 12:59 AM PST",
    status: "Upcoming",
  },
  {
    id: "T10000576",
    description: "Up to 30% off Pools, Filters & Accessories",
    discount: "Percentage Off 30%",
    deadline: "Jun 26th 2025, 12:59 AM PST",
    start: "Jul 20th 2025, 1:00 AM PST",
    end: "Jul 27th 2025, 12:59 AM PST",
    status: "Upcoming",
  },
];

const Promotions = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Promotions</h1>
      <p>
        Target+ partners can participate in Target+ eligible promotions. Visit
        these <a href="#" className="text-blue-600 underline">Help center articles</a> to learn how.
      </p>

      <div className="bg-white rounded-md p-4 shadow border space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">FILTERED COUNT: <span className="font-normal">67</span></h2>
          <div className="flex items-center gap-4">
            <button className="text-blue-600 text-sm">DOWNLOAD REPORT</button>
            <button className="text-blue-600 text-sm">HIDE FILTERS</button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <input type="text" placeholder="Promo ID" className="border rounded px-3 py-2 w-64" />
          <input type="text" value="07/14/2025 - 08/13/2025" readOnly className="border rounded px-3 py-2 w-64" />
          <button className="text-blue-600 text-sm">CLEAR ALL</button>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Download Filtered Promotion List</button>
      </div>

      <div className="bg-white rounded shadow border overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">Promo ID</th>
              <th className="px-4 py-3">Promo Description</th>
              <th className="px-4 py-3">Discount</th>
              <th className="px-4 py-3">Participation Deadline</th>
              <th className="px-4 py-3">Start Date</th>
              <th className="px-4 py-3">End Date</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promo, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-3 text-blue-600 hover:underline cursor-pointer">{promo.id}</td>
                <td className="px-4 py-3">{promo.description}</td>
                <td className="px-4 py-3">{promo.discount}</td>
                <td className="px-4 py-3">{promo.deadline}</td>
                <td className="px-4 py-3">{promo.start}</td>
                <td className="px-4 py-3">{promo.end}</td>
                <td className="px-4 py-3">
                  <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
                    {promo.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Promotions;
