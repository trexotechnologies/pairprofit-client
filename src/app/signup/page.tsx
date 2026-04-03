'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import SignupForm from '@/components/auth/SignupForm';
import ProgressBar from '@/components/onboarding/ProgressBar';
import SignupLeftPanel from '@/components/layout/SignupLeftPanel';

export default function SignupPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-white overflow-x-hidden">
      {/* Left Side Panel */}
      <SignupLeftPanel />

      {/* Right Side - Interactions */}
      <div className="w-full md:w-1/2 flex flex-col bg-white min-h-screen items-center py-8 md:py-14 px-6 md:px-12">
        <div className="w-full max-w-md flex flex-col items-start">
          {/* Top Navigation */}
          <button 
            onClick={() => router.back()}
            className="text-gray-800 hover:text-gray-600 transition-colors mb-6"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Logo and Progress */}
          <div className="w-full mb-8">
            <div className="mb-4">
              <img src="/logo.png" alt="Logo" className="h-8 md:h-10 w-auto" />
            </div>
            <ProgressBar currentStep={1} totalSteps={5} />
          </div>

          {/* Form Content */}
          <SignupForm />
        </div>
      </div>
    </main>
  );
}
