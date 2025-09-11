import React from 'react';

const TrafficStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
      <div className="text-center">
        <p className="text-lg font-bold">29.703 Users</p>
        <p className="text-sm text-gray-600">(40%)</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold">24.093 Users</p>
        <p className="text-sm text-gray-600">(20%)</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold">78.706 Views</p>
        <p className="text-sm text-gray-600">(60%)</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold">22.123 Users</p>
        <p className="text-sm text-gray-600">(80%)</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold">40.15%</p>
        <p className="text-sm text-gray-600">Bounce Rate</p>
      </div>
    </div>
  );
};

export default TrafficStats;
