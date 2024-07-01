// FinishedTab.tsx
import React, { useEffect } from 'react';
import DateSelectors from './date-selectors';
import { ReadDate } from '@/graphql/graphql';
import { read } from 'fs';

interface FinishedTabProps {
  readDate: ReadDate;
}

export const FinishedTab: React.FC<FinishedTabProps> = ({ readDate }) => {
  // Initialize dates
  useEffect(() => {
    if (readDate?.startDate) {
      const startDate = new Date(readDate.startDate);
      setSelectedStartDay(startDate.getDate().toString().padStart(2, '0'));
      setSelectedStartMonth(
        startDate.toLocaleString('default', { month: 'long' })
      );
      setSelectedStartYear(startDate.getFullYear().toString());
    }

    const finishedDate = readDate?.finishedDate
      ? new Date(readDate.finishedDate)
      : new Date();
    setSelectedEndDay(finishedDate.getDate().toString().padStart(2, '0'));
    setSelectedEndMonth(
      finishedDate.toLocaleString('default', { month: 'long' })
    );
    setSelectedEndYear(finishedDate.getFullYear().toString());
  }, [readDate]);

  const [selectedStartDay, setSelectedStartDay] = React.useState('23');
  const [selectedStartMonth, setSelectedStartMonth] = React.useState('May');
  const [selectedStartYear, setSelectedStartYear] = React.useState('2024');

  const [selectedEndDay, setSelectedEndDay] = React.useState('23');
  const [selectedEndMonth, setSelectedEndMonth] = React.useState('May');
  const [selectedEndYear, setSelectedEndYear] = React.useState('2024');

  const handleStartDayChange = (day: string) => {
    setSelectedStartDay(day);
  };

  const handleStartMonthChange = (month: string) => {
    setSelectedStartMonth(month);
  };

  const handleStartYearChange = (year: string) => {
    setSelectedStartYear(year);
  };

  const handleEndDayChange = (day: string) => {
    setSelectedEndDay(day);
  };

  const handleEndMonthChange = (month: string) => {
    setSelectedEndMonth(month);
  };

  const handleEndYearChange = (year: string) => {
    setSelectedEndYear(year);
  };

  return (
    <div className='mt-8 flex w-full flex-col items-center justify-start gap-6'>
      <DateSelectors
        selectedDay={selectedStartDay}
        selectedMonth={selectedStartMonth}
        selectedYear={selectedStartYear}
        onDayChange={handleStartDayChange}
        onMonthChange={handleStartMonthChange}
        onYearChange={handleStartYearChange}
        label='Start Date'
      />
      <DateSelectors
        selectedDay={selectedEndDay}
        selectedMonth={selectedEndMonth}
        selectedYear={selectedEndYear}
        onDayChange={handleEndDayChange}
        onMonthChange={handleEndMonthChange}
        onYearChange={handleEndYearChange}
        label='Finished Date'
      />
      <div className='flex w-full items-end justify-start gap-4'></div>
    </div>
  );
};
export default FinishedTab;
