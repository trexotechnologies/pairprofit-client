import React from 'react';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';

interface RoleSelectionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const RoleSelectionCard: React.FC<RoleSelectionCardProps> = ({
  title,
  description,
  icon,
  active,
  onClick,
}) => {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "relative p-5 md:p-8 rounded-2xl border-2 transition-all cursor-pointer flex flex-row items-center gap-4 group hover:translate-y-[-1px] shadow-none",
        active
          ? "border-[#1680ab] bg-[#f0f9ff]"
          : "border-[#f3f4f6] bg-[#f9fafb] hover:border-gray-200"
      )}
    >
      <div
        className={cn(
          "w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-colors shrink-0",
          active 
            ? "bg-[#1680ab]/10 text-[#1680ab]" 
            : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
        )}
      >
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <h3 className={cn(
          "text-lg md:text-xl font-bold mb-1",
          active ? "text-[#0b4d6b]" : "text-[#333]"
        )}>
          {title}
        </h3>
        <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed max-w-[240px]">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default RoleSelectionCard;
