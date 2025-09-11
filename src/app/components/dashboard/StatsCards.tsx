import React from "react";

const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div
        id="dashboard-area"
        className="bg-blue-500 text-white p-4 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-bold">10468</h2>
        <p>Members online</p>
      </div>

      <div className="bg-blue-400 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">10468</h2>
        <p>Members online</p>
      </div>

      <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">10468</h2>
        <p>Members online</p>
      </div>

      <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">10468</h2>
        <p>Members online</p>
      </div>
    </div>
  );
};

export default StatsCards;
