'use client';

import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';

interface ForgotPasswordOTPProps {
  email: string;
  onVerify: (otp: string) => void;
  onBack: () => void;
}

const ForgotPasswordOTP: React.FC<ForgotPasswordOTPProps> = ({ email, onVerify, onBack }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(59);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    if (!/^\d*$/.test(value) && value !== '') return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const isComplete = otp.every((digit) => digit !== '');

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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

      <div className="flex flex-col items-center text-center w-full">
        <h1 className="text-[28px] md:text-[32px] font-extrabold text-[#0b4d6b] md:text-gray-900 mb-2 leading-tight tracking-tight">
          Forgot Password
        </h1>
        <p className="text-gray-400 text-sm mb-8 font-medium">Verify your account</p>
        
        <div className="mb-10 w-full">
          <p className="text-gray-500 text-[14px] mb-1 font-medium">Enter the security code we just sent to</p>
          <p className="text-gray-900 text-[14px] font-extrabold">{email || 'stanley.agu@pairprofit.com'}</p>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 md:gap-4 mb-10">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-14 h-18 md:w-16 md:h-20 text-center text-3xl font-bold text-[#1680ab] bg-white border border-gray-200 rounded-2xl focus:border-[#1680ab] focus:ring-4 focus:ring-[#1680ab]/10 outline-none transition-all shadow-input"
            />
          ))}
        </div>

        {/* Resend Link */}
        <div className="mb-12">
          <p className="text-sm text-gray-400 font-medium">
            Didn't receive code?{' '}
            <button 
              className={`font-bold transition-all ${timer === 0 ? 'text-[#1680ab] hover:underline' : 'text-[#1680ab]/70'}`}
              disabled={timer > 0}
            >
              Resend - {formatTime(timer)}
            </button>
          </p>
        </div>

        <Button
          onClick={() => isComplete && onVerify(otp.join(''))}
          disabled={!isComplete}
          className={`w-full py-4 rounded-full md:rounded-xl font-extrabold text-[16px] transition-all h-[60px] border-none ${
            isComplete 
              ? 'bg-[#1680ab] hover:bg-[#126b8f] text-white shadow-premium' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Verify
        </Button>
      </div>
    </div>
  );
};

export default ForgotPasswordOTP;
