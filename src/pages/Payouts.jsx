import React from "react";

export default function Payouts() {
  const payouts = [
    { date: "Jul 8th 2025, 5:30 AM", id: "po_1RiP1VGdgkisKkSZifY0GAhl", amount: "$625.78" },
    { date: "Jul 1st 2025, 5:30 AM", id: "po_1RfrhjGdgkisKkSZA1EBtZnV", amount: "$126.16" },
    { date: "Jun 24th 2025, 5:30 AM", id: "po_1RdKJJGdgkisKkSZ1i25c0xD", amount: "$231.52" },
    { date: "Jun 17th 2025, 5:30 AM", id: "po_1Ran8DGdgkisKkSZN3RcCl0c", amount: "$453.22" },
    { date: "Jun 10th 2025, 5:30 AM", id: "po_1RYFc7GdgkisKkSZhxrxbi8d", amount: "$831.58" },
    { date: "Jun 3rd 2025, 5:30 AM", id: "po_1RViNdGdgkisKkSZ54QYeCVB", amount: "$562.65" },
    { date: "May 27th 2025, 5:30 AM", id: "po_1RTB0JGdgkisKkSZmnkypJVW", amount: "$2,041.02" },
    { date: "May 20th 2025, 5:30 AM", id: "po_1RQdx2GdgkisKkSZsHSjbMUR", amount: "$767.34" },
    { date: "May 13th 2025, 5:30 AM", id: "po_1RO6aKGdgkisKkSZsFWV2gS4", amount: "$1,593.84" },
    { date: "May 6th 2025, 5:30 AM", id: "po_1RLYyiGdgkisKkSZVvC0QbJE", amount: "$169.62" },
    { date: "Apr 29th 2025, 5:30 AM", id: "po_1RJ1paGdgkisKkSZms9ldrcl", amount: "$1,525.50" },
    { date: "Apr 22nd 2025, 5:30 AM", id: "po_1RGUTeGdgkisKkSZGVQhVoLr", amount: "$558.39" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-semibold border-b pb-2">PAYOUTS & ACCOUNT</h1>

      <div className="bg-white p-6 rounded shadow">
        <p className="font-semibold text-lg">
          Current Stripe Balance: <span className="font-bold">$690.37</span>
        </p>
        <p className="text-sm text-gray-700 mt-2">
          Manage your company payments account in Stripe. In the event that the account owner needs to be changed, a support case can be opened using <a className="text-blue-600 underline" href="#">Open Cases</a>.
        </p>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow">
          ACCESS STRIPE
        </button>
      </div>

      <div>
        <p className="font-semibold text-lg mt-4">
          Total Payouts: <span className="font-bold">{payouts.length}</span>
        </p>

        {/* Filters */}
        <div className="bg-white rounded shadow mt-3 p-4 flex flex-wrap items-center gap-4 justify-between">
          <div className="flex gap-2 items-center">
            <label className="font-medium">Payout Date</label>
            <input type="date" className="border rounded px-2 py-1" />
            <span className="text-gray-400">to</span>
            <input type="date" className="border rounded px-2 py-1" />
            <button className="text-blue-600 text-sm font-semibold ml-2">CLEAR ALL</button>
          </div>
          <div className="flex gap-6 text-blue-600 font-medium text-sm">
            <button>📥 DOWNLOAD REPORT</button>
            <button>❌ HIDE FILTERS</button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full text-sm bg-white rounded shadow">
            <thead className="text-left bg-gray-100 border-b">
              <tr>
                <th className="p-3">Payout Date</th>
                <th className="p-3">Payout ID</th>
                <th className="p-3">Payout Amount</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((p, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">{p.date}</td>
                  <td className="p-3 text-blue-700">{p.id}</td>
                  <td className="p-3 font-medium">{p.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
