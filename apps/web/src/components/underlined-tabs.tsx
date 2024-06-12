'use client';
import { useState } from 'react';
import { useTabs } from '@/hooks/use-tabs';
import { FramerLayout } from './framer';

export default function App() {
  const [hookProps] = useState({
    tabs: [
      {
        label: 'Book info',
        children: <div>Book Info</div>,
        id: 'Circle',
      },
      {
        label: 'Shelves',
        children: <div>Shelves</div>,
        id: 'Triangle',
      },
      {
        label: 'Activity',
        children: <div>Activity</div>,
        id: 'Square',
      },
    ],
    initialTabId: 'Triangle',
  });
  const framer = useTabs(hookProps);
  return (
    <div className='flex w-full flex-col  justify-center space-y-24'>
      <div className='max-w-6xl'>
        <FramerLayout.Tabs {...framer.tabProps} />
        <FramerLayout.Content
          {...framer.contentProps}
          className='flex flex-col items-center rounded-3xl py-9 text-center'
        >
          {framer.selectedTab.children}
        </FramerLayout.Content>
      </div>
    </div>
  );
}
