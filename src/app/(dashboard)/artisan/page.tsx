import React from 'react';
import PostAvailabilityButton from '@/components/dashboard/shared/post-availability-button';
import StatsCard from '@/components/dashboard/cards/stats-card';
import ChartCard from '@/components/dashboard/cards/chart-card';
import JobRequestsList from '@/components/dashboard/lists/job-requests-list';
import ReviewList from '@/components/dashboard/lists/review-list';
import JobHistoryTable from '@/components/dashboard/tables/job-history-table';
import { STATS } from '@/lib/dashboard-data';

import { ListFilter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function DashboardPage() {
  return (
    <>
      {/* Welcome Header (Desktop Only) */}
      <header className="hidden lg:flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0b4d6b]">Welcome back Stanley!</h1>
          <p className="text-gray-400 text-xs font-medium mt-1 uppercase tracking-widest">Ready to get things done today?</p>
        </div>
        <PostAvailabilityButton className="bg-[#1680ab] hover:bg-[#126b8f] text-xs font-bold px-6 py-2 h-auto rounded-xl shadow-premium lg:px-8 lg:py-3 transition-all active:scale-95" />
      </header>

      {/* Mobile Search Bar */}
      <div className="lg:hidden flex items-center gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search for jobs"
            className="pl-10 h-12 bg-[#f8fafc] border-none rounded-2xl text-xs font-medium placeholder:text-gray-400 shadow-sm focus-visible:ring-1 focus-visible:ring-[#1680ab]/20"
          />
        </div>
        <div className="h-12 w-12 rounded-2xl bg-[#f8fafc] border-none shadow-sm text-gray-400 flex items-center justify-center cursor-pointer">
          <ListFilter className="w-5 h-5" />
        </div>
      </div>

      {/* Stats Row - Horizontal Scroll on Mobile */}
      <section className="flex lg:grid lg:grid-cols-4 gap-4 md:gap-5 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory">
        {STATS.map((stat) => (
          <div key={stat.label} className="min-w-[160px] flex-shrink-0 lg:min-w-0 snap-start">
            <StatsCard
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
              color={stat.color as any}
            />
          </div>
        ))}
      </section>

      {/* Revenue Chart Section */}
      <section>
        <ChartCard />
      </section>

      {/* Requests and Reviews Section */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <JobRequestsList />
        </div>
        <div className="xl:col-span-1">
          <ReviewList />
        </div>
      </section>

      {/* History Table Section */}
      <section>
        <JobHistoryTable />
      </section>
    </>
  );
}
