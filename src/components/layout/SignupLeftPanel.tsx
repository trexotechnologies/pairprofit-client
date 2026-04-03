'use client';

import React from 'react';

const SignupLeftPanel = () => {
  return (
    <div className="hidden md:flex md:w-1/2 bg-[#003B4A] relative overflow-hidden flex-col justify-center items-center p-8 md:p-10 lg:p-12 min-h-screen">
      <div className="w-full max-w-[400px] lg:max-w-[450px] flex flex-col items-start space-y-8">
        {/* Hero Image */}
        <div className="w-full h-48 lg:h-96 flex items-center justify-start">
          <img
            src="/Group5.png"
            alt="Signup Hero"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Brand Messaging */}
        <div className="relative z-50 text-white w-full mt-10">
          <p className="text-gray-300 font-bold text-[10px] uppercase tracking-[0.2em] mb-3 block">
            Welcome to PairProfit
          </p>
          <h2 className="text-2xl lg:text-[26px] leading-tight font-medium text-white/95">
            Your craft deserves
            visibility <span className="text-cyan-400">—get booked today.</span>
          </h2>
        </div>
      </div>

      {/* Decorative SVG Line (Optional, from original design) */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="absolute top-0 right-0 h-full w-auto" viewBox="0 0 100 1000" fill="none">
          <path d="M100 0C80 200 120 400 100 600C80 800 120 1000 100 1000" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
};

export default SignupLeftPanel;
