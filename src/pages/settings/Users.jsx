// src/pages/UsersAndContacts.jsx
import { MoreVertical, Plus } from 'lucide-react';

export default function UsersAndContacts() {
  const users = [
    {
      name: 'Vicki Sartori',
      email: 'vsartori@marketplacerev.com',
      access: 'READ',
      office: '+1 (833) 908-3993',
      mobile: '+1 (314) 602-9056',
      responsibilities: 'None Provided',
    },
    {
      name: 'Mike Vertlieb',
      email: 'mvertlieb@commercev.com',
      access: 'ADMIN',
      office: '+1 (636) 600-9337',
      mobile: '+1 (314) 680-5959',
      responsibilities: 'Customer Support, Sales Rep / Business Management, Shipping & Fulfillment, Finance & Accounting, Item Data & Setup',
    },
    {
      name: 'Mahitha Chowdary',
      email: 'mahicchowdary42@gmail.com',
      access: 'ADMIN',
      office: '+1 (314) 766-0718',
      mobile: '+1 (314) 766-0718',
      responsibilities: 'None Provided',
    },
    {
      name: 'CONCOURSE TEAM EXPRESS',
      email: 'ar1@teamexpre',
      access: 'ADMIN',
      office: '+1 (314) 492-xxxx',
      mobile: '+1 (314) 814-1179',
      responsibilities: 'None Provided',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b py-3 px-6 text-lg font-semibold bg-gray-100">
        USERS & CONTACTS
      </div>

      {/* Page Title & Add User */}
      <div className="flex justify-between items-center px-6 py-4">
        <h2 className="text-xl font-medium">Portal Users And Support Contacts</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded shadow">
          <Plus className="inline-block w-4 h-4 mr-1" />
          ADD USER
        </button>
      </div>

      {/* Table Header */}
      <div className="overflow-x-auto px-6">
        <table className="min-w-full text-sm border">
          <thead className="bg-gray-100 text-gray-700 font-medium border-b">
            <tr>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Email</th>
              <th className="text-left px-4 py-2">Portal Access</th>
              <th className="text-left px-4 py-2">Office Number</th>
              <th className="text-left px-4 py-2">Mobile Number for Two-Factor Authentication</th>
              <th className="text-left px-4 py-2">Responsibilities</th>
              <th className="px-2 py-2"></th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {users.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.access}</td>
                <td className="px-4 py-2">{user.office}</td>
                <td className="px-4 py-2">{user.mobile}</td>
                <td className="px-4 py-2 whitespace-pre-wrap">{user.responsibilities}</td>
                <td className="px-2 py-2">
                  <MoreVertical className="w-4 h-4 text-gray-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-600 py-6 border-t mt-6">
        <div className="mb-1">™ & © 2025 target brands, inc.</div>
        <div className="flex justify-center items-center space-x-2">
          <img src="/target-logo.svg" alt="Target Logo" className="w-5 h-5" />
          <span className="font-semibold">TARGET</span>
        </div>
        <div className="mt-1">Expect More. Pay Less.</div>
      </footer>
    </div>
  );
}
