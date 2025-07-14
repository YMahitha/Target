// src/pages/Authentications.jsx
import { Pencil } from 'lucide-react';

export default function Authentications() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <div className="border-b py-3 px-6 text-lg font-semibold bg-gray-100">
        AUTHENTICATIONS
      </div>

      {/* Tabs */}
      <div className="border-b flex items-center px-6 space-x-6 mt-4">
        <button className="border-b-2 border-blue-600 pb-2 font-medium text-blue-600">
          API Tokens
        </button>
        <button className="pb-2 text-gray-500 hover:text-blue-600">Target+ Buy Shipping</button>
      </div>

      {/* Info */}
      <div className="px-6 py-4 text-sm leading-relaxed">
        <p className="italic font-medium text-gray-700 mb-2">*Required before items can list.</p>
        <div className="flex justify-between items-start">
          <p className="max-w-4xl text-gray-700">
            API tokens are used to authenticate integration access, they can be used by a third
            party integrator on behalf of a partner and/or directly by a partner to access the
            Target Plus APIs. In order to generate an API token, you must be an admin user.
          </p>
          <button>
            <Pencil className="h-4 w-4 text-blue-600" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="px-6 mt-4">
        <table className="w-full text-sm border-t">
          <thead className="text-gray-700">
            <tr>
              <th className="text-left px-4 py-2">Created Date</th>
              <th className="text-left px-4 py-2">Description</th>
              <th className="text-left px-4 py-2">Last Used</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2">Apr 25th 2023, 8:29 PM</td>
              <td className="px-4 py-2">Integrator</td>
              <td className="px-4 py-2">Jul 15th 2025, 5:04 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
