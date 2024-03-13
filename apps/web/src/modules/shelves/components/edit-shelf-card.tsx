import { Icons } from '@/components/icons';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import React from 'react';

interface EditShelfCardProps {}

export const EditShelfCard: React.FC<EditShelfCardProps> = ({}) => {
  return (
    <div className='flex w-full items-center justify-between rounded-md border border-black p-2 px-3'>
      <div className='flex items-start space-x-4'>
        <img
          alt='Black Swan book cover'
          className='h-20 w-14'
          height='100'
          src='/placeholder.svg'
          style={{
            aspectRatio: '60/100',
            objectFit: 'cover',
          }}
          width='60'
        />
        <div className='flex flex-col justify-center'>
          <h2
            className={cn(
              dm_sefif_display.className,
              'text-2xl font-bold text-beige'
            )}
          >
            Barking up the Wrong Tree
          </h2>
          <p className='text-vase text-gray-400'>Eric Barker</p>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Icons.close className='h-6 w-6 cursor-pointer' />
        <Icons.menu className='h-6 w-6 cursor-pointer' />
      </div>
    </div>
  );
};
export default EditShelfCard;
