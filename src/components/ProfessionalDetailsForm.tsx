'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

const ProfessionalDetailsForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    professionalRole: '',
    skills: '',
    experience: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    router.push('/signup/location');
  };

  const isFormValid = formData.professionalRole && formData.skills && formData.experience;

  return (
    <div className="w-full max-w-md">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-[28px] md:text-[27px] font-semibold text-[#0b4d6b] mb-4 leading-tight">
          Now add a title & skill to tell the world what you do!
        </h1>
        <p className="text-gray-400 font-medium text-sm leading-relaxed">
          This is the very first the clients sees or search for. So make it count!
        </p>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          name="professionalRole"
          placeholder="Enter professional role"
          value={formData.professionalRole}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1680ab]/20 focus:border-[#1680ab] transition-all placeholder:text-gray-400 text-sm h-[52px]"
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills/ Specialization"
          value={formData.skills}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1680ab]/20 focus:border-[#1680ab] transition-all placeholder:text-gray-400 text-sm h-[52px]"
        />

        <div className="relative">
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1680ab]/20 focus:border-[#1680ab] transition-all text-sm h-[52px] appearance-none bg-white cursor-pointer ${formData.experience ? 'text-gray-900' : 'text-gray-400'}`}
          >
            <option value="" disabled>Years of experience</option>
            <option value="0-1">0-1 year</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5+">5+ years</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="pt-6">
          <Button
            disabled={!isFormValid}
            onClick={handleNext}
            className={`w-full py-4 rounded-lg font-bold text-base transition-colors h-[54px] ${isFormValid
                ? 'bg-[#1680ab] hover:bg-[#126b8f] text-white'
                : 'bg-[#e5e7eb] text-[#0b4d6b]/50 cursor-not-allowed'
              }`}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetailsForm;
