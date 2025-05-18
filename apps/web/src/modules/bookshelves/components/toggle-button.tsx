'use client';
import { Button } from '@/components/ui/button';
import { useSearchParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, useTransition } from 'react';
import useCreateQueryString from '../hooks/use-create-query-string';

const typeConfig = {
    owned: 'Owned',
    favorites: 'Favorites',
};

// Define a custom button component
const ToggleButton = ({ type }: { type: 'owned' | 'favorites' }) => {
    // State to track the button's current status
    const searchParams = useSearchParams();
    const currStatus = searchParams?.get(type) ?? '';
    const [status, setStatus] = useState(currStatus != '' ? currStatus : 'none'); // 'inactive', 'active', 'not_active'
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const createQueryString = useCreateQueryString();
    const pathname = usePathname();

    useEffect(() => {
        const currStatus = searchParams?.get(type) ?? '';
        setStatus(currStatus != '' ? currStatus : 'none');
    }, [searchParams, type]);

    // Function to handle button click and cycle through the statuses
    const handleToggle = () => {
        const newStatus = status === 'none' ? 'true' : 'none';
        setStatus(newStatus);

        startTransition(() => {
            const queryString = createQueryString({
                [type]: newStatus === 'true' ? 'true' : null,
            });
            router.push(`${pathname}?${queryString}`);
        });
    };

    // Determine button text based on the current status
    const buttonText = typeConfig[type];

    // Determine button styling based on the current status
    const getBackgroundClass = () => {
        if (status === 'true') {
            return 'bg-beige-100 text-beige-700 font-normal hover:line-through';
        } else {
            return 'hover:bg-white border bg-white font-normal border-gray-200 text-gray-900 shadow-xs hover:bg-beige-50';
        }
    };

    const buttonClass = `border-2 border-beige-700 ${getBackgroundClass()}`;

    return (
        <Button
            className={buttonClass}
            onClick={handleToggle}
            variant='pill'
            size='sm'
            disabled={isPending}
        >
            {buttonText}
        </Button>
    );
};

export default ToggleButton;
