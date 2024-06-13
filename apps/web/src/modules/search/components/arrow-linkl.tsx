import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ArrowLinkProps {
  href: string;
  content?: string;
  className?: string;
}

export const ArrowLink: React.FC<ArrowLinkProps> = ({
  href,
  content,
  className,
}) => {
  return (
    <div
      className={twMerge(
        'absolute right-4 top-4 hidden rounded-sm fill-current stroke-gray-400 stroke-1 px-1 group-hover/item:block',
        className
      )}
    >
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger>
            <Link href={href} target='_blank'>
              <div className='rounded-full border-2 bg-white p-2'>
                <ArrowTopRightIcon className='font-bold  ' />
              </div>
            </Link>
          </TooltipTrigger>
          {/* {content && (
            <TooltipContent
              side={'left'}
              className='border-foreground/60 items-center border border-solid px-2 py-1 text-[10px]'
            >
              <p>{content}</p>
            </TooltipContent>
          )} */}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
export default ArrowLink;
