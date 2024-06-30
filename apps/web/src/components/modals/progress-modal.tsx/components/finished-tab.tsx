// FinishedTab.tsx
import { Button } from '@/components/ui/button';
import { IconButton } from '@/modules/bookshelves/components/icon-button';
import React from 'react';
import DateSelectors from './date-selectors';

interface FinishedTabProps {}

export const FinishedTab: React.FC<FinishedTabProps> = ({}) => {
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
        label='End Date'
      />
      <div className='flex w-full items-end justify-start gap-4'>
        {/* <Button
          variant={'outline'}
          className='flex h-12 w-1/2 items-center justify-center rounded-lg  py-4 text-sm font-normal text-black'
        >
          Finished
        </Button> */}
        {/* <Button
          variant={'outline'}
          className='flex h-12 w-1/2 items-center justify-center rounded-lg py-4 text-sm font-normal text-black'
        >
          Mark as DNF
        </Button> */}
      </div>
    </div>
  );
};
export default FinishedTab;
