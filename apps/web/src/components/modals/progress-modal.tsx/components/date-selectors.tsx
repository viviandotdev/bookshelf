// DateSelectors.tsx
import React from 'react';
import { Icons } from '@/components/icons';
import { dayOptions, monthOptions, yearOptions } from '../date-options';

interface DateSelectorsProps {
  selectedDay: string;
  selectedMonth: string;
  selectedYear: string;
  onDayChange: (day: string) => void;
  onMonthChange: (month: string) => void;
  onYearChange: (year: string) => void;
  label: string;
}

const DateSelectors: React.FC<DateSelectorsProps> = ({
  selectedDay,
  selectedMonth,
  selectedYear,
  onDayChange,
  onMonthChange,
  onYearChange,
  label,
}) => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <div className='flex justify-between'>
        <div className='text-sm font-normal text-zinc-700'>{label}</div>
        <div className='text-right text-sm font-normal text-zinc-700'>
          Set to Today
        </div>
      </div>
      <div className='flex justify-between gap-2'>
        <div className='relative w-1/3'>
          <select
            className='w-full appearance-none rounded-lg border border-neutral-300 bg-white px-4 py-2 pr-8 text-sm font-normal text-neutral-900 focus:outline-none'
            value={selectedMonth}
            onChange={(e) => onMonthChange(e.target.value)}
          >
            {monthOptions.map((month, index) => (
              <option key={index}>{month}</option>
            ))}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <Icons.chevronDown className='h-5 w-5 text-neutral-400' />
          </div>
        </div>
        <div className='relative w-1/3'>
          <select
            className='w-full appearance-none rounded-lg border border-neutral-300 bg-white px-4 py-2 pr-8 text-sm font-normal text-neutral-900 focus:outline-none'
            value={selectedDay}
            onChange={(e) => onDayChange(e.target.value)}
          >
            {dayOptions.map((day, index) => (
              <option key={index}>{day}</option>
            ))}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <Icons.chevronDown className='h-5 w-5 text-neutral-400' />
          </div>
        </div>

        <div className='relative w-1/3'>
          <select
            className='w-full appearance-none rounded-lg border border-neutral-300 bg-white px-4 py-2 pr-8 text-sm font-normal text-neutral-900 focus:outline-none'
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
          >
            {yearOptions.map((year, index) => (
              <option key={index}>{year}</option>
            ))}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <Icons.chevronDown className='h-5 w-5 text-neutral-400' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSelectors;
