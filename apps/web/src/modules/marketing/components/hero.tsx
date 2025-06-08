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
                'mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight sm:text-7xl ',
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
        <div className='mx-auto text-center flex flex-col items-center justify-center gap-6'>
            {children}
        </div>
    );
};
export default Hero;
