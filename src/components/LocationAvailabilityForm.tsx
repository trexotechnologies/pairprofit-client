'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';
import LocationModal from './LocationModal';

const LocationAvailabilityForm = () => {
  const router = useRouter();
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [availability, setAvailability] = useState({
    fullTime: true,
    partTime: false,
    eveningsWeekends: false,
    emergencyCalls: false,
  });

  const toggleAvailability = (key: keyof typeof availability) => {
    setAvailability(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-[28px] md:text-[27px] font-semibold text-[#0b4d6b] mb-4 leading-tight">
          Tell us your location & Availability
        </h1>
        <p className="text-gray-400 font-medium text-sm leading-relaxed">
          This will help clients near you to find you.
        </p>
      </div>

      <div className="space-y-8">
        {/* Location Section */}
        <div 
          onClick={() => setShowLocationModal(true)}
          className="bg-[#f8fafc] border border-gray-100 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1680ab] group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <button className="text-[#1680ab] text-sm font-bold hover:underline block text-left">
              Allow location access
            </button>
            <p className="text-gray-400 text-xs font-medium mt-0.5">
              2, Akodu Street, Lekki, Lagos
            </p>
          </div>
        </div>

        {/* Availability Section */}
        <div>
          <h3 className="text-gray-900 font-bold text-sm mb-4">Availability</h3>
          <div className="grid grid-cols-2 gap-y-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={availability.fullTime}
                  onChange={() => toggleAvailability('fullTime')}
                  className="w-5 h-5 border-2 border-gray-300 rounded bg-white focus:ring-0 text-[#1680ab] cursor-pointer accent-[#1680ab]"
                />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Full time</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={availability.partTime}
                  onChange={() => toggleAvailability('partTime')}
                  className="w-5 h-5 border-2 border-gray-300 rounded bg-white focus:ring-0 text-[#1680ab] cursor-pointer accent-[#1680ab]"
                />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Part time</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={availability.eveningsWeekends}
                  onChange={() => toggleAvailability('eveningsWeekends')}
                  className="w-5 h-5 border-2 border-gray-300 rounded bg-white focus:ring-0 text-[#1680ab] cursor-pointer accent-[#1680ab]"
                />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Evenings/Weekends</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={availability.emergencyCalls}
                  onChange={() => toggleAvailability('emergencyCalls')}
                  className="w-5 h-5 border-2 border-gray-300 rounded bg-white focus:ring-0 text-[#1680ab] cursor-pointer accent-[#1680ab]"
                />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Emergency calls</span>
            </label>
          </div>
        </div>

        {/* Next Button */}
        <div className="pt-6">
          <Button 
            onClick={() => router.push('/signup/about')}
            className="w-full py-4 bg-[#1680ab] hover:bg-[#126b8f] text-white rounded-lg font-bold text-base transition-colors h-[54px]"
          >
            Next
          </Button>
        </div>
      </div>

      {/* Location Access Modal */}
      <LocationModal 
        isOpen={showLocationModal} 
        onClose={() => setShowLocationModal(false)}
        onEnable={() => {
          // In a real app, trigger geolocation API here
          setShowLocationModal(false);
        }}
      />
    </div>
  );
};

export default LocationAvailabilityForm;
