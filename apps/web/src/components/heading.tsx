import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

interface HeadingProps {
  title?: string;
  subTitle?: string;
  href?: string;
  description?: string;
  buttonText?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  subTitle,
  title,
  href,
  description,
  buttonText,
}) => {
  function renderTitle(title?: string, id?: string) {
    if (href) {
      return (
        <Link href={href} className='text-beige hover:text-stone-500'>
          {title}
        </Link>
      );
    }
    return <div className='text-beige'>{title}</div>;
  }
  return (
    <>
      <h3 className={cn(dm_sefif_display.className, 'text-2xl text-gray-400')}>
        {subTitle}
      </h3>

      <div className='mb-6 flex-col'>
        <div className='flex gap-5'>
          <h1
            className={cn(
              dm_sefif_display.className,
              'mb-2 text-4xl font-bold text-beige-700'
            )}
          >
            {renderTitle(title, href)}
          </h1>
          {buttonText && (
            <Button className='mt-0.5 h-9 items-center px-5'>
              {buttonText}
            </Button>
          )}
        </div>

        <div>
          {description && (
            <p className='text-base text-gray-500'>{description}</p>
          )}
        </div>
      </div>
    </>
  );
};
export default Heading;
