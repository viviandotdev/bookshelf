'use client';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const tabs = [
  {
    name: 'Board',
    width: 'w-14',
    image: 'https://via.placeholder.com/1200x520?text=Board+View',
  },
  {
    name: 'Gallery',
    width: 'w-16',
    image: 'https://via.placeholder.com/1200x520?text=Gallery+View',
  },
  {
    name: 'List',
    width: 'w-11',
    image: 'https://via.placeholder.com/1200x520?text=List+View',
  },
];

const ViewFilterSortSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <>
      <div className='flex flex-col gap-2'>
        <h2
          className={cn(
            dm_sefif_display.className,
            'text-center text-4xl font-bold leading-10 text-neutral-900'
          )}
        >
          View, filter and sort your books
        </h2>
        <p className='text-center text-base text-zinc-700'>
          Easily manage your book collection with powerful sorting and filtering
          options.
        </p>
      </div>

      <div className='flex flex-col items-center gap-6 rounded-xl border-2 border-stone-100 bg-stone-100 p-8'>
        <div className='w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg'>
          <img
            className='h-auto w-full'
            src={selectedTab.image}
            alt={`${selectedTab.name} view illustration`}
          />
        </div>
        <div className='flex flex-wrap items-start justify-center gap-2'>
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`${tab.width} flex cursor-pointer items-center justify-center rounded-lg border border-black/10 p-px`}
              onClick={() => setSelectedTab(tab)}
            >
              <div
                className={`flex w-full items-center justify-center rounded px-2.5 py-1 ${
                  selectedTab.name === tab.name ? 'bg-black/10' : ''
                }`}
              >
                <span className='text-sm font-normal leading-tight tracking-tight text-neutral-900'>
                  {tab.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewFilterSortSection;
