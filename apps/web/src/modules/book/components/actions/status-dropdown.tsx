'use client';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { readingStatuses } from '@/config/books';
import { Reading_Status } from '@/graphql/graphql';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Trash2 } from "lucide-react";
import React, { useState } from 'react';

interface StatusDropdownProps {
    currentStatus: Reading_Status;
    onStatusChange: (newStatus: Reading_Status) => void;
    onRemoveBook: () => void;
}

export const StatusDropdown: React.FC<StatusDropdownProps> = ({
    currentStatus,
    onStatusChange,
    onRemoveBook,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleStatusChange = (newStatus: Reading_Status) => {
        onStatusChange(newStatus);
        setIsOpen(false);
    };

    const handleRemoveBook = () => {
        onRemoveBook();
        setIsOpen(false);
    };

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='secondary'
                    className='w-[160px] gap-2 rounded-lg font-normal shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border hover:border-beige-700 hover:bg-beige-100'
                >
                    <div>{readingStatuses[currentStatus]?.name}</div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
                {Object.keys(readingStatuses).map((bookStatus, index) => (
                    <DropdownMenuItem
                        key={index}
                        onClick={() => handleStatusChange(bookStatus as Reading_Status)}
                        className="flex items-center justify-between py-2 px-4 cursor-pointer"
                    >
                        <span>{readingStatuses[bookStatus as Reading_Status].name}</span>
                        {currentStatus === bookStatus && (
                            <Icons.check className='h-4 w-4 stroke-[4px]' />
                        )}
                    </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={handleRemoveBook}
                    className="flex items-center justify-between py-2 px-4 cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                    <span>Remove Book</span>
                    <Trash2 className='h-4 w-4' />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default StatusDropdown;
