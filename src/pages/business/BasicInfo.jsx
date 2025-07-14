// BasicInfoPage.jsx
import React from 'react';

export default function BasicInfoPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">BASIC INFO & DISPLAY</h1>

      {/* Business Details */}
      <div className="bg-white border rounded p-4 mb-6">
        <h2 className="text-xl font-semibold mb-3">Business Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-10 text-sm">
          <div><strong>Status:</strong> ESTABLISHED</div>
          <div><strong>Stripe ID:</strong> acct_1N0ml0GdgkisKkSZ</div>
          <div><strong>Source:</strong> Rithum</div>
          <div><strong>Employer Identification Number (EIN):</strong> 81-2576667</div>
          <div><strong>VMM (Vendor) ID:</strong> 10015820</div>
          <div><strong>Internal Tax Setup:</strong> Completed</div>
          <div><strong>SMS ID:</strong> 6437d5a7c3d81d1752d285bb</div>
          <div><strong>Business Structure:</strong> LLC</div>
          <div className="flex items-center gap-2"><strong>Company Type:</strong> Private <span className="text-blue-600 cursor-pointer">✎</span></div>
          <div><strong>Advertises/sells on Other Marketplace:</strong> Yes</div>
          <div><strong>Planned SKUs:</strong> 5783</div>
        </div>
      </div>

      {/* Target.com Content */}
      <div className="bg-white border rounded p-4 mb-6">
        <h2 className="text-xl font-semibold mb-3">Target.Com Content</h2>
        <p className="text-sm text-gray-500 mb-4">
          *Required before items can be listed. Below is the information that will display on Target.com. To submit edits for this content, please <a className="text-blue-600 underline" href="#">open a case</a>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-10 text-sm">
          <div><strong>Legal Business Name*:</strong> CONCOURSE TEAM EXPRESS LLC</div>
          <div><strong>Display Name*:</strong> Team Express</div>
          <div className="md:col-span-2">
            <strong>Headquarters Address*:</strong><br />
            2215 Hitzert Ct.<br />
            Fenton, MO 63026<br />
            US
          </div>
          <div className="md:col-span-2">
            <strong>Contact Info for Guest Inquiries*:</strong><br />
            Email: customer.service@teamexpress.com<br />
            Phone: +1 (833) 908-3923
          </div>
          <div className="md:col-span-2">
            <strong>Product Sourcing Info*:</strong><br />
            Manufacturer of items listed: No<br />
            Importer of items listed: Yes<br />
            Reseller of items listed: Yes
          </div>
          <div className="md:col-span-2">
            <strong>About Company*:</strong><br />
            Team Express strives to provide you with the best price, service and warranty available. Your comple... <a className="text-blue-600 underline" href="#">read more</a>
          </div>
          <div className="md:col-span-2">
            <strong>Privacy Policy*:</strong><br />
            What this Privacy Policy covers This privacy policy covers Team Express's treatment of personally id... <a className="text-blue-600 underline" href="#">read more</a>
          </div>
        </div>
      </div>

      {/* Diversity Info */}
      <div className="bg-white border rounded p-4">
        <h2 className="text-xl font-semibold mb-3">DIVERSITY INFO</h2>
        <div className="flex items-center gap-2 text-sm">
          <strong>Diversity Details:</strong>
          <span className="text-blue-600 cursor-pointer">✎</span>
        </div>
        <div className="text-sm mt-1">Not a diverse-owned business</div>
      </div>
    </div>
  );
}
