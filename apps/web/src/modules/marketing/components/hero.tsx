import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import classNames from 'classnames';
import React from 'react';

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

// In Supporting Text 1
export const HeroTitle: React.FC<HeroElementProps> = ({
  children,
  className,
}) => {
  return (
    <h1
      className={cn(
        dm_sefif_display.className,
        'mx-auto max-w-2xl text-2xl/[1.25] sm:text-3xl/[1.25] md:text-5xl/[1.25]',
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <p
      className={classNames(
        'text-primary-text mb-12 text-lg md:text-xl',
        className
      )}
    >
      {children}
    </p>
  );
};

interface HeroProps {
  children: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <div className='mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 text-center '>
      {children}
    </div>
  );
};
export default Hero;
