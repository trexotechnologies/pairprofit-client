'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';

interface Country {
  code: string;
  name: string;
  phone: string;
  flag: React.ReactNode;
}

const COUNTRIES: Country[] = [
  { 
    code: 'CH', name: 'Switzerland', phone: '+41', 
    flag: <div className="w-5 h-5 bg-[#ce1126] flex items-center justify-center rounded-sm"><div className="w-4 h-1 bg-white absolute"></div><div className="w-1 h-4 bg-white absolute"></div></div> 
  },
  { 
    code: 'NG', name: 'Nigeria', phone: '+234', 
    flag: <div className="w-5 h-3.5 flex shadow-sm"><div className="flex-1 bg-[#008751]"></div><div className="flex-1 bg-white"></div><div className="flex-1 bg-[#008751]"></div></div> 
  },
  { 
    code: 'GH', name: 'Ghana', phone: '+233', 
    flag: <div className="w-5 h-3.5 flex flex-col shadow-sm"><div className="flex-1 bg-[#ce1126]"></div><div className="flex-1 bg-[#fcd116]"></div><div className="flex-1 bg-[#006b3f]"></div></div> 
  },
  { 
    code: 'GB', name: 'United Kingdom', phone: '+44', 
    flag: <div className="w-5 h-3.5 bg-blue-800 relative shadow-sm overflow-hidden"><div className="absolute inset-0 border-[1.5px] border-white rotate-45 scale-150"></div><div className="absolute inset-0 border-white border-y-[2px] border-x-[2px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/3 w-full"></div><div className="absolute inset-0 border-white border-x-[2px] top-0 left-1/2 -translate-x-1/2 h-full w-[2px]"></div></div> 
  },
  { 
    code: 'US', name: 'United States', phone: '+1', 
    flag: <div className="w-5 h-3.5 bg-[#b22234] relative shadow-sm overflow-hidden"><div className="absolute top-0 left-0 w-2/5 h-1/2 bg-[#3c3b6e]"></div><div className="h-px w-full bg-white absolute top-1/4"></div><div className="h-px w-full bg-white absolute top-3/4"></div></div> 
  },
];

const VerificationForm = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState(COUNTRIES[0].code);

  const selectedCountry = COUNTRIES.find(c => c.code === selectedCountryCode) || COUNTRIES[0];

  const handleFinish = () => {
    router.push('/signup/success');
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-6 text-center md:text-left">
        <h1 className="text-2xl md:text-[26px] font-semibold text-[#0b4d6b] mb-2 leading-tight">
          Verification & Trust
        </h1>
        <p className="text-gray-400 font-medium text-xs leading-relaxed">
          Upload and ID and photo of you to enable trust.
        </p>
      </div>

      <div className="space-y-4">
        {/* Profile Photo Upload */}
        <div className="flex flex-col items-center md:items-start">
          <label className="text-gray-400 text-[10px] font-semibold mb-2 uppercase tracking-wider">Upload photo</label>
          <div className="relative cursor-pointer group">
            <div className="w-20 h-20 rounded-full bg-[#f1f5f9] flex items-center justify-center border-2 border-transparent group-hover:border-[#1680ab] transition-all overflow-hidden ring-4 ring-white shadow-sm">
               <svg className="w-10 h-10 text-[#94a3b8]" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
               </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform">
              <svg className="w-3.5 h-3.5 text-[#0b4d6b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
        </div>

        {/* Document Upload Zone */}
        <div className="relative group">
          <div className="w-full h-24 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-colors cursor-pointer group-hover:border-[#1680ab] group-hover:bg-[#1680ab]/5">
            <p className="text-gray-400 text-[10px] font-medium text-center px-10 leading-relaxed">
              Upload any government ID or business document
            </p>
            <div className="text-[#94a3b8] group-hover:text-[#1680ab] transition-all transform group-hover:scale-110">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Phone Verification */}
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row gap-3 relative">
            <div className="flex gap-2 flex-1">
              {/* Country Selector */}
              <div className="min-w-[120px]">
                <Select value={selectedCountryCode} onValueChange={setSelectedCountryCode}>
                  <SelectTrigger className="h-[52px]">
                    <div className="flex items-center gap-2">
                      {selectedCountry.flag}
                      <span className="text-sm font-bold text-[#0b4d6b]">{selectedCountry.phone}</span>
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRIES.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        <div className="flex items-center gap-3">
                          {country.flag}
                          <span className="text-sm font-semibold">{country.name}</span>
                          <span className="text-xs font-bold text-[#1680ab] ml-auto">{country.phone}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Phone Input */}
              <div className="flex-1">
                <Input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone number"
                  className="h-[52px]"
                />
              </div>
            </div>

            {/* Send Code Button */}
            <Button 
              variant="outline"
              onClick={() => router.push('/signup/verify-otp')}
              className="border-2 border-[#1680ab] text-[#1680ab] hover:bg-[#1680ab] hover:text-white rounded-full text-xs font-bold h-[52px] px-6"
            >
              Send code
            </Button>
          </div>
          <p className="text-gray-400 text-[11px] font-medium leading-relaxed px-1">
            We'll send a code to you to verify your phone number
          </p>
        </div>

        {/* Finish Button */}
        <div className="pt-2">
          <Button 
            onClick={handleFinish}
            className="w-full text-sm shadow-premium"
            size="md"
          >
            Finish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;
