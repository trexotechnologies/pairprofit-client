import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { JobStatus } from '@/types/dashboard';

interface StatusBadgeProps {
  status: JobStatus;
  className?: string;
}

const statusConfig: Record<JobStatus, { color: string, label: string }> = {
  Completed: { color: 'bg-emerald-50 text-emerald-600 border-emerald-100', label: 'Completed' },
  Cancelled: { color: 'bg-rose-50 text-rose-600 border-rose-100', label: 'Cancelled' },
  Pending: { color: 'bg-amber-50 text-amber-600 border-amber-100', label: 'Pending' },
  Active: { color: 'bg-blue-50 text-blue-600 border-blue-100', label: 'Active' },
  Urgent: { color: 'bg-red-50 text-red-600 border-red-100', label: 'Urgent' },
  Flexible: { color: 'bg-emerald-50 text-emerald-600 border-emerald-100', label: 'Flexible' },
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const config = statusConfig[status] || statusConfig.Pending;

  return (
    <Badge 
      variant="outline" 
      className={cn(
        "font-medium px-2.5 py-0.5 rounded-full border shadow-none text-[11px]",
        config.color,
        className
      )}
    >
      {config.label}
    </Badge>
  );
};

export default StatusBadge;
