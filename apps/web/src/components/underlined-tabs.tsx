'use client';
import { useState } from 'react';
import { useTabs } from '@/hooks/use-tabs';
import { FramerLayout } from './framer';
import BookInfo from '@/modules/book/components/book-info';
import { Book } from '@/graphql/graphql';
interface BookInfoProps {
  processedBook: Book;
}

export default function UnderlinedTabs({ processedBook }: BookInfoProps) {
  const [hookProps] = useState({
    tabs: [
      {
        label: 'Book info',
        children: <BookInfo processedBook={processedBook} />,
        id: 'Circle',
      },
    ],
    initialTabId: 'Circle',
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
