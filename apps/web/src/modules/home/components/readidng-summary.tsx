'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { dm_sefif_display } from '@/lib/fonts';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Icons } from '@/components/icons';

const ReadingItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className='flex cursor-pointer justify-between py-3'>
    <div className='flex items-center space-x-4'>
      <div className='rounded-md bg-beige-100 p-4 text-beige-600'>{icon}</div>
      <div className='flex flex-col text-beige-700'>
        <span className='text-lg font-bold'>{value}</span>
        <span>{label}</span>
      </div>
    </div>
    <div className='content-center font-semibold text-beige-700'>
      <span>
        <Icons.chevronRight className='' />
      </span>
    </div>
  </div>
);

const ReadingSummary = () => {
  return (
    <Card className='overflow-hidden rounded-md border-2 border-gray-100 bg-white shadow-sm'>
      <CardHeader className='p-6 pb-2 text-xl font-bold text-beige-700'>
        Reading Summary
      </CardHeader>
      <CardContent className=''>
        <div className='flex flex-col divide-y divide-gray-200'>
          <ReadingItem
            icon={<Icons.bookOpen />}
            label='Currently Reading'
            value='4 books'
          />
          <ReadingItem
            icon={<Icons.save />}
            label='Want to Read'
            value='234 books'
          />
          <ReadingItem icon={<Icons.book />} label='Read' value='100 books' />
          <ReadingItem
            icon={<Icons.streak />}
            label='Longest  streak'
            value='10 days'
          />
        </div>
      </CardContent>
    </Card>
  );
};

export const ChallengeCard = () => {
  return (
    <Card className='text-beige-799 mt-4 rounded-lg bg-white'>
      <CardContent className='p-4'>
        <div className='mb-2 flex items-center justify-between'>
          <div className='flex gap-2 text-beige-700'>
            <Icons.goal className='text-beige-600' />
            <span>2024 Reading Goal</span>
          </div>
          <span className='text-lg font-semibold'>2%</span>
        </div>
        <div className='mb-2 text-2xl font-semibold text-beige-700'>
          1 of 41 books
        </div>
        <Progress className='h-2 w-full rounded-full bg-beige-300' value={14}>
          <div className='h-2 rounded-full bg-beige-300' />
        </Progress>
      </CardContent>
    </Card>
  );
};

export { ReadingSummary };
