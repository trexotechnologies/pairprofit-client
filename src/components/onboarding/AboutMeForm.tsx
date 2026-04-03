'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';

const AboutMeForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    bio: '',
    language: '',
    proficiency: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
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
      <div className="mb-4 text-center md:text-left">
        <h1 className="text-2xl md:text-[24px] font-semibold text-[#0b4d6b] mb-2 leading-tight">
          Tell us a little about yourself
        </h1>
        <p className="text-gray-400 font-medium text-xs leading-relaxed">
          This will help clients trust and know you better.
        </p>
      </div>

      <div className="space-y-4">
        {/* Bio Textarea */}
        <div className="space-y-2 relative">
          <Textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell clients about your craft"
            className="min-h-[100px]"
          />
        </div>

        {/* Dropdowns Row */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Select 
              value={formData.language} 
              onValueChange={(value) => handleSelectChange('language', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Select 
              value={formData.proficiency} 
              onValueChange={(value) => handleSelectChange('proficiency', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Proficiency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Basic</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="fluent">Fluent</SelectItem>
                <SelectItem value="native">Native</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Next Button */}
        <div className="pt-2">
          <Button
            disabled={!isFormValid}
            onClick={handleNext}
            className="w-full text-sm shadow-premium"
            size="md"
            variant={isFormValid ? "default" : "secondary"}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMeForm;
