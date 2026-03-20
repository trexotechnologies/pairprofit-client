'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const OtpVerification = () => {
  const router = useRouter();
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

  const handleVerify = () => {
    if (isComplete) {
      // Proceed to next step or success
      router.push('/signup/success');
    }
  };

  const isComplete = otp.every((digit) => digit !== '');

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-md bg-white border border-gray-100 rounded-[20px] p-6 md:p-10 shadow-sm animate-in fade-in zoom-in duration-300">
      <div className="text-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Verify your account</h1>
        <p className="text-gray-400 text-[13px] mb-6 font-medium">We just sent an email to your registered email account</p>
        
        <div className="mb-6">
          <p className="text-gray-500 text-xs mb-0.5 font-medium">Enter the security code we just sent to</p>
          <p className="text-gray-900 text-xs font-bold">stanley.agu@pairprofit.com</p>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-2 md:gap-3 mb-6">
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
              className="w-12 h-14 md:w-14 md:h-16 text-center text-2xl font-bold text-[#1680ab] bg-white border border-gray-200 rounded-xl focus:border-[#1680ab] focus:ring-4 focus:ring-[#1680ab]/10 outline-none transition-all shadow-input"
            />
          ))}
        </div>

        {/* Resend Link */}
        <div className="mb-6">
          <p className="text-xs text-gray-400 font-medium">
            Didn't receive code?{' '}
            <Button 
              variant="link"
              className={`font-bold p-0 h-auto ${timer === 0 ? 'text-[#1680ab] hover:underline' : 'text-[#1680ab]/70'}`}
              disabled={timer > 0}
            >
              Resend - {formatTime(timer)}
            </Button>
          </p>
        </div>

        {/* Verify Button */}
        <Button
          onClick={handleVerify}
          disabled={!isComplete}
          className="w-full border-none shadow-premium"
          size="md"
          pill
          variant={isComplete ? "default" : "secondary"}
        >
          Verify
        </Button>
      </div>
    </div>
  );
};

export default OtpVerification;
