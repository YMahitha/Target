import React from "react";

const Attributes = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-semibold">Attributes & Values</h1>

      {/* Search Section */}
      <div className="bg-white rounded-md p-6 shadow-md space-y-4 border">
        <div>
          <h2 className="font-semibold text-lg mb-1">
            Available Values For A Merch Type Attribute
          </h2>
          <p className="text-sm text-gray-600">
            Example: Enter item type 'Shirts' & attribute 'Color Family' to view available color values for Color Family.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Item Type *</label>
            <input
              type="text"
              placeholder="Search Item Type"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Merch Type Attribute *</label>
            <input
              type="text"
              placeholder="Search Merch Type Attribute"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none"
            />
          </div>
          <button
            disabled
            className="bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed"
          >
            VIEW VALUES
          </button>
        </div>
      </div>

      {/* Value Requests Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Value Requests</h2>
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
          REQUEST NEW VALUE
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-md">
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2 font-medium">Request ID</th>
              <th className="px-4 py-2 font-medium">Item Type</th>
              <th className="px-4 py-2 font-medium">Attribute</th>
              <th className="px-4 py-2 font-medium">Value Requested</th>
              <th className="px-4 py-2 font-medium">Status</th>
              <th className="px-4 py-2 font-medium">Request Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t text-center">
              <td colSpan="6" className="py-6 text-gray-500">
                No results found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attributes;
