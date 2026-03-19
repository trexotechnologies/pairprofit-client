'use client';

import React from 'react';
import AuthLeftPanel from '@/components/AuthLeftPanel';
import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-white overflow-x-hidden">
      {/* Left Side Panel */}
      <AuthLeftPanel 
        topText="From Skill to Success"
        mainText={
          <>
            Turn your craft into <br /> consistent income — <span className="text-cyan-400">get discovered, get booked, get paid.</span>
          </>
        }
      />

      {/* Right Side - Login Interaction */}
      <div className="w-full md:w-1/2 flex flex-col bg-white min-h-screen items-center justify-center py-12 px-6 md:px-12 lg:px-20 animate-in fade-in slide-in-from-right-4 duration-1000 relative">
        <LoginForm />
      </div>
    </main>
  );
}
