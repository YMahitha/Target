import React from "react";
import { Search } from "lucide-react";

const helpCards = [
  { title: "Account Setup & Settings", icon: "🪪" },
  { title: "Items", icon: "👕" },
  { title: "Orders & Shipments", icon: "🚚" },
  { title: "Payouts", icon: "💲" },
  { title: "Returns", icon: "🔁" },
  { title: "Performance", icon: "📈" },
  { title: "Services & Promotions", icon: "🏷️" },
  { title: "About Target Plus", icon: "🏬" },
  { title: "Newsletters", icon: "📰" },
];

const HelpCenterPage = () => {
  return (
    <div className="p-6 text-sm">
      <h2 className="text-xl font-semibold mb-4">HELP CENTER</h2>

      <div className="bg-gradient-to-r from-red-100 to-blue-100 rounded p-6 text-center">
        <h1 className="text-2xl font-semibold mb-4">How Can We Help You?</h1>
        <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
          <div className="flex items-center border border-gray-300 rounded w-full">
            <Search className="ml-2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Find help articles on various topics"
              className="w-full px-3 py-2 outline-none"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            SEARCH
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {helpCards.map((card, idx) => (
          <div
            key={idx}
            className="border rounded shadow-sm hover:shadow-md p-4 flex items-center gap-3 cursor-pointer"
          >
            <div className="text-3xl">{card.icon}</div>
            <div className="text-blue-600 font-semibold">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenterPage;
