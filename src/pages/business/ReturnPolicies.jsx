import React from 'react';

const ReturnPolicies = () => {
  const partnerPolicies = [
    {
      id: 'AAG',
      status: 'ACTIVE',
      financial: 'Charge to Partner',
      physical: 'Return to Partner via CRC',
      address: `Team Express Target+ Returns\n2215 Hitzert Ct\nFenton, MO 63026\nUS`,
    },
    {
      id: 'AAI',
      status: 'ACTIVE',
      financial: 'Charge to Partner',
      physical: 'Destroy',
      address: 'Not Applicable',
    },
  ];

  const targetPolicies = [
    {
      id: 'AAH',
      status: 'ACTIVE',
      financial: 'Target Write-Off',
      physical: 'Destroy',
      address: 'Not Applicable',
    },
  ];

  return (
    <div className="p-6 text-sm text-gray-800">
      <h1 className="text-2xl font-semibold mb-2">RETURN POLICIES</h1>
      <p className="mb-6">
        At least one return policy is required before items can list. To change a return address or return contact, please <span className="text-blue-600 underline cursor-pointer">open a case</span>.
      </p>

      {/* Partner Section */}
      <h2 className="text-lg font-semibold mb-3">Policy IDs that can be applied by Partner</h2>
      {partnerPolicies.map((policy) => (
        <div key={policy.id} className="mb-6 border-t pt-4">
          <div className="flex flex-wrap">
            <div className="w-1/4 font-medium">Policy ID</div>
            <div className="w-3/4">{policy.id}</div>
            <div className="w-1/4 font-medium">Status</div>
            <div className="w-3/4">{policy.status}</div>
            <div className="w-1/4 font-medium">Dispositions</div>
            <div className="w-3/4">
              Financial: {policy.financial} <br />
              Physical: {policy.physical}
            </div>
            <div className="w-1/4 font-medium">Partner Return Address (No Residential Addresses)</div>
            <div className="w-3/4 whitespace-pre-line">{policy.address}</div>
          </div>
        </div>
      ))}

      {/* Target Section */}
      <h2 className="text-lg font-semibold mt-10 mb-3">Policy IDs applied by Target to certain hazardous items</h2>
      {targetPolicies.map((policy) => (
        <div key={policy.id} className="mb-6 border-t pt-4">
          <div className="flex flex-wrap">
            <div className="w-1/4 font-medium">Policy ID</div>
            <div className="w-3/4">{policy.id}</div>
            <div className="w-1/4 font-medium">Status</div>
            <div className="w-3/4">{policy.status}</div>
            <div className="w-1/4 font-medium">Dispositions</div>
            <div className="w-3/4">
              Financial: {policy.financial} <br />
              Physical: {policy.physical}
            </div>
            <div className="w-1/4 font-medium">Partner Return Address (No Residential Addresses)</div>
            <div className="w-3/4">{policy.address}</div>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t pt-4">
        ™ & © 2025 target brands, inc. <br />
        <div className="text-red-600 font-bold text-lg mt-1">TARGET</div>
        <div className="text-sm">Expect More. Pay Less.</div>
      </div>
    </div>
  );
};

export default ReturnPolicies;
