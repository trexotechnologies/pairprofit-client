'use client';

import React from 'react';

const SignupLeftPanel = () => {
  return (
    <div className="hidden md:flex md:w-1/2 bg-[#003B4A] relative overflow-hidden flex-col justify-center items-center p-12 md:p-14 lg:p-20 min-h-screen">
      <div className="w-full max-w-[450px] lg:max-w-[550px] flex flex-col items-start space-y-16">
        {/* Hero Image */}
        <div className="w-full">
          <img
            src="/Group5.png"
            alt="Signup Hero"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Brand Messaging */}
        <div className="relative z-50 text-white w-full mt-20">
          <p className="text-gray-300 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            Welcome to PairProfit
          </p>
          <h2 className="text-[34px] lg:text-[30px] leading-[1.2] font-medium text-white/95">
            Your craft deserves
            visibility  <span className="text-cyan-400">—get booked today.</span>
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
