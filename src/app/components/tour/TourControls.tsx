import React from "react";
import { useTourStore } from "../../store/tourStore";

type TourControlsProps = {
  filteredTourStepsLength: number;
};

const TourControls: React.FC<TourControlsProps> = ({
  filteredTourStepsLength,
}) => {
  const { currentStepIndex, setTourActive, setCurrentStepIndex } =
    useTourStore();

  const handleNext = () => {
    if (currentStepIndex < filteredTourStepsLength - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setTourActive(false);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <div className="flex justify-between  px-4 p-2 bg-amber-100 rounded-b-md">
      <button
        type="button"
        onClick={handlePrevious}
        disabled={currentStepIndex === 0}
        className={`px-2 py-1.5 border border-slate-700 rounded-md text-sm ${
          currentStepIndex === 0
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-slate-700 text-white cursor-pointer"
        }`}
      >
        Previous
      </button>
      <button
        type="button"
        onClick={handleNext}
        disabled={filteredTourStepsLength === 0}
        className={`px-2 py-1.5 border-b-slate-700 rounded-md text-sm ${
          filteredTourStepsLength === 0
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-slate-700 text-white cursor-pointer"
        }`}
      >
        {currentStepIndex === filteredTourStepsLength - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default TourControls;
