import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import StatusBadge from '../shared/status-badge';
import { JOB_HISTORY } from '@/lib/dashboard-data';
import Link from 'next/link';

const JobHistoryTable = () => {
  return (
    <Card className="border-none shadow-sm bg-white overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-50">
        <CardTitle className="text-sm font-bold text-[#0b4d6b]">Recent Job History</CardTitle>
        <Link href="#" className="text-[10px] text-[#1680ab] font-bold uppercase tracking-widest hover:underline">
          View All
        </Link>
      </CardHeader>
      <CardContent className="p-0">
        {/* Mobile List View */}
        <div className="lg:hidden divide-y divide-gray-50">
          {JOB_HISTORY.map((job) => (
            <div key={job.id} className="p-4 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-gray-900">{job.title}</h4>
                <div className="flex items-center gap-1.5 text-[10px] font-medium text-gray-400">
                  <span>{job.location}</span>
                  <span className="w-0.5 h-0.5 rounded-full bg-gray-300" />
                  <span>{job.date.split(',')[0]}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <StatusBadge status={job.status} />
                <span className="text-xs font-bold text-gray-900">{job.amount}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow className="hover:bg-transparent border-gray-50">
                <TableHead className="text-[10px] font-bold uppercase tracking-widest text-gray-400 py-3 px-6">Job Title</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-widest text-gray-400 py-3 px-6">Location</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-widest text-gray-400 py-3 px-6">Date</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-widest text-gray-400 py-3 px-6">Amount</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-widest text-gray-400 py-3 px-6">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {JOB_HISTORY.map((job) => (
                <TableRow key={job.id} className="hover:bg-gray-50/50 border-gray-50 transition-colors">
                  <TableCell className="py-4 px-6 text-xs font-bold text-gray-900">{job.title}</TableCell>
                  <TableCell className="py-4 px-6 text-xs font-medium text-gray-500">{job.location}</TableCell>
                  <TableCell className="py-4 px-6 text-xs font-medium text-gray-400">{job.date}</TableCell>
                  <TableCell className="py-4 px-6 text-xs font-bold text-gray-900">{job.amount}</TableCell>
                  <TableCell className="py-4 px-6">
                    <StatusBadge status={job.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobHistoryTable;
