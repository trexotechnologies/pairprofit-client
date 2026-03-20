'use client';

import React from 'react';
import { Search, Bell, CheckSquare, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AppSidebarContent } from './app-sidebar';
import PostAvailabilityButton from '@/components/dashboard/shared/post-availability-button';

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 z-40 bg-[#f8fafc] sm:bg-white/80 backdrop-blur-md border-b border-gray-50 flex flex-col">
      {/* Top Row: Navigation & Brand */}
      <div className="px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-transparent -ml-2">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64 border-none shadow-premium">
                <AppSidebarContent />
              </SheetContent>
            </Sheet>
          </div>

          {/* <img src="/logo.png" alt="PairProfit" className="h-6 w-auto" /> */}
        </div>

        {/* Global Search (Desktop) */}
        <div className="flex-1  max-w-md relative hidden md:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search for jobs"
            className="pl-10 h-10 bg-gray-50 border-none rounded-xl text-xs font-medium placeholder:text-gray-400 shadow-none focus-visible:ring-1 focus-visible:ring-[#1680ab]/20"
          />
        </div>

        <div className="flex items-center gap-2 md:gap-3 lg:gap-6">
          {/* Switch Mode (Desktop) */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
            <CheckSquare className="w-3.5 h-3.5 text-[#1680ab]" />
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Switch to Client</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl relative">
              <CheckSquare className="w-4.5 h-4.5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl">
              <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-rose-500 rounded-full border border-white" />
              <Bell className="w-4.5 h-4.5" />
            </Button>
          </div>

          {/* User Profile (Desktop Only) */}
          <div className="hidden sm:flex items-center gap-3 border-l border-gray-100 pl-4 lg:pl-6">
            <Avatar className="w-9 h-9 ring-2 ring-white shadow-premium">
              <AvatarImage src="/samuel.png" alt="Stanley Age" />
              <AvatarFallback className="bg-[#1680ab] text-white text-xs font-bold">SA</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <h4 className="text-xs font-bold text-gray-900 leading-none">Stanley Age</h4>
              <p className="text-[10px] font-medium text-gray-400 mt-1 leading-none">stanleyage@gmail.com</p>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile-Only Welcome/Action Row */}
      <div className="lg:hidden flex items-center justify-between px-4 pb-4 pt-0">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 ring-2 ring-white shadow-premium">
            <AvatarImage src="/user.png" alt="Stanley Age" />
            <AvatarFallback className="bg-[#1680ab] text-white text-xs font-bold">SA</AvatarFallback>
          </Avatar>
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-gray-900 leading-tight">Welcome back Stanley!</h4>
            <p className="text-[10px] font-medium text-gray-400 leading-tight">Ready to get things done today?</p>
          </div>
        </div>
        <PostAvailabilityButton className="bg-[#1680ab] hover:bg-[#126b8f] text-[11px] font-bold h-9 px-4 rounded-xl shadow-premium" />
      </div>
    </nav>
  );
};

export default TopNavbar;
