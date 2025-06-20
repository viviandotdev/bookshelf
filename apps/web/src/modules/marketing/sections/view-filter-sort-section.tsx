'use client';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const tabs = [
    {
        name: 'Board',
        width: 'w-14',
        image: '/landing/bookshelves.png',
    },
];

const ViewFilterSortSection: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <>
            <div className="mx-auto max-w-3xl md:text-center">
                <h2 className="font-display text-4xl tracking-tight font-medium text-black sm:text-5xl">
                    View, filter and sort your books
                </h2>
                <p className="mt-4 text-lg tracking-tight text-slate-800">
                    Easily manage your book collection with powerful sorting and filtering options, making it simple to find, organize, and enjoy your favorite reads.
                </p>
            </div>
            <div className='flex flex-col items-center gap-8 rounded-xl bg-beige-100 p-12 pb-8'>
                <div className='w-full max-w-6xl overflow-hidden rounded-xl '>
                    <img
                        className='h-full w-full'
                        src={selectedTab.image}
                        alt={`${selectedTab.name} view illustration`}
                    />
                </div>
                <div className='flex flex-wrap items-start justify-center gap-2'>
                    {/* {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`items -center flex cursor-pointer justify-center rounded-md shadow-xs`}
              onClick={() => setSelectedTab(tab)}
            >
              <div
                className={`flex w-full items-center justify-center rounded-md border px-2.5 py-1 ${
                  selectedTab.name === tab.name
                    ? 'border-beige-700 bg-beige-100'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <span className='text-sm font-normal tracking-tight text-neutral-900'>
                  {tab.name}
                </span>
              </div>
            </div>
          ))} */}
                </div>
            </div>
        </>
    );
};

export default ViewFilterSortSection;
