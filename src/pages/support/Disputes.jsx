import React from "react";
import { Calendar, ChevronDown, Search, Download } from "lucide-react";

const DisputesPage = () => {
  return (
    <div className="p-6 text-sm">
      <h2 className="text-xl font-semibold mb-4">RETURN DISPUTES</h2>

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Return Disputes</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          FILE A RETURN DISPUTE
        </button>
      </div>

      <div className="bg-gray-50 border rounded-md p-4 shadow-sm mb-6">
        <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
          <span className="font-medium">FILTERED COUNT: <span className="font-bold">0</span></span>

          <div className="flex gap-4">
            <button className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline">
              <Download size={14} />
              DOWNLOAD REPORT
            </button>
            <button className="text-blue-600 text-sm font-medium hover:underline">
              HIDE FILTERS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="relative">
            <button className="w-full flex items-center justify-between border px-3 py-2 rounded text-sm text-gray-700">
              Status
              <ChevronDown size={14} />
            </button>
          </div>
          <div className="flex items-center border rounded px-2 py-1">
            <Search size={16} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Dispute Number"
              className="w-full outline-none text-sm"
            />
          </div>
          <div className="flex items-center border rounded px-2 py-1">
            <Search size={16} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Return Order #"
              className="w-full outline-none text-sm"
            />
          </div>
          <div className="flex items-center border rounded px-2 py-1">
            <Search size={16} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="TCIN, SKU, Barcode"
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="flex items-center border rounded px-2 py-1">
            <Calendar size={16} className="text-gray-500 mr-2" />
            <input type="date" className="w-full text-sm outline-none" placeholder="Start Date" />
          </div>
          <div className="flex items-center border rounded px-2 py-1">
            <Calendar size={16} className="text-gray-500 mr-2" />
            <input type="date" className="w-full text-sm outline-none" placeholder="End Date" />
          </div>
          <div className="flex items-center border rounded px-2 py-1">
            <Calendar size={16} className="text-gray-500 mr-2" />
            <input type="date" className="w-full text-sm outline-none" placeholder="Start Date" />
          </div>
          <div className="flex items-center border rounded px-2 py-1">
            <Calendar size={16} className="text-gray-500 mr-2" />
            <input type="date" className="w-full text-sm outline-none" placeholder="End Date" />
          </div>
        </div>

        <div className="flex items-center border rounded px-2 py-1 w-full md:w-1/2 mb-4">
          <Search size={16} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="License Plate"
            className="w-full text-sm outline-none"
          />
        </div>

        <button className="text-blue-600 text-sm font-medium">CLEAR ALL</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-2 text-left">Dispute</th>
              <th className="p-2 text-left">Return Order & TCIN</th>
              <th className="p-2 text-left">Dispute Reason</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Created By</th>
              <th className="p-2 text-left">Created Date</th>
              <th className="p-2 text-left">Last Modified</th>
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

export default DisputesPage;
