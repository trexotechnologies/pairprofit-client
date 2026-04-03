'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  FileText, 
  Inbox, 
  BarChart3, 
  Lightbulb
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/dashboard', icon: Home },
  { name: 'Jobs Request', href: '/requests', icon: FileText },
  { name: 'FloatingAction', href: '#', icon: Lightbulb, isFAB: true },
  { name: 'Inbox', href: '/inbox', icon: Inbox },
  { name: 'Earnings', href: '/earnings', icon: BarChart3 },
];

const BottomNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="lg:hidden fixed bottom-10 left-0 right-0 z-50 px-4 pb-2">
      <div className="bg-white/95 backdrop-blur-md rounded-[24px] shadow-[0_-4px_20px_rgba(0,0,0,0.03),0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100/50 flex items-center justify-between px-2 h-16 relative">
        {navItems.map((item) => {
          if (item.isFAB) {
            return (
              <div key={item.name} className="relative -top-6">
                <button className="w-14 h-14 rounded-full bg-[#0b4d6b] text-white shadow-xl shadow-[#0b4d6b]/20 flex items-center justify-center transition-transform active:scale-90 border-4 border-[#f8fafc]">
                  <item.icon className="w-6 h-6" />
                </button>
              </div>
            );
          }

          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 py-1"
            >
              <item.icon className={cn(
                "w-5 h-5 mb-1 transition-colors",
                isActive ? "text-[#1680ab]" : "text-gray-400"
              )} />
              <span className={cn(
                "text-[9px] font-bold uppercase tracking-tight",
                isActive ? "text-[#1680ab]" : "text-gray-400"
              )}>
                {item.name.includes(' ') ? item.name.split(' ')[0] : item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavbar;
