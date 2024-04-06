'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { dm_sefif_display } from '@/lib/fonts';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const ChallengeCard = () => {
  return (
    <Card className='text-beige-799 w-[316px] rounded-lg bg-white'>
      <CardContent className='p-4'>
        <div className='mb-2 flex items-center justify-between'>
          {/* target icon */}
          <span className='text-beige-700'>2024 Reading Goal</span>
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

interface StatCardProps {
  title: string;
  value: string;
  icon?: string;
  unit?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, unit }) => {
  return (
    <Card className='text-beige-799 w-[316px] rounded-lg bg-white'>
      <CardContent className='p-4'>
        <div className='flex items-center justify-between text-beige-700'>
          <div>
            <span>{title}</span>
            <h2 className='text-2xl font-semibold'>{value}</h2>
          </div>
          <div className='text-sm text-gray-300'>
            {/* <i className={icon}></i> {unit} */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface ReadingSummaryProps {}

export const ReadingSummary: React.FC<ReadingSummaryProps> = ({}) => {
  return (
    <section aria-labelledby='currently-reading-status'>
      <h2
        className={cn(
          dm_sefif_display.className,
          'mb-4 text-2xl font-semibold text-beige-700'
        )}
      >
        Reading Summary
      </h2>

      <div className='flex flex-col gap-4'>
        <ChallengeCard />
        {/* open book */}
        <StatCard title='You are currently reading' value='0 books' />
        {/* bookmark */}
        <StatCard
          title='You want to read'
          value='140 books'
          icon='fas fa-check'
          unit='0 books'
        />
        {/* Checkmark */}
        <StatCard
          title='You finished'
          value='100 books'
          icon='fas fa-check'
          unit='0 books'
        />
        {/* Streak */}
        <StatCard
          title='Your longest streak'
          value='100 days'
          icon='fas fa-check'
          unit='0 books'
        />
      </div>
    </section>
  );
};
