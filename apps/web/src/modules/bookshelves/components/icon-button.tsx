import React from 'react';
import { cn } from '@/lib/utils';

interface IconButtonProps {
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
    className,
    disabled,
    children,
    onClick,
}) => (
    <div
        data-disabled={disabled}
        className={cn(
            disabled && 'cursor-not-allowed opacity-50 grayscale ',
            !disabled && 'hover:-translate-y-0.5 hover:border-beige-700 hover:bg-beige-100',
            'flex cursor-pointer items-center justify-center rounded-3xl border border-gray-200 shadow-xs transition duration-300',
            className
        )}
        onClick={onClick}
    >
        <div className='flex h-6 w-6 items-center justify-center'>{children}</div>
    </div>
);
