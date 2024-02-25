'use client';
import { Button } from '@/components/ui/button';
import {
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useImportUserBooksMutation } from '@/graphql/graphql';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface UploadFileDialogProps {
  buttonLabel: string;
  className?: string;
  actionLabel: string;
}

export default function UploadFileDialog({
  buttonLabel,
  className,
  actionLabel,
}: UploadFileDialogProps) {
  const { register, handleSubmit } = useForm();
  const [ImportUserBooks] = useImportUserBooksMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleFileUpload = (data: any) => {
    const file = data.file[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target?.result;
      // Process the CSV content
      if (contents) {
        sendCSV(contents as string);
      }
    };
    reader.readAsText(file);
  };

  const sendCSV = (csvContent: string) => {
    setIsLoading(true);
    if (csvContent) {
      ImportUserBooks({ variables: { content: csvContent } });
    }
    setIsLoading(false);
    setOpen(false);
    toast({
      variant: 'success',
      title:
        "You books are now being imported, we'll send you an email notification once it is done ",
    });
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          variant='secondary'
          className={` ${className}`}
          onClick={() => {
            setOpen(true);
          }}
        >
          {buttonLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <form onSubmit={handleSubmit(handleFileUpload)}>
          <DialogHeader>
            <DialogTitle>{buttonLabel}</DialogTitle>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='flex flex-col items-center justify-center space-y-2 rounded-lg border-2 border-dashed p-6'>
              <UploadIcon className='h-8 w-8 text-gray-500 dark:text-gray-400' />
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Drag and drop your file here
              </p>
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label htmlFor='file'>Or select a file from your device</Label>
              <Input
                className='cursor-pointer'
                id='file'
                type='file'
                accept='.csv'
                {...register('file')}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type='submit' disabled={isLoading}>
              {actionLabel}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// Rest of the component remains unchanged

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
      <polyline points='17 8 12 3 7 8' />
      <line x1='12' x2='12' y1='3' y2='15' />
    </svg>
  );
}
