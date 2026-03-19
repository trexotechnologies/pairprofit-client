'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

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
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFinish = () => {
    // In a real app, this would submit the whole form to the backend
    router.push('/signup/success');
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-[28px] md:text-[27px] font-semibold text-[#0b4d6b] mb-4 leading-tight">
          Verification & Trust
        </h1>
        <p className="text-gray-400 font-medium text-sm leading-relaxed">
          Upload and ID and photo of you to enable trust.
        </p>
      </div>

      <div className="space-y-8">
        {/* Profile Photo Upload */}
        <div className="flex flex-col items-center md:items-start">
          <label className="text-gray-400 text-xs font-semibold mb-4 uppercase tracking-wider">Upload photo</label>
          <div className="relative cursor-pointer group">
            <div className="w-24 h-24 rounded-full bg-[#f1f5f9] flex items-center justify-center border-2 border-transparent group-hover:border-[#1680ab] transition-all overflow-hidden ring-4 ring-white shadow-sm">
               <svg className="w-12 h-12 text-[#94a3b8]" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
               </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4 text-[#0b4d6b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
        </div>

        {/* Document Upload Zone */}
        <div className="relative group">
          <div className="w-full h-32 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-3 bg-white hover:bg-gray-50 transition-colors cursor-pointer group-hover:border-[#1680ab] group-hover:bg-[#1680ab]/5">
            <p className="text-gray-400 text-xs font-medium text-center px-12 leading-relaxed">
              Upload any government ID or business documentt
            </p>
            <div className="text-[#94a3b8] group-hover:text-[#1680ab] transition-all transform group-hover:scale-110">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Phone Verification */}
        <div className="space-y-3">
          <div className="flex gap-3 relative">
            {/* Country Selector */}
            <div className="relative min-w-[110px]">
              <div 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between px-3 py-3.5 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-all active:scale-[0.98]"
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    {selectedCountry.flag}
                  </div>
                  <span className="text-sm font-bold text-[#0b4d6b]">{selectedCountry.phone}</span>
                </div>
                <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsDropdownOpen(false)}
                  ></div>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl z-20 overflow-hidden py-2 animate-in fade-in zoom-in duration-200">
                    <div className="max-h-60 overflow-y-auto">
                      {COUNTRIES.map((country) => (
                        <div
                          key={country.code}
                          onClick={() => {
                            setSelectedCountry(country);
                            setIsDropdownOpen(false);
                          }}
                          className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              {country.flag}
                            </div>
                            <span className="text-sm font-semibold text-gray-700">{country.name}</span>
                          </div>
                          <span className="text-xs font-bold text-[#1680ab]">{country.phone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Phone Input */}
            <div className="flex-1">
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone number"
                className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1680ab]/20 focus:border-[#1680ab] transition-all"
              />
            </div>

            {/* Send Code Button */}
            <button 
              onClick={() => router.push('/signup/verify-otp')}
              className="px-5 py-3.5 border-2 border-[#1680ab] text-[#1680ab] rounded-full text-xs font-bold hover:bg-[#1680ab] hover:text-white transition-all whitespace-nowrap active:scale-95"
            >
              Send code
            </button>
          </div>
          <p className="text-gray-400 text-[11px] font-medium leading-relaxed px-1">
            We'll send a code to you to verify your phone number
          </p>
        </div>

        {/* Finish Button */}
        <div className="pt-6">
          <Button 
            onClick={handleFinish}
            className="w-full py-4 bg-[#1680ab] hover:bg-[#126b8f] text-white rounded-xl font-bold text-base transition-all h-[54px] shadow-lg shadow-[#1680ab]/20"
          >
            Finish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;
