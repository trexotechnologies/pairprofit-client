'use client';

import React, { useState } from 'react';
import Button from './Button';
import PasswordInput from './PasswordInput';

interface CreateNewPasswordProps {
  onReset: (password: string) => void;
  onBack: () => void;
}

const CreateNewPassword: React.FC<CreateNewPasswordProps> = ({ onReset, onBack }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    if (password && password === confirmPassword) {
      onReset(password);
    }
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
          Create new password
        </h1>
        <p className="text-gray-400 text-sm mb-10 font-medium leading-relaxed">
          Let's reset a new and strong password
        </p>
        
        <div className="w-full space-y-5">
          <div className="space-y-1 text-left">
            <PasswordInput
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </div>

          <div className="space-y-1 text-left">
            <PasswordInput
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
            />
          </div>

          <p className="text-gray-400 text-[12px] font-medium leading-normal text-left px-1 py-2">
            Min 8 characters, 1 special character, caps, number.
          </p>

          <Button
            onClick={handleReset}
            disabled={!password || password !== confirmPassword}
            className={`w-full py-4 rounded-full md:rounded-xl font-extrabold text-[16px] transition-all h-[60px] border-none mt-4 ${
               password && password === confirmPassword 
               ? 'bg-[#1680ab] hover:bg-[#126b8f] text-white shadow-premium' 
               : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            Reset password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
