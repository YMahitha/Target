import React from 'react';
import { Download, EyeOff } from 'lucide-react';

export default function ReturnsPage() {
  const returnData = [
    {
      id: '24410010441469382', sku: 'SC2BLK', qty: 1, license: '', tracking: '', initiated: 'Jul 14th 2025, 4:32 AM', shipped: ''
    },
    {
      id: '24410010440600287', sku: 'BB22532', qty: 1, license: '', tracking: '', initiated: 'Jul 12th 2025, 4:30 AM', shipped: ''
    },
    {
      id: '24410010440539198', sku: 'JBAJRBLU', qty: 1, license: '', tracking: '', initiated: 'Jul 12th 2025, 2:46 AM', shipped: ''
    },
    {
      id: '24410010439707005', sku: 'HXMJRROY', qty: 1, license: '', tracking: '', initiated: 'Jul 10th 2025, 3:43 AM', shipped: ''
    },
    {
      id: '24410010439416891', sku: 'RNGR2842085NWB', qty: 1, license: '418710340789', tracking: '', initiated: 'Jul 9th 2025, 6:43 PM', shipped: ''
    },
    {
      id: '24410010436861159', sku: 'A060YROY', qty: 1, license: '', tracking: '', initiated: 'Jul 3rd 2025, 1:11 AM', shipped: ''
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">RETURNS</h1>
      <p className="text-lg font-semibold">Total Returns: <span className="font-bold">635</span></p>

      {/* Filter Section */}
      <div className="bg-white border rounded shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-semibold">FILTERED COUNT: <span className="font-bold">635</span></p>
          <div className="flex gap-4 text-blue-600 text-sm font-medium cursor-pointer">
            <div className="flex items-center gap-1 hover:underline">
              <Download size={16} /> DOWNLOAD REPORT
            </div>
            <div className="flex items-center gap-1 hover:underline">
              <EyeOff size={16} /> HIDE FILTERS
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <Input label="Return Order #" placeholder="Return Order Number" />
          <Input label="Tracking" placeholder="Tracking #, PRO#" />
          <Input label="License Plate" placeholder="License Plate" />
          <Input label="Shipment ID" placeholder="Shipment ID" />
          <Input label="Bill of Lading" placeholder="BOL #" />
          <Input label="Item" placeholder="TCIN, SKU, Barcode" />
          <Dropdown label="Return Channel" />
          <Input label="Returns Center Location" placeholder="Ex.: Indianapolis" />
          <Input label="Store Location" placeholder="4-5 Digit Store Number" />
          <DateRange label="Return Initiated Date" />
          <DateRange label="Shipped to Partner Date" />
        </div>

        <div className="pt-2">
          <button className="text-blue-600 hover:underline text-sm">CLEAR ALL</button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border text-sm mt-2">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Return Order Number</th>
              <th className="border px-4 py-2 text-left">Partner SKU</th>
              <th className="border px-4 py-2 text-left">Return Qty</th>
              <th className="border px-4 py-2 text-left">License Plate Number</th>
              <th className="border px-4 py-2 text-left">Tracking/PRO Number</th>
              <th className="border px-4 py-2 text-left">Return Initiated Date</th>
              <th className="border px-4 py-2 text-left">Shipped to Partner Date</th>
            </tr>
          </thead>
          <tbody>
            {returnData.map((item, idx) => (
              <tr key={idx} className="even:bg-gray-50">
                <td className="border px-4 py-2 text-blue-700 underline cursor-pointer">{item.id}</td>
                <td className="border px-4 py-2">{item.sku}</td>
                <td className="border px-4 py-2">{item.qty}</td>
                <td className="border px-4 py-2">{item.license}</td>
                <td className="border px-4 py-2">{item.tracking}</td>
                <td className="border px-4 py-2">{item.initiated}</td>
                <td className="border px-4 py-2">{item.shipped}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Input component
const Input = ({ label, placeholder }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="border px-3 py-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  </div>
);

// Dropdown component
const Dropdown = ({ label }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">{label}</label>
    <select className="border px-3 py-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
      <option value="">Return Channel</option>
      <option>Online</option>
      <option>In-Store</option>
    </select>
  </div>
);

// Date Range
const DateRange = ({ label }) => (
  <div className="flex flex-col col-span-2">
    <label className="text-sm font-medium mb-1">{label}</label>
    <div className="flex gap-2">
      <input
        type="date"
        className="w-full border px-3 py-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <input
        type="date"
        className="w-full border px-3 py-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  </div>
);
