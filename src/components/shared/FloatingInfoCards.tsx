import React from 'react';
import Image from 'next/image';

export const ClientRequestCard = () => (
  <div className="bg-white rounded-2xl p-6 shadow-2xl w-[320px] transform rotate-[4deg] transition-all hover:rotate-0 hover:scale-[1.02] cursor-default">
    <div className="flex justify-between items-start mb-6">
      <h4 className="font-bold text-xl text-[#0b4d6b]">New client request</h4>
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
        <Image src="https://i.pravatar.cc/150?u=sarah" alt="Sarah" width={40} height={40} />
      </div>
    </div>
    <p className="text-gray-500 text-sm mb-6 leading-relaxed font-medium">
      Sarah is looking for a carpenter to fix her wardrobe pipe in Lekki.
    </p>
    <div className="flex items-center justify-between mb-8">
      <div>
        <span className="text-gray-400 text-xs block mb-1">Budget:</span>
        <span className="font-extrabold text-[#0b4d6b] uppercase text-lg">N15,000</span>
      </div>
      <span className="bg-[#fff0f0] text-[#ff8a8a] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
        Urgent
      </span>
    </div>
    <div className="flex gap-4">
      <button className="flex-1 py-3 px-4 border-2 border-[#1680ab] text-[#1680ab] rounded-xl text-sm font-bold hover:bg-[#1680ab]/5 transition-colors">
        Reject job
      </button>
      <button className="flex-1 py-3 px-4 bg-[#1680ab] text-white rounded-xl text-sm font-bold hover:bg-[#0b4d6b] transition-colors shadow-lg">
        Accept job
      </button>
    </div>
  </div>
);

export const TestimonialCard = () => (
  <div className="bg-white rounded-2xl p-6 shadow-2xl w-[360px] transform rotate-[-3deg] transition-all hover:rotate-0 hover:scale-[1.02] cursor-default">
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md mt-1">
        <Image src="https://i.pravatar.cc/150?u=michael" alt="Michael" width={48} height={48} />
      </div>
      <div>
        <p className="text-[#333] text-[15px] font-medium leading-relaxed mb-4">
          "PairProfit has helped me find steady work. Before, I had waited for referrals. Now, I get New Jobs every week."
        </p>
        <p className="text-[#1680ab] text-sm font-bold">---Michael, Electrician</p>
      </div>
    </div>
  </div>
);

export const StatsCard = () => (
  <div className="bg-white rounded-2xl p-6 shadow-2xl w-[220px] transform rotate-[3deg] transition-all hover:rotate-0 hover:scale-[1.02] cursor-default">
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-[11px] font-bold uppercase tracking-tight">Weekly Earnings:</span>
        <span className="font-extrabold text-[#333] text-lg font-mono">$700</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-[11px] font-bold uppercase tracking-tight">Jobs Completed:</span>
        <span className="font-extrabold text-[#333] text-lg font-mono">700</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-[11px] font-bold uppercase tracking-tight">Ratings:</span>
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-lg">★</span>
          <span className="font-extrabold text-[#333] text-lg">4.9</span>
        </div>
      </div>
    </div>
  </div>
);
