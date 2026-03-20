import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      <div className="w-full h-[6px] bg-gray-100 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-[#1680ab] transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-start items-center">
        <span className="text-[13px] font-medium text-gray-500">
          {currentStep}/{totalSteps}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
