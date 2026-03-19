'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import RoleSelectionCard from '@/components/RoleSelectionCard';
import Button from '@/components/Button';

export default function OnboardingPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<'client' | 'provider' | null>('provider');

  const handleContinue = () => {
    if (selectedRole) {
      router.push('/signup');
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-white overflow-x-hidden">
      {/* Left Side Panel - Role Selection */}
      <div className="hidden md:flex md:w-1/2 bg-[#003B4A] relative overflow-hidden flex-col justify-between p-12 md:p-14 lg:p-16">
        {/* Decorative Background Wavy Lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none scale-150">
          <svg viewBox="0 0 1000 1000" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,300 C200,200 400,400 600,300 C800,200 1000,400 1000,300 L1000,1000 L0,1000 Z" fill="none" stroke="white" strokeWidth="1" />
            <path d="M0,450 C200,350 400,550 600,450 C800,350 1000,550 1000,450 L1000,1000 L0,1000 Z" fill="none" stroke="white" strokeWidth="1" />
          </svg>
        </div>

        {/* Content Cards Layer */}
        <div className="relative flex-1 min-h-[600px] w-full">
          <img src="/frame.png" alt="Hero" />
          <img src="/frame2.png" alt="Hero" />

          {/* Stats Card (Bottom Right) */}
          <div className="absolute bottom-[-22%] right-[25%] z-40">
            <img src="/frame3.png" alt="Hero" />
          </div>
        </div>

        {/* Bottom Text (Aligned Left) */}
        <div className="relative z-50 text-white mt-40 pt-6">
          <span className="text-gray-300 font-bold text-xs uppercase tracking-widest mb-4 block">
            From Skill to Success
          </span>
          <h2 className="text-3xl ">
            Turn your craft into consistent income <br />
            <span className="">— get discovered, get booked, get paid.</span>
          </h2>
        </div>
      </div>

      {/* Right Side - Interactions */}
      <div className="w-full md:w-1/2 flex flex-col bg-white min-h-screen">
        {/* Top Header Section */}
        <div className="pt-8 px-6 md:px-12 pb-2 md:pt-14 flex flex-col items-start">
          <Link href="/" className="text-gray-800 hover:text-gray-600 transition-colors mb-6">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>

        <div className="flex-1 flex flex-col items-center px-6 py-6 md:px-12">
          <div className="w-full max-w-md mt-4 md:mt-0">
            <div className="mb-12 text-center md:text-left">
              <h1 className="text-[28px] md:text-3xl font-extrabold text-[#0b4d6b] mb-3 tracking-tight">
                What will you like to do?
              </h1>
              <p className="text-gray-400 font-medium text-sm">
                Choose how you want to use this platform
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <RoleSelectionCard
                title="As a client"
                description="Find skilled workers anytime, any day including weekends"
                active={selectedRole === 'client'}
                onClick={() => setSelectedRole('client')}
                icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                }
              />
              <RoleSelectionCard
                title="As a service provider"
                description="Discover clients for your craft, from the comfort of your home"
                active={selectedRole === 'provider'}
                onClick={() => setSelectedRole('provider')}
                icon={
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                }
              />
            </div>

            <Button size="lg" className="w-full mb-6 py-4" onClick={handleContinue}>
              Continue
            </Button>

            <div className="flex items-center justify-center gap-2 text-blue-400/80 text-[13px] font-medium">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              You can switch anytime in the app
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
