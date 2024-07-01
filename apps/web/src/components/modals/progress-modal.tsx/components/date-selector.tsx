import React, { useState, useEffect } from 'react';
import { useDateSelect } from 'react-ymd-date-select';
import { Icons } from '@/components/icons';
import { monthOptions } from '../date-options';

interface DateSelectorProps {
  onChange: (value: string) => void;
  value: string;
  label: string;
}

export function DateSelector({
  onChange,
  value,
  label = 'Start Date',
}: DateSelectorProps) {
  const dateSelect = useDateSelect(value, onChange);
  const [isMonthSelected, setIsMonthSelected] = useState(false);
  const [isDaySelected, setIsDaySelected] = useState(false);

  useEffect(() => {
    setIsMonthSelected(dateSelect.monthValue !== 'Month');
    setIsDaySelected(dateSelect.dayValue !== 'Day');
  }, [dateSelect.monthValue, dateSelect.dayValue]);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    dateSelect.onMonthChange(e);
    if (newValue === 'Month') {
      dateSelect.onDayChange({
        target: { value: 'Day' },
      } as React.ChangeEvent<HTMLSelectElement>);
      dateSelect.onYearChange({
        target: { value: 'Year' },
      } as React.ChangeEvent<HTMLSelectElement>);
    }
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    dateSelect.onDayChange(e);
    if (newValue === 'Day') {
      dateSelect.onYearChange({
        target: { value: 'Year' },
      } as React.ChangeEvent<HTMLSelectElement>);
    }
  };

  const setToToday = () => {
    const today = new Date();
    const month = (today.getMonth() + 1).toString();
    const day = today.getDate().toString();
    const year = today.getFullYear().toString();

    dateSelect.onMonthChange({
      target: { value: month },
    } as React.ChangeEvent<HTMLSelectElement>);
    dateSelect.onDayChange({
      target: { value: day },
    } as React.ChangeEvent<HTMLSelectElement>);
    dateSelect.onYearChange({
      target: { value: year },
    } as React.ChangeEvent<HTMLSelectElement>);
  };

  return (
    <div className='flex w-full flex-col gap-2'>
      <div className='flex justify-between'>
        <div className='text-sm font-normal text-zinc-700'>{label}</div>
        <div
          className='cursor-pointer text-sm font-normal text-zinc-700'
          onClick={setToToday}
        >
          Set to today
        </div>
      </div>
      <div className='flex justify-between gap-2'>
        <div className='relative w-1/3'>
          <select
            className='w-full appearance-none rounded-lg border border-neutral-300 bg-white px-4 py-2 pr-8 text-sm font-normal text-neutral-900 focus:outline-none'
            value={dateSelect.monthValue}
            onChange={handleMonthChange}
          >
            <option value='Month'>Month</option>
            {dateSelect.monthOptions.map((monthOption) => (
              <option key={monthOption.value} value={monthOption.value}>
                {monthOptions[monthOption.value - 1]}
              </option>
            ))}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <Icons.chevronDown className='h-5 w-5 text-neutral-400' />
          </div>
        </div>
        <div className='relative w-1/3'>
          <select
            className='w-full appearance-none rounded-lg border border-neutral-300 bg-white px-4 py-2 pr-8 text-sm font-normal text-neutral-900 focus:outline-none'
            value={dateSelect.dayValue}
            onChange={handleDayChange}
            disabled={!isMonthSelected}
          >
            <option value='Day'>Day</option>
            {dateSelect.dayOptions.map((dayOption) => (
              <option key={dayOption.value} value={dayOption.value}>
                {dayOption.label}
              </option>
            ))}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <Icons.chevronDown className='h-5 w-5 text-neutral-400' />
          </div>
        </div>
        <div className='relative w-1/3'>
          <select
            className='w-full appearance-none rounded-lg border border-neutral-300 bg-white px-4 py-2 pr-8 text-sm font-normal text-neutral-900 focus:outline-none'
            value={dateSelect.yearValue}
            onChange={dateSelect.onYearChange}
            disabled={!isMonthSelected || !isDaySelected}
          >
            <option value='Year'>Year</option>
            {dateSelect.yearOptions.map((yearOption) => (
              <option key={yearOption.value} value={yearOption.value}>
                {yearOption.label}
              </option>
            ))}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <Icons.chevronDown className='h-5 w-5 text-neutral-400' />
          </div>
        </div>
      </div>
    </div>
  );
}
