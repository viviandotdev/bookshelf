import React from 'react';

interface UnderlinedTabsProps {}

export const UnderlinedTabs: React.FC<UnderlinedTabsProps> = ({}) => {
  return (
    <div className='inline-flex h-16 w-96 items-start justify-start border-b border-gray-200 pb-px pr-96'>
      <div className='flex w-28 items-center justify-start pr-10'>
        <div className='inline-flex flex-col items-start justify-start self-stretch border-b-4 border-neutral-900 pb-6 pt-5'>
          <div className='inline-flex h-7 items-center justify-start self-stretch py-1'>
            <div className="font-['Inter'] text-lg font-normal text-neutral-900">
              Reviews
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-40 items-center justify-start pr-12'>
        <div className='inline-flex flex-col items-start justify-start self-stretch pb-6 pt-5'>
          <div className='inline-flex h-7 items-center justify-start self-stretch'>
            <div className="font-['Inter'] text-lg font-normal text-neutral-400">
              Shelves
            </div>
            <div className='inline-flex h-7 flex-col items-start justify-start pl-2.5'>
              <div className='flex w-7 flex-col items-center justify-start rounded-2xl bg-zinc-100 px-2.5'>
                <div className="text-center font-['Inter'] text-sm font-medium leading-7 text-zinc-700">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-40 items-center justify-start pr-12'>
        <div className='inline-flex flex-col items-start justify-start self-stretch pb-6 pt-5'>
          <div className='inline-flex h-7 items-center justify-start self-stretch'>
            <div>
              <span className="font-['Inter'] text-lg font-normal text-neutral-400">
                A
              </span>
              <span className="font-['Inter'] text-lg font-normal text-neutral-400">
                ctivity
              </span>
            </div>
            <div className='inline-flex h-7 flex-col items-start justify-start pl-2.5'>
              <div className='flex w-7 flex-col items-center justify-start rounded-2xl bg-zinc-100 px-2.5'>
                <div className="text-center font-['Inter'] text-sm font-medium leading-7 text-zinc-700">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UnderlinedTabs;
