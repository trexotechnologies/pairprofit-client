'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

const AboutMeForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    bio: '',
    language: '',
    proficiency: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (isFormValid) {
      router.push('/signup/verification');
    }
  };

  const isFormValid = formData.bio && formData.language && formData.proficiency;

  return (
    <div className="w-full max-w-md">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-[28px] md:text-[27px] font-semibold text-[#0b4d6b] mb-4 leading-tight">
          Tell us a little about yourself
        </h1>
        <p className="text-gray-400 font-medium text-sm leading-relaxed">
          This will help clients trust and know you better.
        </p>
      </div>

      <div className="space-y-6">
        {/* Bio Textarea */}
        <div className="space-y-2 relative">
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell clients about your craft"
            className="w-full h-32 px-4 py-3 bg-[#f8fafc] border border-gray-100 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1680ab]/20 focus:border-[#1680ab] transition-all resize-none text-sm font-medium"
          />
        </div>

        {/* Dropdowns Row */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-100 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1680ab]/20 focus:border-[#1680ab] transition-all text-sm font-medium appearance-none cursor-pointer pr-10"
            >
              <option value="" disabled>Language</option>
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="spanish">Spanish</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="flex-1 relative">
            <select
              name="proficiency"
              value={formData.proficiency}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-100 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1680ab]/20 focus:border-[#1680ab] transition-all text-sm font-medium appearance-none cursor-pointer pr-10"
            >
              <option value="" disabled>Proficiency</option>
              <option value="basic">Basic</option>
              <option value="intermediate">Intermediate</option>
              <option value="fluent">Fluent</option>
              <option value="native">Native</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="pt-6">
          <Button
            disabled={!isFormValid}
            onClick={handleNext}
            className={`w-full py-4 rounded-lg font-bold text-base transition-colors h-[54px] ${
              isFormValid 
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

export default AboutMeForm;
