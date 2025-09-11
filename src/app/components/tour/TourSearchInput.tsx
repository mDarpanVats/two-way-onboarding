import React from "react";
import { useTourStore } from "../../store/tourStore";

const TourSearchInput: React.FC = () => {
  const searchTerm = useTourStore((state) => state.searchTerm);
  const setSearchTerm = useTourStore((state) => state.setSearchTerm);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Ask more details..."
      value={searchTerm}
      onChange={handleSearchChange}
      className="w-[calc(100%-20px)] p-2 px-2.5 border border-gray-300 rounded box-border bg-gray-200"
    />
  );
};

export default TourSearchInput;
