// src/pages/items/AllItems.jsx

import React from "react";
import { Search } from "lucide-react";

const mockData = [
  {
    sku: "RNGR3842115NWB",
    tcin: "90112882",
    title: "Ringor Flite Women's Softball Spikes SZ 11.5 Navy | White",
    type: "Cleats",
    inventory: 0,
    relationship: "VC",
    publish: "Yes",
    status: "APPROVED",
    update: "Jul 14th 2025, 11:35 PM",
  },
  {
    sku: "RNGR3842075CCWB",
    tcin: "90112898",
    title: "Ringor Flite Women's Softball Spikes SZ 7.5 Charcoal | White",
    type: "Cleats",
    inventory: 0,
    relationship: "VC",
    publish: "Yes",
    status: "APPROVED",
    update: "Jul 14th 2025, 11:35 PM",
  },
  {
    sku: "RNGR3842080RDWB",
    tcin: "90112914",
    title: "Ringor Flite Women's Softball Spikes SZ 8 Red | White",
    type: "Cleats",
    inventory: 0,
    relationship: "VC",
    publish: "Yes",
    status: "APPROVED",
    update: "Jul 14th 2025, 11:35 PM",
  },
  ...Array.from({ length: 17 }).map((_, i) => ({
    sku: `RNGR38421X${i}`,
    tcin: `901129${i + 15}`,
    title: `Ringor Flite Women's Softball Spikes SZ ${6 + i} Custom Color`,
    type: "Cleats",
    inventory: 0,
    relationship: "VC",
    publish: "Yes",
    status: "APPROVED",
    update: "Jul 14th 2025, 11:35 PM",
  })),
].flat();

const AllItems = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-semibold">All Items</h1>

      <div className="bg-white shadow p-4 rounded-md">
        <div className="flex flex-wrap gap-4 mb-4 items-center">
          <div className="flex items-center border rounded px-2 py-1 w-full md:w-64">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search Item ..."
              className="outline-none w-full"
            />
          </div>
          <button className="border px-3 py-1 rounded">Data Updated</button>
          <button className="border px-3 py-1 rounded">Publish Status</button>
          <button className="border px-3 py-1 rounded">Inventory</button>
          <button className="border px-3 py-1 rounded">Relationship</button>
          <button className="text-blue-600">Clear All</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 font-semibold">Partner SKU</th>
                <th className="p-2 font-semibold">TCIN</th>
                <th className="p-2 font-semibold">Title</th>
                <th className="p-2 font-semibold">Item Type</th>
                <th className="p-2 font-semibold">Inventory</th>
                <th className="p-2 font-semibold">Relationship</th>
                <th className="p-2 font-semibold">Publish Status</th>
                <th className="p-2 font-semibold">Latest Status</th>
                <th className="p-2 font-semibold">Last Item Update</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2 text-blue-700 cursor-pointer">{item.sku}</td>
                  <td className="p-2 text-blue-700 cursor-pointer">{item.tcin}</td>
                  <td className="p-2">{item.title}</td>
                  <td className="p-2">{item.type}</td>
                  <td className="p-2">{item.inventory}</td>
                  <td className="p-2">{item.relationship}</td>
                  <td className="p-2 text-blue-600">{item.publish}</td>
                  <td className="p-2">{item.status}</td>
                  <td className="p-2">{item.update}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
