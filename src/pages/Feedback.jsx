import React from "react";
import { useNavigate } from "react-router-dom";

const FeedbackModal = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/dashboard"); // Replace with your actual dashboard route
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-md p-6 w-full max-w-2xl shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4">Send Feedback About The Portal</h2>

        <p className="text-sm text-gray-700 mb-2">
          Please note that this is not a way to contact support.
        </p>
        <p className="text-sm text-gray-700 mb-4">
          If you need help, please access the{" "}
          <a href="#" className="text-blue-600 hover:underline">Help Center</a> or submit a case
          using <a href="#" className="text-blue-600 hover:underline">Open Cases</a> to receive a response.
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">This feedback is related to<span className="text-red-500">*</span></label>
          <select className="w-full border px-3 py-2 rounded text-sm">
            <option value="">Select a topic</option>
            <option value="feature">Feature Request</option>
            <option value="bug">Bug</option>
            <option value="ui">UI Feedback</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Describe your feedback<span className="text-red-500">*</span></label>
          <textarea
            className="w-full border rounded p-2 text-sm"
            rows="4"
            maxLength={1000}
            placeholder="Enter your feedback..."
          />
          <div className="text-xs text-gray-500 mt-1">1000 characters left (Maximum of 1000).</div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Submitted By<span className="text-red-500">*</span></label>
          <p className="text-sm text-gray-700 border-b pb-1">mahichowdary42@gmail.com</p>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            className="text-blue-600 hover:underline text-sm"
            onClick={handleCancel}
          >
            CANCEL
          </button>
          <button className="bg-gray-300 text-white text-sm px-4 py-2 rounded cursor-not-allowed" disabled>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
