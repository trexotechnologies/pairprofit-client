import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StatusBadge from '../shared/status-badge';
import { JOB_REQUESTS } from '@/lib/dashboard-data';

const JobRequestsList = () => {
  return (
    <Card className="border-none shadow-sm bg-white h-full">
      <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-50">
        <CardTitle className="text-sm font-bold text-[#0b4d6b]">New Job Requests</CardTitle>
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{JOB_REQUESTS.length} New</span>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-300 px-6">
          {JOB_REQUESTS.map((job) => (
            <div key={job.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 group border mb-4 rounded-xl border-gray-300">
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#1680ab] transition-colors">
                  {job.title}
                </h4>
                <div className="flex items-center gap-2 text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                  <span>{job.client}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-200" />
                  <span>Budget: <span className="text-gray-900">{job.budget}</span></span>
                  <span className="w-1 h-1 rounded-full bg-gray-200" />
                  <StatusBadge status={job.status} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 text-[11px] font-bold border-gray-100 text-gray-600 hover:bg-gray-50 rounded-lg px-4">
                  Reject
                </Button>
                <Button size="sm" className="h-8 text-[11px] font-bold bg-[#1680ab] hover:bg-[#126b8f] rounded-lg px-4 shadow-sm">
                  Accept
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default JobRequestsList;
