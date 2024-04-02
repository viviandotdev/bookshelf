'use client';
import React from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import UploadFileDialog from './upload-file-dialog';

interface ImportActionsProps {}

interface StepProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ title, description, children }) => (
  <div className='flex cursor-pointer justify-between rounded-md border border-gray-100 bg-white px-4 py-3 text-sm shadow-sm'>
    <div>
      <h1 className='text-base font-semibold'>{title}</h1>
      <p className='py-1 text-xs text-gray-500'>{description}</p>
    </div>
    {children}
  </div>
);

export const ImportActions: React.FC<ImportActionsProps> = () => {
  return (
    <div className='mt-6 flex flex-col gap-6'>
      <Step
        title='1. Export Library'
        description='Download your data from the Goodreads Export page'
      >
        <Link
          target='_blank'
          href='https://www.goodreads.com/review/import'
          className={cn(
            buttonVariants({ variant: 'secondary' }),
            'justify-start'
          )}
        >
          Export Goodreads Library
        </Link>
      </Step>
      <Step
        title='2. Upload CSV File'
        description='Upload the file downloaded from step 1'
      >
        <UploadFileDialog
          actionLabel='Import'
          className='justify-start'
          buttonLabel='Upload a File'
        />
      </Step>
    </div>
  );
};

export default ImportActions;
