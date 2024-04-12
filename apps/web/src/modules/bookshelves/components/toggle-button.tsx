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
    console.log(status);
  }, [status]);
  // Function to handle button click and cycle through the statuses
  const toggleStatus = () => {
    setStatus((currentStatus) => {
      switch (currentStatus) {
        case 'none':
          startTransition(() => {
            router.push(
              `${pathname}?${createQueryString({
                [type]: 'true',
              })}`
            );
          });
          return 'true';
        case 'true':
          startTransition(() => {
            router.push(
              `${pathname}?${createQueryString({
                [type]: 'false',
              })}`
            );
          });
          return 'false';
        case 'false':
          startTransition(() => {
            router.push(
              `${pathname}?${createQueryString({
                [type]: null,
              })}`
            );
          });
          return 'none';
        default:
          return 'none';
      }
    });
  };

  // Determine button text based on the current status
  const buttonText =
    status === 'true'
      ? typeConfig[type]
      : status === 'false'
        ? `Not ${typeConfig[type]}`
        : typeConfig[type];

  // Determine button styling based on the current status
  const getBackgroundClass = () => {
    if (status === 'none') {
      return 'bg-white border-gray-200 text-beige-700 hover:bg-white';
    } else {
      return 'bg-beige-700 hover:bg-beige-700';
    }
  };

  const buttonClass = `border-2 border-beige-700 text-white ${getBackgroundClass()}`;

  return (
    <Button
      className={buttonClass}
      onClick={toggleStatus}
      variant='pill'
      size='sm'
    >
      {buttonText}
    </Button>
  );
};

export default ToggleButton;
