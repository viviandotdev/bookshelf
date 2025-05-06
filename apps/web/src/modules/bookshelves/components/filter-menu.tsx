'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Check, ChevronDown } from 'lucide-react';

interface FilterMenuProps {
    selections: React.ReactNode;
    selectedValue: string;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
    selections,
    selectedValue,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger
                className='flex justify-between min-w-[140px]'
                asChild
            >
                <Button
                    size='sm'
                    className={cn(
                        'hover:bg-white border shadow-xs bg-white text-gray-900 font-normal',
                    )}
                >
                    {selectedValue}
                    <ChevronDown
                        size={16}
                        strokeWidth={2}
                        aria-hidden='true'
                        className={cn(
                            '-me-1 ms-2 opacity-60 transition-transform duration-500',
                            isOpen ? 'rotate-180' : 'rotate-0',
                        )}
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='min-w-[140px]'>
                {selections}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default FilterMenu;
