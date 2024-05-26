'use client';
import { cn, formatAuthors } from '@/lib/utils';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Icons } from '../../../components/icons';
import { Book } from '@/graphql/graphql';

interface BookInfoProps {
  processedBook: Book;
}

export default function BookInfo({ processedBook }: BookInfoProps) {
  //TODO: Add a show more button
  return (
    <>
      <div className=' text-base font-semibold'>
        <span className='flex items-center'>
          <span className='mr-2'>About this Book</span>
          <span className='relative'>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className='flex h-8 w-8 items-center justify-center rounded-full transition duration-300 hover:bg-beige-100'
                  style={{ top: '-5px', left: '-5px' }}
                >
                  <Icons.arrowRight className='h-5 w-5 rotate-0 transform text-beige transition duration-300' />
                </button>
              </DialogTrigger>
              <DialogContent className='max-h-4/6 overflow-scroll sm:max-w-[664px]'>
                <DialogHeader>
                  <DialogTitle>{processedBook.title}</DialogTitle>
                  <DialogDescription className='inline text-sm leading-normal'>
                    by {formatAuthors(processedBook)}
                  </DialogDescription>
                </DialogHeader>
                <DialogDescription>
                  <div
                    className={`leading-normal `}
                    dangerouslySetInnerHTML={{
                      __html: processedBook.description!,
                    }}
                  ></div>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </span>
        </span>
      </div>
      <div className='max-h-32 overflow-hidden text-sm'>
        <div
          className={`leading-normal `}
          dangerouslySetInnerHTML={{
            __html: processedBook.description!,
          }}
        ></div>
      </div>
      <div>
        {/* <div className="text-sm text-beige">GENRES</div>
                <hr className="border-t-1 border-beige" /> */}
        <div className='mt-2'>
          <Button variant={'secondary'}>
            <div>Want to Read</div>
            <div>
              <Icons.plus className='h-5 w-5' />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
}
