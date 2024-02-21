"use client"
import { Icons } from '@/components/icons';
import LogBookModal from '@/components/modals/log-book-modal';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react'

interface LogBookButtonProps {

}

export const LogBookButton: React.FC<LogBookButtonProps> = ({ }) => {
    const logBookModal = useLogBookModal();
    return (
        <><LogBookModal />
            <button
                onClick={() => logBookModal.onOpen()}
                className={cn(
                    buttonVariants({ variant: "pill", size: "xs" }),
                    "pl-2 pr-3"
                )}
            >
                <Icons.plus className="h-4 w-4 mr-1" />
                Log
            </button></>
    );
}
export default LogBookButton
