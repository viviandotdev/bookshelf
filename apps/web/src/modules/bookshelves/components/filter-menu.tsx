'use client';
import React from 'react';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface FilterMenuProps {
  selections: React.ReactNode;
  selectedValue: string;
  isActive: boolean;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  selections,
  isActive,
  selectedValue,
}) => {
  const getBackgroundClass = () => {
    if (isActive) {
      return 'min-w-20 hover:bg-white border-2 bg-white border-gray-200 text-gray-900 font-normal ';
    } else {
      return 'min-w-20 hover:bg-white border-2 border-beige-700 bg-beige-100 text-beige-700 font-normal';
    }
  };

  return (
    <div className='flex items-center gap-2 space-x-4 text-sm'>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            buttonVariants({ variant: 'pill', size: 'sm' }),
            getBackgroundClass()
          )}
        >
          {selectedValue}
          <Icons.chevronDown className='ml-2 h-4 w-4 shrink-0 text-gray-900' />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          avoidCollisions={false}
          align={'start'}
          side='bottom'
        >
          {selections}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterMenu;
