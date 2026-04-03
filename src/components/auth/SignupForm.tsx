'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PasswordInput from '../shared/PasswordInput';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

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
      <div className="mb-4 flex flex-col gap-1 justify-center items-center">
        <h1 className="text-2xl font-extrabold text-[#0b4d6b] mb-1">
          Create an Account
        </h1>
        <p className="text-gray-500 font-medium text-xs">
          Let's help clients find you.
        </p>
      </div>

      <div className="space-y-2.5">
        <Input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <Input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <Input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
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
          <Checkbox 
            id="terms"
            checked={formData.agreedToTerms}
            onCheckedChange={(checked) => {
              setFormData(prev => ({ ...prev, agreedToTerms: !!checked }));
            }}
            className="mt-1"
          />
          <label htmlFor="terms" className="text-[12px] text-gray-500 leading-tight cursor-pointer font-medium">
            By signing up to create an account, I accept Company's{' '}
            <a href="#" className="text-[#1680ab] font-bold hover:underline">Terms of Use and Privacy Policy.</a>
          </label>
        </div>

        <div className="pt-4">
          <Button 
            onClick={handleNext}
            className="w-full text-base"
            size="md"
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
