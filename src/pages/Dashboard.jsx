import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-white px-6 py-8 min-h-screen space-y-8">

      {/* Alert Banner */}
      <div className="bg-orange-100 border border-orange-300 text-orange-800 px-4 py-3 rounded shadow">
        <p className="font-semibold text-sm">
          ⚠️ Action Required in Stripe Portal: Missing Account Information
        </p>
        <p className="text-sm">
          Your Stripe account is missing information. If the Stripe ADMIN on your account doesn't take required action in the <a href="#" className="underline text-blue-600">Stripe portal</a>, payments will be halted.
        </p>
      </div>

      {/* First Row - Unshipped + Order Defect */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Total Unshipped */}
        <div className="bg-white border rounded-lg shadow p-6">
          <div className="flex items-center text-xl font-semibold mb-4 text-gray-800">
            <span className="text-red-600 text-2xl mr-2">🛒</span>
            Total Unshipped: <span className="ml-2">0</span>
          </div>
          <div className="grid grid-cols-2 text-center text-sm divide-x">
            <div>
              <p className="text-gray-500">To Be Shipped By Today</p>
              <p className="text-blue-600 font-bold text-lg">0</p>
            </div>
            <div>
              <p className="text-gray-500">Unshipped Past Due Date</p>
              <p className="text-blue-600 font-bold text-lg">0</p>
            </div>
          </div>
        </div>

        {/* Order Defect Rate */}
        <div className="bg-white border rounded-lg shadow p-6">
          <div className="flex items-center text-lg font-semibold text-gray-800 mb-3">
            <span className="text-red-500 text-2xl mr-2">⛔</span>
            Order Defect Rate in the Last 90 Days
          </div>
          <p className="text-sm text-gray-700 mb-1">Status: <span className="text-red-600 font-semibold">Non-Compliant</span></p>
          <div className="flex items-center text-3xl font-bold text-blue-700 mb-2">
            5.73% <span className="text-red-500 text-2xl ml-2">❌</span>
          </div>
          <div className="text-sm text-gray-700 space-y-1">
            <div className="flex justify-between"><span>Late Deliveries</span><span>2.64%</span></div>
            <div className="flex justify-between"><span>Defective Returns</span><span>3.08%</span></div>
            <div className="flex justify-between"><span>Cancellations</span><span>0%</span></div>
            <div className="flex justify-between"><span>Defective Contacts</span><span>0.44%</span></div>
          </div>
        </div>
      </div>

      {/* Second Row - Items + Payouts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Items */}
        <div className="bg-white border rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-semibold flex items-center text-gray-800">
              <span className="text-red-600 text-2xl mr-2">📦</span>
              Items
            </div>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>Filter by VAP, VC, SA</option>
            </select>
          </div>
          <div className="divide-y divide-gray-200 text-sm">
            <div className="flex justify-between py-2"><span>Total</span><span className="text-blue-600 font-semibold">8,066</span></div>
            <div className="flex justify-between py-2"><span>Published, In Stock</span><span className="text-blue-600 font-semibold">623</span></div>
            <div className="flex justify-between py-2"><span>Published, Out of Stock</span><span className="text-blue-600 font-semibold">256</span></div>
            <div className="flex justify-between py-2"><span>Unlisted</span><span className="text-blue-600 font-semibold">6,976</span></div>
            <div className="flex justify-between py-2"><span>Pending</span><span className="text-blue-600 font-semibold">11</span></div>
          </div>
        </div>

        {/* Payouts */}
        <div className="bg-white border rounded-lg shadow p-6">
          <div className="text-lg font-semibold flex items-center text-gray-800 mb-4">
            <span className="text-green-600 text-2xl mr-2">💵</span>
            Payouts
          </div>
          <p className="text-sm text-gray-700 mb-1">Current Stripe Balance: <span className="font-bold">$690.37</span></p>
          <p className="text-sm text-gray-700 mb-3">Previous Payout (July 8th 2025): <span className="text-blue-700 font-semibold">$625.78</span></p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">ACCESS STRIPE</button>
          <p className="text-xs text-gray-400 mt-2">Admin Only</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
