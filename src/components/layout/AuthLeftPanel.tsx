'use client';

import React from 'react';

interface AuthLeftPanelProps {
  topText: string;
  mainText: React.ReactNode;
}

const AuthLeftPanel: React.FC<AuthLeftPanelProps> = ({ topText, mainText }) => {
  return (
    <div className="hidden md:flex md:w-1/2 bg-[#003B4A] relative overflow-hidden flex-col justify-between p-8 md:p-10 lg:p-12 min-h-screen">
      {/* Decorative Background Wavy Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none scale-150">
        <svg viewBox="0 0 1000 1000" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,300 C200,200 400,400 600,300 C800,200 1000,400 1000,300 L1000,1000 L0,1000 Z" fill="none" stroke="white" strokeWidth="1" />
          <path d="M0,450 C200,350 400,550 600,450 C800,350 1000,550 1000,450 L1000,1000 L0,1000 Z" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Content Cards Layer */}
      <div className="relative flex-1 min-h-[400px] w-full scale-90 origin-top">
        <img src="/frame.png" alt="Hero" className="max-h-full object-contain" />
        <img src="/frame2.png" alt="Hero" className="max-h-full object-contain" />

        {/* Stats Card (Bottom Right) */}
        <div className="absolute bottom-[-10%] right-[25%] z-40 scale-75">
          <img src="/frame3.png" alt="Hero" />
        </div>
      </div>

      {/* Bottom Text (Aligned Left) */}
      <div className="relative z-50 text-white mt-12 pt-4">
        <span className="text-gray-300 font-bold text-[10px] uppercase tracking-widest mb-3 block">
          From Skill to Success
        </span>
        <h2 className="text-2xl font-medium leading-tight">
          Turn your craft into <br /> consistent income
          <span className="text-cyan-400"> — get discovered.</span>
        </h2>
      </div>
    </div>
  );
};

export default AuthLeftPanel;
