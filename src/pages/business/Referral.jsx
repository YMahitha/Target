// src/pages/ReferralFees.jsx
import { Search } from 'lucide-react';

export default function ReferralFees() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b py-3 px-6 text-lg font-semibold bg-gray-100">
        REFERRAL FEES
      </div>

      {/* Info Text */}
      <div className="px-6 py-4 text-sm text-gray-700">
        All fees are based on the subtype base referral fees unless a different referral fee is specified below.
        To view a complete list of allowed item types and referral fees for this partner,&nbsp;
        <a href="#" className="text-blue-600 underline">download the allowed item type report</a>.
      </div>

      {/* Search Field */}
      <div className="px-6 mb-4">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search Item Type"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500" />
        </div>
      </div>

      {/* Table */}
      <div className="px-6 overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100 border-b text-left font-medium text-gray-700">
            <tr>
              <th className="px-4 py-2 border-r">Item Type</th>
              <th className="px-4 py-2 border-r font-semibold">Start Date ↓</th>
              <th className="px-4 py-2 border-r">Last Modified By</th>
              <th className="px-4 py-2 border-r">Referral Fee</th>
              <th className="px-4 py-2">Price Range and Referral Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-600">
              <td colSpan="5" className="px-4 py-6 text-center">
                No results found
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
