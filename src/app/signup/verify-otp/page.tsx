'use client';

import React from 'react';
import OtpVerification from '@/components/OtpVerification';

export default function VerifyOtpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fcfcfc] px-6 py-12">
      <div className="w-full flex justify-center">
        <OtpVerification />
      </div>
    </main>
  );
}
