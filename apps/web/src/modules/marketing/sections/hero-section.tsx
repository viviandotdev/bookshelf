// components/HeroSection.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { dm_sefif_display } from '@/lib/fonts';
import { Button } from '@/components/ui/button';
import Hero, { HeroTitle, HeroSubtitle } from '../components/hero';
import { Icons } from '@/components/icons';
import { HeroImage } from '../components/hero-image';

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
        {subText && (
          <Button
            className='animate-fade-in translate-y-[-1rem] opacity-0'
            variant='secondary'
            size='sm'
          >
            {subText}
          </Button>
        )}

        <HeroTitle className='animate-fade-in translate-y-[-1rem] opacity-0'>
          {title}
        </HeroTitle>
        <Button
          className='text-md animate-fade-in h-12 translate-y-[-1rem] bg-beige-700 px-6 text-white opacity-0 [--animation-delay:600ms]'
          variant='cta'
        >
          {ctaText}
        </Button>
        {/* <HeroImage /> */}
        <div className='mx-auto mt-8 flex max-w-md flex-col items-center justify-center'>
          <div className='relative w-[1200px] '>
            <img
              className='h-auto max-w-full'
              src='https://via.placeholder.com/1200x720'
              alt='Feature illustration'
            />
          </div>
        </div>
      </Hero>
    </>
  );
};

export default HeroSection;
