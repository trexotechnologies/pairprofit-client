'use client';

import React from 'react';

interface AuthLeftPanelProps {
  topText: string;
  mainText: React.ReactNode;
}

const AuthLeftPanel: React.FC<AuthLeftPanelProps> = ({ topText, mainText }) => {
  return (
    <div className="hidden md:flex md:w-1/2 bg-[#003B4A] relative overflow-hidden flex-col justify-between p-12 md:p-14 lg:p-16 min-h-screen">
      {/* Decorative Background Wavy Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none scale-150">
        <svg viewBox="0 0 1000 1000" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,300 C200,200 400,400 600,300 C800,200 1000,400 1000,300 L1000,1000 L0,1000 Z" fill="none" stroke="white" strokeWidth="1" />
          <path d="M0,450 C200,350 400,550 600,450 C800,350 1000,550 1000,450 L1000,1000 L0,1000 Z" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Content Cards Layer */}
      <div className="relative flex-1 min-h-[600px] w-full">
        <img src="/frame.png" alt="Hero" />
        <img src="/frame2.png" alt="Hero" />

        {/* Stats Card (Bottom Right) */}
        <div className="absolute bottom-[-22%] right-[25%] z-40">
          <img src="/frame3.png" alt="Hero" />
        </div>
      </div>

      {/* Bottom Text (Aligned Left) */}
      <div className="relative z-50 text-white mt-40 pt-6">
        <span className="text-gray-300 font-bold text-xs uppercase tracking-widest mb-4 block">
          From Skill to Success
        </span>
        <h2 className="text-3xl ">
          Turn your craft into consistent income <br />
          <span className="">— get discovered, get booked, get paid.</span>
        </h2>
      </div>
    </div>
  );
};

export default AuthLeftPanel;
