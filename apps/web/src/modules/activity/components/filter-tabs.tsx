"use client"
import React, { useTransition } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useCreateQueryString from '@/modules/bookshelves/hooks/use-create-query-string';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface FilterTabsProps { }

const TABS = [
    { value: 'ALL', label: 'All' },
    { value: 'RATE', label: 'Rating' },
    { value: 'REVIEW', label: 'Reviews' },
];

export const FilterTabs: React.FC<FilterTabsProps> = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const action = searchParams.get("filter") || "ALL";
    const pathname = usePathname();
    const createQueryString = useCreateQueryString();
    const [isPending, startTransition] = useTransition();

    const handleTabClick = (filter: string) => {
        startTransition(() => {
            const query = filter === 'ALL' ? '' : `?${createQueryString({ filter })}`;
            router.push(`${pathname}${query}`);
        });
    };

    return (
        <Tabs defaultValue={action} className='w-[400px]'>
            <TabsList>
                {TABS.map((tab) => (
                    <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        onClick={() => handleTabClick(tab.value)}
                    >
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
};

export default FilterTabs;
