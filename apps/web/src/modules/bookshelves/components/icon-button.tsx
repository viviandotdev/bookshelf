import React from 'react';
import { cn } from '@/lib/utils';

interface IconButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  children,
  onClick,
}) => (
  <div
    className={cn(
      'flex cursor-pointer items-center justify-center rounded-3xl border border-gray-200 shadow-xs transition duration-300 hover:-translate-y-0.5 hover:border-beige-700 hover:bg-beige-100',
      className
    )}
    onClick={onClick}
  >
    <div className='flex h-6 w-6 items-center justify-center'>{children}</div>
  </div>
);
