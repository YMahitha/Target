import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const chartData = [
  { date: '07/13/2025', count: 2 },
  { date: '07/14/2025', count: 3 },
  { date: '07/15/2025', count: 1 },
  { date: '07/16/2025', count: 0 },
  { date: '07/17/2025', count: 0 }
];

export default function OrdersPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">ORDERS</h1>

      <div className="flex flex-wrap gap-4">
        <select className="border rounded px-3 py-2">
          <option>Select shipnode</option>
        </select>

        <button className="bg-blue-600 text-white rounded px-3 py-2">Help Article</button>

        <button className="flex items-center border px-3 py-2 rounded">
          <span className="mr-2">📦</span>
          Shipment History
        </button>

        <button className="flex items-center border px-3 py-2 rounded">
          <span className="mr-2">⬇️</span>
          Download All
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          'Unshipped Orders',
          'Unshipped Past Due Date',
          'Released Orders',
          'Partially Shipped',
        ].map((label, idx) => (
          <div key={idx} className="bg-white border rounded p-4 shadow-sm">
            <p className="font-medium">{label}</p>
            <p className="text-blue-700 text-xl font-bold mt-2">0</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border rounded p-4 shadow-sm h-64">
          <h2 className="font-semibold mb-2">Unshipped Past Due</h2>
          <p className="text-sm text-gray-600">
            Count of order IDs with items crossing Requested Ship Date
          </p>
          <div className="flex justify-center items-center h-full text-gray-400">No data to display!</div>
        </div>

        <div className="bg-white border rounded p-4 shadow-sm h-64">
          <h2 className="font-semibold mb-2">Orders To Be Shipped</h2>
          <p className="text-sm text-gray-600">
            Count of order IDs that need to be shipped in next 5 days
          </p>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Showing Details For :</h2>

        <div className="grid grid-cols-4 gap-4">
          <input type="text" placeholder="Order Status" className="border px-3 py-2 rounded" defaultValue="Released" />
          <input type="text" placeholder="Order Placed Date" className="border px-3 py-2 rounded" defaultValue="04/15/2025 - 07/14/2025" />
          <input type="text" placeholder="Request Ship Date" className="border px-3 py-2 rounded" />
          <input type="text" placeholder="Deliver By" className="border px-3 py-2 rounded" />
        </div>

        <div className="flex gap-6 items-center">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Only show Orders at Risk</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Only show auto cancellations</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border rounded p-4 shadow-sm">
          <h3 className="font-medium">Shipped Orders</h3>
          <p className="text-blue-700 text-xl font-bold mt-2">226</p>
        </div>

        <div className="bg-white border rounded p-4 shadow-sm">
          <h3 className="font-medium">Cancelled Orders</h3>
          <p className="text-blue-700 text-xl font-bold mt-2">0</p>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mt-6 mb-2">RECORD COUNT : 226</h2>
        <h3 className="font-medium mb-2">ORDER DETAILS</h3>

        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              {['Order ID', 'Order Placed On', 'Request Ship Date (System Time)', 'Deliver By', 'Ship Node', 'Status'].map(
                (header, idx) => (
                  <th key={idx} className="border px-4 py-2 text-left">
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, idx) => (
              <tr key={idx} className="even:bg-gray-50">
                <td className="border px-4 py-2 text-blue-700 underline cursor-pointer">
                  902002699233563-8066814523
                </td>
                <td className="border px-4 py-2">Jul 12th 2025, 3:40 AM</td>
                <td className="border px-4 py-2">Jul 15th 2025, 8:30 AM</td>
                <td className="border px-4 py-2">Jul 17, 2025</td>
                <td className="border px-4 py-2">MYRJ</td>
                <td className="border px-4 py-2">
                  <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">Shipped</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}