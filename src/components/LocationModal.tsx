'use client';

import React from 'react';
import Button from './Button';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnable: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose, onEnable }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-[600px] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors p-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="pt-16 pb-12 px-8 flex flex-col items-center">
          {/* Illustration Container */}
          <div className="relative w-full h-32 mb-8 flex items-center justify-center">
            {/* Stylized Map Background */}
            <div className="absolute inset-x-8 inset-y-0 opacity-[0.1] pointer-events-none flex items-center justify-center">
              <div className="relative w-32 h-20 border border-dashed border-[#1680ab] rounded-sm transform -rotate-12 flex items-center justify-center">
                <div className="absolute inset-0 border-t border-dashed border-[#1680ab] top-1/2"></div>
                <div className="absolute inset-0 border-l border-dashed border-[#1680ab] left-1/2"></div>
              </div>
            </div>

            {/* Pin Icon */}
            <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <div className="w-12 h-12 bg-[#1680ab] rounded-full flex items-center justify-center shadow-lg shadow-[#1680ab]/30">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
            </div>
          </div>

          <h2 className="text-[22px] font-bold text-[#0b4d6b] mb-10 text-center">
            Allow location access
          </h2>

          <div className="w-full flex flex-row gap-4 px-2">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 border-2 border-[#1680ab] text-[#1680ab] hover:bg-blue-50 rounded-full font-bold text-[15px] transition-colors h-[48px] whitespace-nowrap"
            >
              Not now
            </button>
            <Button
              onClick={onEnable}
              pill
              className="flex-1 py-3 px-4 bg-[#1680ab] hover:bg-[#126b8f] text-white font-bold text-[15px] transition-colors h-[48px] whitespace-nowrap"
            >
              Enable location
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
