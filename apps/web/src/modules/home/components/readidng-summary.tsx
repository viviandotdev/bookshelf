'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { dm_sefif_display } from '@/lib/fonts';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Icons } from '@/components/icons';
import { LucideIcon } from 'lucide-react';

const IconLabel = ({ icon, children }: any) => (
  <div className='flex items-center space-x-2'>
    {icon}
    <span>{children}</span>
  </div>
);

const ReadingItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className='flex justify-between py-3'>
    <IconLabel icon={icon}>{label}</IconLabel>
    <span className='font-semibold'>{value}</span>
  </div>
);

const ReadingSummary = () => {
  return (
    <section>
      <h2
        className={cn(
          dm_sefif_display.className,
          'mb-4 text-2xl font-semibold text-beige-700'
        )}
      >
        Reading Summary
      </h2>
      <Card className='overflow-hidden rounded-lg bg-white'>
        <CardContent className='py-3'>
          <div className='flex flex-col divide-y divide-gray-200'>
            <ReadingItem
              icon={<Icons.bookOpen className='text-beige-600' />}
              label='You are currently reading'
              value='4 books'
            />
            <ReadingItem
              icon={<Icons.save className='text-beige-600' />}
              label='You want to read'
              value='234 books'
            />
            <ReadingItem
              icon={<Icons.book className='text-beige-600' />}
              label='You finished'
              value='100 books'
            />
            <ReadingItem
              icon={<Icons.streak className='text-beige-600' />}
              label='Your longest streak'
              value='10 days'
            />
          </div>
        </CardContent>
      </Card>
      <ChallengeCard />
    </section>
  );
};

const ChallengeCard = () => {
  return (
    <Card className='text-beige-799 mt-4 rounded-lg bg-white'>
      <CardContent className='p-4'>
        <div className='mb-2 flex items-center justify-between'>
          {/* target icon */}
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
