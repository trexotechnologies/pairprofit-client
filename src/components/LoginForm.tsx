'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PasswordInput from './PasswordInput';
import Button from './Button';
import ForgotPassword from './ForgotPassword';
import ForgotPasswordOTP from './ForgotPasswordOTP';
import CreateNewPassword from './CreateNewPassword';

const LoginForm = () => {
  const router = useRouter();
  const [forgotPasswordStep, setForgotPasswordStep] = useState<'LOGIN' | 'EMAIL' | 'OTP' | 'RESET'>('LOGIN');
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      {/* Forgot Password Modal Overlay */}
      {forgotPasswordStep !== 'LOGIN' && (
        <div className="absolute inset-0 z-[100] flex items-center justify-center bg-white md:bg-white/10 md:backdrop-blur-[12px] p-0 md:p-4 animate-in fade-in duration-500">
          {forgotPasswordStep === 'EMAIL' ? (
            <ForgotPassword 
              onBack={() => setForgotPasswordStep('LOGIN')} 
              onEmailSent={(email) => {
                setRecoveryEmail(email);
                setForgotPasswordStep('OTP');
              }}
            />
          ) : forgotPasswordStep === 'OTP' ? (
            <ForgotPasswordOTP 
              email={recoveryEmail} 
              onBack={() => setForgotPasswordStep('EMAIL')}
              onVerify={(otp) => {
                console.log('OTP Verified:', otp);
                setForgotPasswordStep('RESET');
              }}
            />
          ) : (
            <CreateNewPassword 
              onBack={() => setForgotPasswordStep('OTP')}
              onReset={(newPassword) => {
                console.log('Password Reset:', newPassword);
                router.push('/signup/success');
              }}
            />
          )}
        </div>
      )}

      {/* Main Login Form Content */}
      <div className={`w-full max-w-2xl px-4 transition-all duration-500 ${forgotPasswordStep !== 'LOGIN' ? 'opacity-20 blur-[2px] pointer-events-none scale-[0.98]' : 'opacity-100 scale-100'}`}>
        {/* Branding Logo */}
        <div>
          <img src="/logo.png" alt="Logo" />
        </div>

        {/* Header Section */}
        <div className="mb-10 text-center md:text-center mt-20">
          <h1 className="text-[32px] md:text-[36px] font-extrabold text-[#0b4d6b] mb-2 leading-tight">
            Welcome back!
          </h1>
          <p className="text-gray-400 font-medium text-[16px] tracking-tight">
            Login to PairProfit to continue using it
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div className="space-y-1">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1680ab]/10 focus:border-[#1680ab] transition-all placeholder:text-gray-400 text-sm h-[60px] font-semibold text-gray-700 bg-white"
            />
          </div>

          <div className="relative space-y-1">
            <PasswordInput
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="flex justify-end mt-2 px-1">
              <button
                type="button"
                onClick={() => setForgotPasswordStep('EMAIL')}
                className="text-[#1680ab] text-[13px] font-bold hover:underline tracking-tight"
              >
                Forgot password?
              </button>
            </div>
          </div>

          <div className="pt-3">
            <Button
              className="w-full py-4 bg-[#1680ab] hover:bg-[#126b8f] text-white rounded-xl font-extrabold text-[16px] transition-all h-[60px] border-none shadow-premium active:scale-[0.98]"
            >
              Login
            </Button>
          </div>

          <p className="text-center text-gray-500 font-bold text-[14px] pt-3">
            Don't have an account? <a href="/signup" className="text-[#1680ab] hover:underline">Sign Up here</a>
          </p>

          {/* Fancy Separator */}
          <div className="relative flex items-center py-8">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="flex-shrink mx-5 text-gray-400 text-[11px] font-extrabold uppercase tracking-[0.2em] opacity-60">OR</span>
            <div className="flex-grow border-t border-gray-100"></div>
          </div>

          {/* Social Authentication */}
          <div className="space-y-3.5">
            <button className="w-full flex items-center justify-center gap-3.5 px-6 py-4 border border-gray-100 rounded-full hover:bg-gray-50 transition-all h-[60px] bg-white group shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="text-[15px] font-bold text-gray-700 tracking-tight">Continue with Google</span>
            </button>

            <button className="w-full flex items-center justify-center gap-3.5 px-6 py-4 border border-gray-100 rounded-full hover:bg-gray-50 transition-all h-[60px] bg-white group shadow-sm">
              <svg className="w-5 h-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="text-[15px] font-bold text-gray-700 tracking-tight">Continue with LinkedIn</span>
            </button>

            <button className="w-full flex items-center justify-center gap-3.5 px-6 py-4 border border-gray-100 rounded-full hover:bg-gray-50 transition-all h-[60px] bg-white group shadow-sm">
              <svg className="w-5 h-5 text-[#1877f2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-[15px] font-bold text-gray-700 tracking-tight">Continue with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
