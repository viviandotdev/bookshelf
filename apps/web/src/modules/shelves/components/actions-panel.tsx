'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import React from 'react';

interface ActionsPanelProps {}

export const ActionsPanel: React.FC<ActionsPanelProps> = ({}) => {
  return (
    <div className='flex min-w-72 flex-col items-center gap-1 rounded-lg text-sm font-light text-gray-500'>
      <Card className='w-full rounded-lg bg-beige-100 text-beige-700'>
        <CardContent className='p-4'>
          <div className='mb-1 flex items-center justify-between'>
            <span className='text-sm font-bold'>You’ve watched</span>
            <span className='text-lg font-semibold'>2%</span>
          </div>
          <div className='mb-2 text-sm'>1 of 41</div>
          <Progress
            className='h-2 w-full rounded-full bg-white'
            value={40}
          ></Progress>
        </CardContent>
      </Card>
      <div
        onClick={() => {
          console.log('action');
        }}
        className='w-[fill-available] cursor-pointer items-center rounded-lg bg-beige-100 p-2 text-center'
      >
        Add to shelf
      </div>
      <div
        onClick={() => {
          console.log('action');
        }}
        className='w-[fill-available] cursor-pointer items-center rounded-lg bg-beige-100 p-2 text-center'
      >
        Edit shelf
      </div>
    </div>
  );
};
export default ActionsPanel;
