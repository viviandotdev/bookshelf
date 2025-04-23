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
import { ArrowUp, ChevronDown, ClipboardList, History, Pencil, Play, Trash2, X, Check } from "lucide-react";
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import useProgressModal from '@/components/modals/progress-modal/use-progress-modal';
import useUserBookStore from '@/stores/use-user-book-store';

interface StatusDropdownProps {
    currentStatus: Reading_Status;
    onStatusChange: (newStatus: Reading_Status) => void;
    onRemoveBook: () => void;
    userBookId: string;
    bookTitle: string;
}

export const StatusDropdown: React.FC<StatusDropdownProps> = ({
    currentStatus,
    onStatusChange,
    onRemoveBook,
    userBookId,
    bookTitle,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { onOpen } = useProgressModal();
    const { setUserBook } = useUserBookStore();

    const handleStatusChange = (newStatus: Reading_Status) => {
        onStatusChange(newStatus);
        setIsOpen(false);
    };

    const handleRemoveBook = () => {
        onRemoveBook();
        setIsOpen(false);
    };

    const handleUpdateProgress = () => {
        setIsOpen(false);
        onOpen();
        setUserBook({
            userBookId,
            bookTitle,
        });
    };

    const isWantToRead = currentStatus === Reading_Status.WantToRead;
    const isReading = currentStatus === Reading_Status.Reading;
    const isUpNext = currentStatus === Reading_Status.UpNext;
    const isDidNotFinish = currentStatus === Reading_Status.DidNotFinish;
    const isFinished = currentStatus === Reading_Status.Finished;

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='link'
                    className='flex items-center justify-between gap-2 px-3 py-2 text-sm font-normal hover:bg-transparent'
                >
                    <span>{readingStatuses[currentStatus]?.name}</span>
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
                {isWantToRead && (
                    <>
                        <DropdownMenuItem
                            onClick={() => handleStatusChange(Reading_Status.UpNext)}
                            className="flex items-center justify-between py-2 px-4 cursor-pointer bg-beige-50"
                        >
                            <div className="flex items-center gap-2">
                                <ArrowUp className="h-4 w-4" />
                                <span>{readingStatuses[Reading_Status.UpNext].name}</span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => handleStatusChange(Reading_Status.Reading)}
                            className="flex items-center justify-between py-2 px-4 cursor-pointer bg-beige-50"
                        >
                            <div className="flex items-center gap-2">
                                <Play className="h-4 w-4" />
                                <span>Start {readingStatuses[Reading_Status.Reading].name}</span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                    </>
                )}
                {isReading && (
                    <>
                        <DropdownMenuItem
                            onClick={handleUpdateProgress}
                            className="flex items-center justify-between py-2 px-4 cursor-pointer bg-beige-50"
                        >
                            <div className="flex items-center gap-2">
                                <Pencil className="h-4 w-4" />
                                <span>Update Progress</span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => handleStatusChange(Reading_Status.DidNotFinish)}
                            className="flex items-center justify-between py-2 px-4 cursor-pointer bg-beige-50"
                        >
                            <div className="flex items-center gap-2">
                                <X className="h-4 w-4" />
                                <span>{readingStatuses[Reading_Status.DidNotFinish].name}</span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => handleStatusChange(Reading_Status.Finished)}
                            className="flex items-center justify-between py-2 px-4 cursor-pointer bg-beige-50"
                        >
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4" />
                                <span>{readingStatuses[Reading_Status.Finished].name}</span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                    </>
                )}
                {isUpNext && (
                    <>
                        <DropdownMenuItem
                            onClick={() => handleStatusChange(Reading_Status.Reading)}
                            className="flex items-center justify-between py-2 px-4 cursor-pointer bg-beige-50"
                        >
                            <div className="flex items-center gap-2">
                                <Play className="h-4 w-4" />
                                <span>Start {readingStatuses[Reading_Status.Reading].name}</span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => handleStatusChange(Reading_Status.WantToRead)}
                            className="flex items-center justify-between py-2 px-4 cursor-pointer bg-beige-50"
                        >
                            <div className="flex items-center gap-2">
                                <Icons.book className="h-4 w-4" />
                                <span>{readingStatuses[Reading_Status.WantToRead].name}</span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                    </>
                )}
                {isDidNotFinish && (
                    <>
                        <DropdownMenuItem
                            onClick={() => handleStatusChange(Reading_Status.Reading)}
                            className="flex items-center justify-between py-2 px-4 cursor-pointer bg-beige-50"
                        >
                            <div className="flex items-center gap-2">
                                <Play className="h-4 w-4" />
                                <span>Start {readingStatuses[Reading_Status.Reading].name}</span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={handleUpdateProgress}
                            className="flex items-center justify-between py-2 px-4 cursor-pointer bg-beige-50"
                        >
                            <div className="flex items-center gap-2">
                                <ClipboardList className="h-4 w-4" />
                                <span>View Logs</span>
                            </div>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />
                    </>
                )}
                {isFinished && (
                    <>
                        <DropdownMenuItem
                            onClick={() => handleStatusChange(Reading_Status.Reading)}
                            className="flex items-center justify-between py-2 px-4 cursor-pointer bg-beige-50"
                        >
                            <div className="flex items-center gap-2">
                                <History className="h-4 w-4" />
                                <span>Re-read</span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={handleUpdateProgress}
                            className="flex items-center justify-between py-2 px-4 cursor-pointer bg-beige-50"
                        >
                            <div className="flex items-center gap-2">
                                <ClipboardList className="h-4 w-4" />
                                <span>View Logs</span>
                            </div>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />
                    </>
                )}
                <DropdownMenuItem
                    onClick={handleRemoveBook}
                    className="flex items-center justify-between py-2 px-4 cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                    <div className="flex items-center gap-2">
                        <Trash2 className='h-4 w-4' />
                        <span>Remove Book</span>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default StatusDropdown;
