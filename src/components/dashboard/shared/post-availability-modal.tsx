'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from 'lucide-react';

// ── Helpers ─────────────────────────────────────────────────────────────────

const WEEK_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstWeekDayOfMonth(year: number, month: number) {
  // Adjusted so Monday = 0
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

function formatDate(d: Date) {
  return `${MONTH_NAMES[d.getMonth()].slice(0, 3)} ${String(d.getDate()).padStart(2, '0')}, ${d.getFullYear()}`;
}

// ── Mini Calendar ─────────────────────────────────────────────────────────────

interface MiniCalendarProps {
  selected: Date;
  onChange: (d: Date) => void;
}

const MiniCalendar: React.FC<MiniCalendarProps> = ({ selected, onChange }) => {
  const [viewYear, setViewYear] = useState(selected.getFullYear());
  const [viewMonth, setViewMonth] = useState(selected.getMonth());

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
  };

  const firstDay = getFirstWeekDayOfMonth(viewYear, viewMonth);
  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const today = new Date();

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-4 w-full select-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button onClick={prevMonth} className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
          <ChevronLeft className="w-4 h-4 text-gray-400" />
        </button>
        <span className="text-xs font-bold text-gray-700">
          {MONTH_NAMES[viewMonth]} {viewYear}
        </span>
        <button onClick={nextMonth} className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Week days */}
      <div className="grid grid-cols-7 mb-1">
        {WEEK_DAYS.map(d => (
          <div key={d} className="text-center text-[10px] font-bold text-gray-400 py-1">{d}</div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7">
        {cells.map((day, idx) => {
          if (!day) return <div key={`empty-${idx}`} />;
          const date = new Date(viewYear, viewMonth, day);
          const isSelected = selected.toDateString() === date.toDateString();
          const isToday = today.toDateString() === date.toDateString();
          return (
            <button
              key={day}
              onClick={() => onChange(date)}
              className={cn(
                "w-full aspect-square flex items-center justify-center rounded-full text-[11px] font-semibold transition-all",
                isSelected && "bg-[#1680ab] text-white shadow-sm",
                !isSelected && isToday && "text-[#1680ab] font-bold",
                !isSelected && !isToday && "text-gray-600 hover:bg-gray-100",
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ── Time Scroll Picker ────────────────────────────────────────────────────────

const HOURS = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
const MINUTES = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, '0'));
const PERIODS = ['AM', 'PM'];

interface TimePickerProps {
  hour: string;
  minute: string;
  period: string;
  onHourChange: (v: string) => void;
  onMinuteChange: (v: string) => void;
  onPeriodChange: (v: string) => void;
}

const TimeScrollColumn: React.FC<{ items: string[]; selected: string; onSelect: (v: string) => void }> = ({ items, selected, onSelect }) => (
  <ScrollArea className="h-28">
    <div className="flex flex-col">
      {items.map(item => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className={cn(
            "px-2.5 py-1 text-xs font-bold rounded-lg transition-all text-left",
            selected === item
              ? "bg-[#1680ab] text-white"
              : "text-gray-500 hover:bg-gray-100"
          )}
        >
          {item}
        </button>
      ))}
    </div>
  </ScrollArea>
);

const TimePicker: React.FC<TimePickerProps> = ({ hour, minute, period, onHourChange, onMinuteChange, onPeriodChange }) => (
  <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-3 w-full">
    <div className="flex gap-1">
      <TimeScrollColumn items={HOURS} selected={hour} onSelect={onHourChange} />
      <TimeScrollColumn items={MINUTES} selected={minute} onSelect={onMinuteChange} />
      <TimeScrollColumn items={PERIODS} selected={period} onSelect={onPeriodChange} />
    </div>
  </div>
);

// ── Types ──────────────────────────────────────────────────────────────────────

interface PostAvailabilityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// ── Main Component ─────────────────────────────────────────────────────────────

const PostAvailabilityModal: React.FC<PostAvailabilityModalProps> = ({ open, onOpenChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 5, 15)); // June 15 2025
  const [fromHour, setFromHour] = useState('06');
  const [fromMinute, setFromMinute] = useState('00');
  const [fromPeriod, setFromPeriod] = useState('AM');
  const [toHour, setToHour] = useState('06');
  const [toMinute, setToMinute] = useState('00');
  const [toPeriod, setToPeriod] = useState('PM');
  const [activeTimePicker, setActiveTimePicker] = useState<'from' | 'to' | null>(null);

  const handleConfirm = () => {
    // Handle confirm logic here
    console.log({ selectedDate, from: `${fromHour}:${fromMinute} ${fromPeriod}`, to: `${toHour}:${toMinute} ${toPeriod}` });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-md p-0 gap-0 rounded-2xl border-none shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-visible bg-white"
      >
        <div className="p-6 pb-4">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-base font-bold text-gray-900">Post Availability</DialogTitle>
          </DialogHeader>

          <div className="space-y-5">
            {/* Date Range */}
            <div className="space-y-1.5">
              <Label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Date range</Label>
              <div className="relative">
                <Input
                  readOnly
                  value={formatDate(selectedDate)}
                  className="h-11 bg-gray-50 border-gray-100 rounded-xl text-xs font-bold text-gray-800 pr-10 cursor-pointer focus-visible:ring-1 focus-visible:ring-[#1680ab]/30 shadow-none"
                  onClick={() => setActiveTimePicker(null)}
                />
                <CalendarIcon className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"/>
              </div>

              {/* Inline Calendar */}
              <div className="pt-1">
                <MiniCalendar selected={selectedDate} onChange={setSelectedDate} />
              </div>
            </div>

            {/* Time Pickers */}
            <div className="grid grid-cols-2 gap-3">
              {/* From */}
              <div className="space-y-1.5">
                <Label className="text-xs font-bold text-gray-500 uppercase tracking-widest">From</Label>
                <div className="relative">
                  <Input
                    readOnly
                    value={`${fromHour}:${fromMinute} ${fromPeriod}`}
                    className="h-11 bg-gray-50 border-gray-100 rounded-xl text-xs font-bold text-gray-800 pr-10 cursor-pointer focus-visible:ring-1 focus-visible:ring-[#1680ab]/30 shadow-none"
                    onClick={() => setActiveTimePicker(prev => prev === 'from' ? null : 'from')}
                  />
                  <Clock className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                {activeTimePicker === 'from' && (
                  <TimePicker
                    hour={fromHour} minute={fromMinute} period={fromPeriod}
                    onHourChange={setFromHour} onMinuteChange={setFromMinute} onPeriodChange={setFromPeriod}
                  />
                )}
              </div>

              {/* To */}
              <div className="space-y-1.5">
                <Label className="text-xs font-bold text-gray-500 uppercase tracking-widest">To</Label>
                <div className="relative">
                  <Input
                    readOnly
                    value={`${toHour}:${toMinute} ${toPeriod}`}
                    className="h-11 bg-gray-50 border-gray-100 rounded-xl text-xs font-bold text-gray-800 pr-10 cursor-pointer focus-visible:ring-1 focus-visible:ring-[#1680ab]/30 shadow-none"
                    onClick={() => setActiveTimePicker(prev => prev === 'to' ? null : 'to')}
                  />
                  <Clock className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                {activeTimePicker === 'to' && (
                  <TimePicker
                    hour={toHour} minute={toMinute} period={toPeriod}
                    onHourChange={setToHour} onMinuteChange={setToMinute} onPeriodChange={setToPeriod}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="border-t border-gray-50 p-4 flex items-center justify-end gap-3 bg-gray-50/50 rounded-b-2xl">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenChange(false)}
            className="px-6 h-10 rounded-xl border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-100 hover:border-gray-300 bg-white shadow-none"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={handleConfirm}
            className="px-6 h-10 rounded-xl bg-[#1680ab] hover:bg-[#126b8f] text-xs font-bold shadow-sm"
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PostAvailabilityModal;
