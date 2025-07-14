import React from "react";

const notifications = [
  {
    order: "Order Received",
    portal: true,
    email: false,
    defaultEmail: "All items are selected.",
    additionalEmail: "",
  },
  {
    order: "Unshipped Past Due Date",
    portal: true,
    email: true,
    defaultEmail: "All items are selected.",
    additionalEmail: "",
  },
  {
    order: "Order Cancellation Warning",
    portal: true,
    email: true,
    defaultEmail: "All items are selected.",
    additionalEmail: "",
  },
  {
    order: "Cancelled Orders",
    portal: true,
    email: false,
    defaultEmail: "All items are selected.",
    additionalEmail: "",
  },
];

const NotificationsPage = () => {
  return (
    <div className="p-6 text-sm">
      <h2 className="text-xl font-semibold mb-4">NOTIFICATION SETTINGS</h2>
      <h3 className="text-lg font-medium mb-2">MANAGE YOUR NOTIFICATIONS</h3>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="border px-4 py-2 text-left">Order</th>
              <th className="border px-4 py-2 text-left">Marketplace Portal</th>
              <th className="border px-4 py-2 text-left">E-Mail Notification</th>
              <th className="border px-4 py-2 text-left">Default E-mail</th>
              <th className="border px-4 py-2 text-left">Additional E-mail</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((item, index) => (
              <tr key={index} className="text-gray-700">
                <td className="border px-4 py-2">{item.order}</td>
                <td className="border px-4 py-2">
                  <input
                    type="checkbox"
                    checked={item.portal}
                    readOnly
                    className="accent-blue-600"
                  />{" "}
                  <span className="ml-1">Active</span>
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="checkbox"
                    checked={item.email}
                    readOnly
                    className="accent-blue-600"
                  />{" "}
                  <span className="ml-1">{item.email ? "Active" : "Inactive"}</span>
                </td>
                <td className="border px-4 py-2">
                  <select className="w-full border rounded px-2 py-1 text-gray-600">
                    <option>{item.defaultEmail}</option>
                  </select>
                </td>
                <td className="border px-4 py-2">
                  <select className="w-full border rounded px-2 py-1 text-gray-600">
                    <option>Select...</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
          Edit
        </button>
        <span className="ml-4 text-blue-600 underline cursor-pointer">Help Article</span>
      </div>
    </div>
  );
};

export default NotificationsPage;
