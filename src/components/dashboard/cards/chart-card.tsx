'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { REVENUE_DATA } from '@/lib/dashboard-data';

const ChartCard = () => {
  return (
    <Card className="border-none shadow-sm bg-white overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-50">
        <div className="flex flex-row items-baseline gap-2">
          <CardTitle className="text-sm font-bold text-gray-400 uppercase tracking-widest">Total Revenue on:</CardTitle>
          <span className="text-lg font-bold text-[#0b4d6b]">$5,700</span>
        </div>
        <Select defaultValue="7days">
          <SelectTrigger className="w-[120px] h-8 text-[11px] font-bold bg-gray-50 border-none rounded-lg shadow-none">
            <SelectValue placeholder="Period" />
          </SelectTrigger>
          <SelectContent className="text-xs">
            <SelectItem value="7days">01 - 07 October</SelectItem>
            <SelectItem value="30days">Last 30 Days</SelectItem>
            <SelectItem value="quarter">Last Quarter</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-[240px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={REVENUE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1680ab" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#1680ab" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }}
                dy={10}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }}
                tickFormatter={(value) => `${value/1000}k`}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: 'none', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="amount" 
                stroke="#1680ab" 
                strokeWidth={2.5}
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
                dot={{ r: 4, fill: '#1680ab', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
