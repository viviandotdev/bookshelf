'use client';
import { useState } from 'react';
import { useTabs } from '@/hooks/use-tabs';
import { FramerLayout } from './framer';
import BookInfo from '@/modules/book/components/book-info';
import { Book } from '@/graphql/graphql';

interface Tab {
  label: string;
  children: React.ReactNode;
  id: string;
}

interface UnderlinedTabsProps {
  tabs: Tab[];
  initialTabId: string;
}

export default function UnderlinedTabs({
  tabs,
  initialTabId,
}: UnderlinedTabsProps) {
  const [hookProps] = useState({
    tabs: tabs,
    initialTabId: initialTabId,
  });
  const framer = useTabs(hookProps);

  return (
    <div className='flex w-full flex-col justify-center space-y-24'>
      <div className=''>
        <FramerLayout.Tabs {...framer.tabProps} />
        <FramerLayout.Content
          {...framer.contentProps}
          className='mx-2 flex flex-col rounded-3xl py-9'
        >
          {framer.selectedTab.children}
        </FramerLayout.Content>
      </div>
    </div>
  );
}
