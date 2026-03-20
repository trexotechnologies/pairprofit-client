'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';

const ProfessionalDetailsForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    professionalRole: '',
    skills: '',
    experience: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      experience: value
    }));
  };

  const handleNext = () => {
    router.push('/signup/location');
  };

  const isFormValid = formData.professionalRole && formData.skills && formData.experience;

  return (
    <div className="w-full max-w-md">
      <div className="mb-4 text-center md:text-left">
        <h1 className="text-2xl md:text-[24px] font-semibold text-[#0b4d6b] mb-2 leading-tight">
          Now add a title & skill!
        </h1>
        <p className="text-gray-400 font-medium text-xs leading-relaxed">
          This is the very first the clients sees. So make it count!
        </p>
      </div>

      <div className="space-y-4">
        <Input
          type="text"
          name="professionalRole"
          placeholder="Enter professional role"
          value={formData.professionalRole}
          onChange={handleChange}
        />

        <Input
          type="text"
          name="skills"
          placeholder="Skills/ Specialization"
          value={formData.skills}
          onChange={handleChange}
        />

        <div className="relative">
          <Select 
            value={formData.experience} 
            onValueChange={handleSelectChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Years of experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1">0-1 year</SelectItem>
              <SelectItem value="1-3">1-3 years</SelectItem>
              <SelectItem value="3-5">3-5 years</SelectItem>
              <SelectItem value="5+">5+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-3">
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

export default ProfessionalDetailsForm;
