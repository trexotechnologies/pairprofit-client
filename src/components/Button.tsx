import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  pill?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  pill = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#0e6482] hover:bg-[#0b4d6b] text-white shadow-md hover:shadow-lg hover:translate-y-[-1px]',
    secondary: 'bg-[#f0f9ff] text-[#0e6482] hover:bg-[#e0f2fe]',
    outline: 'border-2 border-[#1680ab] text-[#1680ab] hover:bg-[#1680ab]/5',
    ghost: 'bg-transparent text-[#0e6482] hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm w-full',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3.5 text-lg',
    xl: 'px-10 py-4 text-lg w-full',
  };

  const rounding = pill ? 'rounded-full' : {
    sm: 'rounded-full',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
  }[size];

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${rounding} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
