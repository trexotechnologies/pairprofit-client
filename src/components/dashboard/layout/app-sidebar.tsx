'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  User, 
  FileText, 
  Briefcase, 
  Users, 
  BarChart3, 
  CreditCard, 
  Inbox, 
  Calendar, 
  Bot, 
  HelpCircle, 
  Settings, 
  LogOut 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Job Requests', href: '/requests', icon: FileText },
  { name: 'My Jobs', href: '/jobs', icon: Briefcase },
  { name: 'Contacts', href: '/contacts', icon: Users },
  { name: 'Earnings', href: '/earnings', icon: BarChart3 },
  { name: 'Subscription', href: '/subscription', icon: CreditCard },
  { name: 'Inbox', href: '/inbox', icon: Inbox },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'MrProfit AI', href: '/ai', icon: Bot },
];

const secondaryItems = [
  { name: 'Help & Support', href: '/support', icon: HelpCircle },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export const AppSidebarContent = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-50 py-6">
      {/* Logo */}
      <div className="px-6 mb-8">
        <img src="/logo.png" alt="PairProfit" className="h-7 w-auto" />
      </div>

      {/* Main Nav */}
      <div className="flex-1 space-y-1 px-4 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.name === 'Dashboard' && pathname === '/dashboard');
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-xs font-bold rounded-xl transition-all duration-200",
                isActive 
                  ? "bg-[#1680ab]/10 text-[#1680ab]" 
                  : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
              )}
            >
              <item.icon className={cn("w-4 h-4", isActive ? "text-[#1680ab]" : "text-gray-400")} />
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Footer Nav */}
      <div className="mt-auto px-4 space-y-1">
        <div className="py-2">
          {secondaryItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 text-xs font-bold text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all"
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </Link>
          ))}
        </div>
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 px-3 py-2 text-xs font-bold text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl h-auto"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </div>
  );
};

const AppSidebar = () => {
  return (
    <aside className="hidden lg:block w-64 fixed inset-y-0 left-0 z-50">
      <AppSidebarContent />
    </aside>
  );
};

export default AppSidebar;
