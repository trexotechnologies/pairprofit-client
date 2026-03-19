'use client';

import React, { useState } from 'react';
import Button from './Button';

interface ForgotPasswordProps {
  onBack: () => void;
  onEmailSent: (email: string) => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onBack, onEmailSent }) => {
  const [email, setEmail] = useState('');

  return (
    <div className="w-full h-full md:h-auto md:max-w-md bg-white md:border md:border-gray-100 md:rounded-[24px] p-6 md:p-12 md:shadow-sm animate-in fade-in zoom-in duration-300 flex flex-col items-center">
      {/* Mobile Header with Back Arrow */}
      <div className="w-full flex justify-start md:hidden mb-12">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-800 hover:text-gray-600 transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center text-center w-full max-w-sm md:max-w-none">
        {/* Flag Icon (Desktop Only) */}
        <div className="hidden md:block mb-8 text-[#1680ab]">
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.45 3L11.5 1H4v17h2v-8h4.55l.95 2H20V3h-7.55zM18 10h-5.55l-.95-2H6V3h6.45L13.4 5H18v5z" />
          </svg>
        </div>

        <h1 className="text-[28px] md:text-[32px] font-extrabold text-[#0b4d6b] md:text-gray-900 mb-3 leading-tight md:mb-2 tracking-tight">
          Forget Password
        </h1>
        <p className="text-gray-400 text-[15px] mb-12 md:mb-8 font-medium px-4 leading-relaxed md:leading-normal">
          Enter your email below to retrieve your password
        </p>

        <div className="w-full space-y-10 md:space-y-6">
          <div className="space-y-1">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1680ab]/10 focus:border-[#1680ab] transition-all placeholder:text-gray-400 text-sm h-[60px] font-semibold text-gray-700 bg-white"
            />
          </div>

          <Button
            onClick={() => onEmailSent(email)}
            className="w-full py-4 bg-[#1680ab] hover:bg-[#126b8f] text-white rounded-full md:rounded-xl font-extrabold text-[16px] transition-all h-[60px] border-none shadow-premium active:scale-[0.98]"
          >
            Send email
          </Button>

          {/* Desktop Back Link */}
          <button
            onClick={onBack}
            className="hidden md:flex text-[#1680ab] text-[14px] font-bold hover:underline items-center justify-center gap-1.5 transition-all mt-2 group"
          >
            Back to Login
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile "Sign In" link */}
          <div className="md:hidden mt-8 text-center pt-2">
            <p className="text-gray-400 text-[14px] font-medium">
              Remember password? <button onClick={onBack} className="text-[#1680ab] font-bold hover:underline ml-1">Sign In</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
