'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

const SignupSuccess = () => {
  const router = useRouter();

  return (
    <div className="w-full max-w-md bg-white border border-gray-100 rounded-[24px] p-10 md:p-14 shadow-sm animate-in fade-in zoom-in duration-500">
      <div className="flex flex-col items-center text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-[#1680ab] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-[#1680ab]/20">
          <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 whitespace-nowrap overflow-visible">You&apos;re all set!</h1>
        <p className="text-gray-400 text-[14px] mb-10 font-medium max-w-[240px] leading-relaxed">
          Start discovering, connecting, or getting hired now.
        </p>

        <Button
          onClick={() => router.push('/')}
          className="w-full py-4 bg-[#1680ab] hover:bg-[#126b8f] text-white rounded-xl font-bold text-base transition-all h-[54px] shadow-md active:scale-[0.98] border-none"
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default SignupSuccess;
