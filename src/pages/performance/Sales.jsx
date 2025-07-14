// SalesMetricsPage.jsx
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const gmvData = [
  { date: '07-07', value: 0 },
  { date: '07-08', value: 420 },
  { date: '07-09', value: 0 },
  { date: '07-10', value: 0 },
  { date: '07-11', value: 570 },
  { date: '07-12', value: 15 },
  { date: '07-13', value: 14 }
];

const pdpData = [
  { date: '07-07', value: 0.14 },
  { date: '07-08', value: 0.44 },
  { date: '07-09', value: 0 },
  { date: '07-10', value: 0 },
  { date: '07-11', value: 0.6 },
  { date: '07-12', value: 0.02 },
  { date: '07-13', value: 0.18 }
];

const bestSellerData = [
  { title: "All Star Pro Elite 335 Baseball Catchers Mitt Throws Right", sku: "CM3000XSBTR", tcin: "91825428", gmv: 449.95, units: 1 },
  { title: "All Star Heiress Fastpitch Catchers Kit 912 MD Black", sku: "CKWHMMBLK", tcin: "91294415", gmv: 259.95, units: 1 },
  { title: "Champro Hx Gamer Bat Helmet With Jaw Guard JUNIOR Forest Green", sku: "HXMJGJRFOR", tcin: "89855785", gmv: 54.95, units: 1 },
];

export default function SalesMetricsPage() {
  const [activeTab, setActiveTab] = useState('BEST SELLER');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">SALES METRICS</h1>

      {/* GMV Chart */}
      <div className="bg-white border rounded p-4 mb-6">
        <div className="font-semibold mb-1">Gross Merchandise Volume (GMV) Over Time</div>
        <div className="text-sm text-gray-500 mb-2">Total: $1,044.48</div>
        <div className="text-xs text-gray-500 mb-4">Last 7 Days (Jul 7 - Jul 14)</div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={gmvData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* PDP Conversion Rate */}
      <div className="bg-white border rounded p-4 mb-6">
        <div className="font-semibold mb-1">PDP Conversion Rate Over Time</div>
        <div className="text-sm text-gray-500 mb-2">Average: 0.18%</div>
        <div className="text-xs text-gray-500 mb-4">Last 7 Days (Jul 7 - Jul 14)</div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={pdpData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 0.7]} />
            <Tooltip formatter={(value) => `${(value * 100).toFixed(2)}%`} />
            <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top Item Performance */}
      <div className="bg-white border rounded p-4">
        <div className="font-semibold mb-2">Top 25 Item Performance</div>
        <div className="text-sm text-gray-500 mb-4">Last 7 Days (Jul 7 - Jul 14)</div>
        <div className="flex border-b mb-2">
          {['BEST SELLER', 'TOP CONVERTING'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="p-2">Product Title</th>
              <th className="p-2">Partner Sku</th>
              <th className="p-2">TCIN</th>
              <th className="p-2">GMV</th>
              <th className="p-2">Units Sold</th>
            </tr>
          </thead>
          <tbody>
            {bestSellerData.map((item, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-2">{item.title}</td>
                <td className="p-2">{item.sku}</td>
                <td className="p-2">{item.tcin}</td>
                <td className="p-2">${item.gmv.toFixed(2)}</td>
                <td className="p-2">{item.units}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}