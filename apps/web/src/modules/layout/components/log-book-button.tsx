'use client';
import { Icons } from '@/components/icons';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

interface LogBookButtonProps { }

export const LogBookButton: React.FC<LogBookButtonProps> = ({ }) => {
    const logBookModal = useLogBookModal();
    return (
        <>
            <button
                onClick={() => logBookModal.onOpen()}
                className={cn(
                    buttonVariants({ variant: 'pill', size: 'xs' }),
                    'pl-2 pr-3 h-8 justify-center rounded-sm'
                )}
            >
                <Icons.plus className='mr-1 h-4 w-4' />
                Log
            </button>
        </>
    );
};
export default LogBookButton;
