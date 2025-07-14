import React from "react";

const ListingsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">ITEM LIMIT & AUTO APPROVAL</h1>

      <div className="mb-6">
        <p className="font-semibold">Item Limit: 10,000 items</p>
        <p className="text-sm text-gray-700">
          <strong>Current Count (VAPs & SAs):</strong> 335
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Partner item limit is the maximum number of variation parents and standalone items that can be submitted at any time, regardless of autoapproval.
        </p>
      </div>

      <div className="mb-6">
        <p className="font-semibold">Auto Approvals: <span className="inline-block px-2 py-1 text-white bg-green-600 rounded">ON</span></p>
        <p className="text-sm text-gray-600 mt-2">
          When autoapproval is on, submitted items that are error-free will be automatically approved.
        </p>
      </div>

      <div className="mb-6">
        <p className="font-semibold">Item Type Holds: 0</p>
        <p className="text-sm text-gray-600">
          When auto approval is on, error-free submitted items of the following item types will be subjected to manual review.
        </p>
        <p className="text-sm mt-2 font-medium">Item Types on Hold:</p>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">ALLOWED ITEM TYPES</h2>
      <p className="text-sm text-gray-600 mb-4">
        Allowed Item Type rules determine which categories a partner is allowed to submit items under.
      </p>

      <table className="w-full border text-sm text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-3 py-2">Brand</th>
            <th className="border px-3 py-2">Subtypes</th>
            <th className="border px-3 py-2">Item Types</th>
            <th className="border px-3 py-2">Last Modified</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-3 py-2">CHAMPRO</td>
            <td className="border px-3 py-2">
              accessories and shoes, BIKES-SCOOTERS-SKATES, ELECTRONICS - MISCELLANEOUS, EXERCISE AND FITNESS, GAME ROOM GAMES, INDOOR TOYS, etc.
            </td>
            <td className="border px-3 py-2">
              Power Tool Parts and Accessories, Rulers and Measuring Tools, Socks, etc.
            </td>
            <td className="border px-3 py-2">Nov 16th 2023, 2:46 PM</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-8 mb-2">Product Subtypes</h2>
      <p className="text-sm text-gray-600 mb-2">
        Product subtypes are a higher-level concept and used to authorize a partner for many item types at once.
      </p>
      <p className="text-sm mb-4 text-gray-500">No results found</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Item Types</h2>
      <p className="text-sm text-gray-600 mb-2">
        Item types are the lowest level and are best used to authorize a partner for specific items.
      </p>

      <ul className="list-disc ml-6 space-y-1 text-sm">
        <li>Action Figures - Apr 25th 2023, 1:27 PM</li>
        <li>Backpacks - Apr 25th 2023, 1:21 PM</li>
        <li>Baseball Bats - Apr 25th 2023, 1:20 PM</li>
        <li>Bases and Base Accessories - Apr 25th 2023, 1:22 PM</li>
      </ul>
    </div>
  );
};

export default ListingsPage;
