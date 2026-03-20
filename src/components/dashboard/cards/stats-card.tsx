import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, CheckCircle, Briefcase, Clock, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  CheckCircle,
  Briefcase,
  Clock,
};

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: string;
  color: 'emerald' | 'purple' | 'blue' | 'orange';
}

const colorConfig = {
  emerald: 'bg-emerald-50 text-emerald-600',
  purple: 'bg-purple-50 text-purple-600',
  blue: 'bg-blue-50 text-blue-600',
  orange: 'bg-orange-50 text-orange-600',
};

const StatsCard: React.FC<StatsCardProps> = ({ label, value, icon, color }) => {
  const Icon = iconMap[icon] || DollarSign;

  return (
    <Card className="border-none shadow-sm bg-white overflow-hidden">
      <CardContent className="">
        <div className="space-y-1">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">{label}</p>

        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", colorConfig[color])}>

            <Icon className="w-5 h-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
