import React from "react";

const ProfitCustomerProjects: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold">Total Profit</h3>
        <p className="text-2xl font-bold text-green-500">$ 1,012</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold">New Customer</h3>
        <p className="text-2xl font-bold text-blue-500">961</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold">Active Projects</h3>
        <p className="text-2xl font-bold text-purple-500">770</p>
      </div>
    </div>
  );
};

export default ProfitCustomerProjects;
