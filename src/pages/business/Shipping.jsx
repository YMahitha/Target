// ShippingInfoPage.jsx
import React from 'react';

export default function ShippingInfoPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">SHIPPING INFO</h1>

      {/* 2-Day Transit Time Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Enable 2-Day Transit Time</h2>
        <p className="text-sm text-gray-600 mb-4">
          Override other shipping configurations to apply the 2-day transit time for selected nodes, states, and TCINs...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded">
            <h3 className="font-semibold mb-2">Configure States & Distribution Centers</h3>
            <p className="text-sm mb-2">Configure your Distribution Center (Node) & States that can ship within 2 Day TNT</p>
            <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded">UPLOAD FILE</button>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-semibold mb-2">Configure Items</h3>
            <p className="text-sm mb-2">Provide the list of items that can be shipped within 2 days of transit time</p>
            <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded">UPLOAD FILE</button>
          </div>
        </div>
      </div>

      {/* Distribution Center */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Distribution Centers</h2>
        <div className="text-sm font-semibold mb-2 border-b pb-1">9R7PNT - DC - STL</div>
        <div className="text-sm space-y-2">
          <p><strong>Distribution Center Name:</strong> DC - STL ✎</p>
          <p><strong>Distribution Center ID:</strong> 9r7pnt</p>
          <p><strong>Ship Node:</strong> MYRJ</p>
          <p><strong>Distribution Center Time Zone:</strong> Central Standard Time - Minnesota (UTC-06:00) ✎</p>
        </div>
      </div>

      {/* Contact & Address */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">DC Contact ✎</h2>
        <p className="text-sm italic">None provided.</p>
        <h2 className="text-xl font-semibold mt-4 mb-2">Address* ✎</h2>
        <p className="text-sm">2215 Hitzert Ct<br />Fenton, MO 63026<br />US</p>
      </div>

      {/* Shipping Hours */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Shipping Hours* ✎</h2>
        <ul className="text-sm space-y-1">
          <li><strong>Monday</strong> 6:30 AM - 5:00 PM</li>
          <li><strong>Tuesday</strong> 6:30 AM - 5:00 PM</li>
          <li><strong>Wednesday</strong> 6:30 AM - 5:00 PM</li>
          <li><strong>Thursday</strong> 6:30 AM - 5:00 PM</li>
          <li><strong>Friday</strong> 6:30 AM - 5:00 PM</li>
        </ul>
        <p className="text-sm mt-2"><strong>Time Zone:</strong> Central Standard Time - Minnesota (UTC-06:00)</p>
      </div>

      {/* Dates Closed */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Dates Closed* ✎</h2>
        <p className="text-sm mb-2">These dates reflect operational date closures...</p>
        <div className="flex flex-wrap gap-2">
          {[
            '09/02/2024','11/28/2024','12/25/2024','01/01/2025','01/15/2025','01/20/2025','05/26/2025','07/04/2025','09/01/2025','11/27/2025','12/25/2025','01/01/2026','01/19/2026'
          ].map(date => (
            <span className="bg-gray-200 px-3 py-1 rounded text-sm" key={date}>{date}</span>
          ))}
        </div>
      </div>

      {/* Carriers & Service Levels */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Carriers & Service Levels*</h2>
        <p className="text-sm mb-1"><strong>Carriers*:</strong> FedEx, UPS, USPS</p>
        <p className="text-sm mb-1"><strong>Order Capacity Per Day:</strong> N/A</p>

        <table className="w-full mt-4 text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">Service Level*</th>
              <th className="border p-2 text-left">Time in Transit*</th>
              <th className="border p-2 text-left">Site Cutoff Time (CST)*</th>
              <th className="border p-2 text-left">Building Lead Time</th>
              <th className="border p-2 text-left">Rollover Days</th>
              <th className="border p-2 text-left">Max Rollover Days</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">EXPRESS</td>
              <td className="border p-2">1 day</td>
              <td className="border p-2">2:00 AM</td>
              <td className="border p-2"></td>
              <td className="border p-2"></td>
              <td className="border p-2"></td>
            </tr>
            <tr>
              <td className="border p-2">STANDARD</td>
              <td className="border p-2">5 days</td>
              <td className="border p-2">12:00 PM</td>
              <td className="border p-2"></td>
              <td className="border p-2"></td>
              <td className="border p-2"></td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4 text-sm">
          <p className="italic">If a service level does not have a building lead time, 24 Hours will be used as a default when within order capacity.</p>
        </div>

        <h3 className="text-lg font-medium mt-6">States Eligible for 2-Day Shipping <span className="text-blue-600">ℹ️</span></h3>
        <p className="italic text-sm mt-1">None Provided</p>
      </div>
    </div>
  );
}