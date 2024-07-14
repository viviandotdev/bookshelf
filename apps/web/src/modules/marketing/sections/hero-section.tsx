// components/HeroSection.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { dm_sefif_display } from '@/lib/fonts';
import { Button, buttonVariants } from '@/components/ui/button';
import Hero, { HeroTitle, HeroSubtitle } from '../components/hero';
import { Icons } from '@/components/icons';
import { HeroImage } from '../components/hero-image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  ctaText: string;
  subText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  ctaText,
  subText,
}) => {
  return (
    <>
      <Hero>
        <div className='mx-auto'>
          {subText && (
            <Button
              className='translate-y-[-1rem] animate-fade-in opacity-0'
              variant='secondary'
              size='sm'
            >
              {subText}
            </Button>
          )}

          <HeroTitle className='translate-y-[-1rem] animate-fade-in opacity-0'>
            {title}
          </HeroTitle>
          <Link
            href='/register'
            className={cn(
              buttonVariants({ variant: 'cta' }),
              'text-md mt-4 h-12 translate-y-[-1rem] animate-fade-in bg-beige-700 px-6 text-white opacity-0 [--animation-delay:600ms]'
            )}
          >
            {ctaText}
          </Link>
        </div>
        <div className='mt-8 flex flex-col items-center justify-center rounded-lg'>
          <div className='relative overflow-hidden rounded-lg border border-gray-200 shadow-md'>
            <img
              className='h-auto w-full rounded-lg'
              src='/landing/dashboard.png'
              alt='Feature illustration'
            />
          </div>
        </div>
      </Hero>
    </>
  );
};

export default HeroSection;
