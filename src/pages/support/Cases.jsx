import React from "react";
import { Calendar, ChevronDown, Search } from "lucide-react";

const CasesPage = () => {
  return (
    <div className="p-6 text-sm">
      <h2 className="text-xl font-semibold mb-4">CASES</h2>

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Total Cases: <span className="font-bold">0</span></h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          SUBMIT A NEW CASE
        </button>
      </div>

      <div className="bg-gray-50 border rounded-md p-4 shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="flex items-center border rounded px-2 py-1">
            <Search size={16} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search Case..."
              className="w-full outline-none text-sm"
            />
          </div>
          <div className="relative">
            <button className="w-full flex items-center justify-between border px-3 py-2 rounded text-sm text-gray-700">
              Case Status
              <ChevronDown size={14} />
            </button>
          </div>
          <div className="relative">
            <button className="w-full flex items-center justify-between border px-3 py-2 rounded text-sm text-gray-700">
              Case Type
              <ChevronDown size={14} />
            </button>
          </div>
        </div>

        <label className="block text-gray-700 text-sm font-medium mb-1">Case Created</label>
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="flex items-center border rounded px-2 py-1 w-full md:w-48">
            <Calendar size={16} className="text-gray-500 mr-2" />
            <input type="date" className="w-full text-sm outline-none" />
          </div>
          <div className="flex items-center border rounded px-2 py-1 w-full md:w-48">
            <Calendar size={16} className="text-gray-500 mr-2" />
            <input type="date" className="w-full text-sm outline-none" />
          </div>
        </div>

        <button className="text-blue-600 text-sm font-medium">CLEAR ALL</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-2 text-left">Case Number</th>
              <th className="p-2 text-left">Subject</th>
              <th className="p-2 text-left">Case Type</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Created Date</th>
              <th className="p-2 text-left">Partner Email</th>
              <th className="p-2 text-left">Last Modified Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td colSpan="7" className="p-4 text-gray-500">
                No results found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CasesPage;
