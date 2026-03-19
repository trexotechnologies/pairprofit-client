'use client';

import React from 'react';
import SignupSuccess from '@/components/SignupSuccess';

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fcfcfc] px-6 py-12">
      <div className="w-full flex justify-center">
        <SignupSuccess />
      </div>
    </main>
  );
}
