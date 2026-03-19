'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PasswordInput from './PasswordInput';
import Button from './Button';

const SignupForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    // In a real app, we'd validate and save the data here
    router.push('/signup/details');
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-8 flex flex-col gap-2 justify-center items-center ">
        <h1 className="text-3xl font-extrabold text-[#0b4d6b] mb-2">
          Create an Account
        </h1>
        <p className="text-gray-500 font-medium text-sm">
          Let's help clients find you.
        </p>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1680ab]/20 focus:border-[#1680ab] transition-all placeholder:text-gray-400 text-sm h-[52px]"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1680ab]/20 focus:border-[#1680ab] transition-all placeholder:text-gray-400 text-sm h-[52px]"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1680ab]/20 focus:border-[#1680ab] transition-all placeholder:text-gray-400 text-sm h-[52px]"
        />

        <PasswordInput
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />

        <PasswordInput
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <div className="flex items-start gap-3 pt-2">
          <div className="relative flex items-center h-5">
            <input
              id="terms"
              name="agreedToTerms"
              type="checkbox"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              className="w-5 h-5 border-2 border-gray-300 rounded bg-white focus:ring-0 text-[#1680ab] cursor-pointer accent-[#1680ab]"
            />
          </div>
          <label htmlFor="terms" className="text-[12px] text-gray-500 leading-tight cursor-pointer font-medium">
            By signing up to create an account, I accept Company's{' '}
            <a href="#" className="text-[#1680ab] font-bold hover:underline">Terms of Use and Privacy Policy.</a>
          </label>
        </div>

        <div className="pt-4">
          <Button 
            onClick={handleNext}
            className="w-full py-4 bg-[#1680ab] hover:bg-[#126b8f] text-white rounded-lg font-bold text-base transition-colors h-[54px]"
          >
            Next
          </Button>
        </div>
        <p className="text-gray-500 font-medium text-sm">
          Already have an account? <a href="#" className="text-[#1680ab] font-bold hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
