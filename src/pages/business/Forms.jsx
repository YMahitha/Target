// src/pages/FormsAndAgreements.jsx
import { Download } from 'lucide-react';

export default function FormsAndAgreements() {
  const documents = [
    {
      name: 'Target Platform Services Agreement - Main Terms and Service Terms',
      description: 'Legally binding contract',
    },
    {
      name: 'Target Platform Selling Service - Service Policies',
      description: 'Service policies for all partners',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b py-3 px-6 text-lg font-semibold bg-gray-100">
        FORMS AND AGREEMENTS
      </div>

      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold mb-6">General Documents</h2>

        <div className="border-t border-l border-r rounded-t">
          <div className="flex justify-between px-4 py-2 text-sm font-medium bg-gray-100 border-b">
            <span>Name</span>
            <span>Description</span>
          </div>

          {documents.map((doc, idx) => (
            <div
              key={idx}
              className={`flex justify-between items-center px-4 py-4 text-sm ${
                idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              } border-b`}
            >
              <span className="max-w-[60%]">{doc.name}</span>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">{doc.description}</span>
                <Download className="h-4 w-4 text-blue-500 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
}
