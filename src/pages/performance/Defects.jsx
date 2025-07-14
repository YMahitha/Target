// OrderDefectRatePage.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';

const odrTrendData = [
  { date: 'Apr 14', value: 10 }, { date: 'Apr 17', value: 35 }, { date: 'Apr 21', value: 50 },
  { date: 'Apr 24', value: 5 }, { date: 'Apr 30', value: 40 }, { date: 'May 3', value: 10 },
  { date: 'May 13', value: 25 }, { date: 'May 22', value: 15 }, { date: 'May 28', value: 5 },
  { date: 'Jun 2', value: 30 }, { date: 'Jul 2', value: 25 }, { date: 'Jul 6', value: 20 }
];

const defectMetrics = [
  { name: 'Late Deliveries', value: '2.64%', status: '✔', compliant: true },
  { name: 'Defective Returns', value: '3.08%', status: '✔', compliant: true },
  { name: 'Cancellations', value: '0%', status: '✔', compliant: true },
  { name: 'Defective Contacts', value: '0.44%', status: '✔', compliant: true },
];

export default function OrderDefectRatePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">ORDER DEFECT RATE</h1>

      {/* ODR Summary */}
      <div className="bg-white border rounded p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-xl font-semibold">Order Defect Rate (ODR)</div>
            <div className="text-sm text-gray-500">Last 90 Days</div>
            <div className="text-3xl font-bold text-orange-600 mt-2">5.73% <span className="text-sm font-normal">✖ Non-compliant</span></div>
          </div>
          <div className="max-w-md text-sm text-gray-600">
            <strong>ODR is not a sum of defect category percentages</strong><br />
            ODR is calculated as defect orders divided by total number of orders in a time frame. It is not a sum because one order can belong to multiple defect categories.
          </div>
        </div>
        <div className="relative w-full h-5 bg-gray-200 rounded-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full bg-orange-600" style={{ width: '82%' }}></div>
          <div className="absolute left-[71%] top-0 h-full w-[2px] bg-black"></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0.00<br />Compliant</span>
          <span>5.00<br />Non-compliant</span>
          <span>7.00<br />Probation</span>
        </div>
      </div>

      {/* Defect Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {defectMetrics.map((metric, i) => (
          <div key={i} className="bg-white border rounded p-4 flex justify-between items-center">
            <div>
              <div className="font-semibold">{metric.name}</div>
              <div className="text-sm text-gray-500">Last 90 Days</div>
              <div className="text-lg font-bold text-green-600">{metric.value} <span className="text-sm">{metric.status}</span></div>
            </div>
            <button className="text-blue-600 text-sm font-medium">VIEW DETAILS</button>
          </div>
        ))}
      </div>

      {/* ODR Trend Chart */}
      <div className="bg-white border rounded p-4">
        <div className="text-lg font-semibold mb-2">Overall ODR Over Time</div>
        <div className="text-sm text-gray-500 mb-4">Display Range: Last 90 Days (Apr 14 - Jul 13)</div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={odrTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" angle={-30} textAnchor="end" height={60} />
            <YAxis domain={[0, 60]} />
            <Tooltip />
            <ReferenceLine y={5} stroke="brown" strokeDasharray="5 5" label={{ value: '5% NON-COMPLIANT', position: 'insideTopLeft', fill: 'brown', fontSize: 12 }} />
            <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4">
          <a href="#" className="text-blue-600 text-sm font-medium">GENERATE & DOWNLOAD REPORT</a>
        </div>
      </div>
    </div>
  );
}