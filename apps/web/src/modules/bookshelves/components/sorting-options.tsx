'use client';
import { Icons } from '@/components/icons';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useTransition } from 'react';
import useCreateQueryString from '../hooks/use-create-query-string';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import React from 'react';
interface SortingOptionsProps {
    selections: {
        label: string;
        value: string;
    }[];
}
export const SortingOptions: React.FC<SortingOptionsProps> = ({
    selections,
}) => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const createQueryString = useCreateQueryString();
    const searchParams = useSearchParams();
    const sort = searchParams?.get('sort') ?? 'dateAdded.desc';
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild className='flex justify-between min-w-[112px]'>
                <Button
                    disabled={isPending}
                    aria-label='Sort books'
                    variant={'secondary'}
                    className='hover:bg-white border shadow-xs bg-white text-gray-900 font-normal'
                    size={'sm'}
                >
                    Sort by
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
            <DropdownMenuContent
                avoidCollisions={false}
                align='end'
                side={'bottom'}
                className='w-48'
            >
                <DropdownMenuLabel className='text-beige-700'>
                    Sort by
                </DropdownMenuLabel>
                <DropdownMenuSeparator className='bg-gray-200' />
                {selections.map((option) => (
                    <DropdownMenuItem
                        key={option.label}
                        className={cn(
                            option.value === sort
                                ? 'bg-beige-100 font-semibold text-beige-700'
                                : 'text-gray-500'
                        )}
                        onClick={() => {
                            startTransition(() => {
                                router.push(
                                    `${pathname}?${createQueryString({
                                        sort: option.value,
                                    })}`
                                );
                            });
                        }}
                    >
                        {option.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
