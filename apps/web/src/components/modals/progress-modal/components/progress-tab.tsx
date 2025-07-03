import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
    Progress_Type,
    useCreateReadMutation,
    useCreateReadingSessionMutation,
} from '@/graphql/graphql';
import { IconButton } from '@/modules/bookshelves/components/icon-button';
import useUserBookStore from '@/stores/use-user-book-store';
import React, { ChangeEvent, useEffect, useState } from 'react';
import useProgressModal from '../use-progress-modal';
import { toast } from '@/hooks/use-toast';

interface ProgressTabProps {
}

export const ProgressTab: React.FC<ProgressTabProps> = ({
}) => {
    const { bookTitle, userBookId, book } = useUserBookStore();
    const totalPages = book.pageCount || 0;
    const {
        onClose,
        updateReadingData,
        invalidateReadingData,
        getReadingData
    } = useProgressModal();

    // Local state for progress and type
    const [progress, setProgress] = useState(0);
    const [type, setType] = useState(Progress_Type.Pages);
    const readingData = getReadingData(userBookId);
    // Initialize progress from readingData store for the current userBookId
    useEffect(() => {
        if (userBookId) {

            if (readingData?.latestSession) {
                setProgress(readingData.latestSession.progress || 0);
                setType(readingData.latestSession.type || Progress_Type.Pages);
            } else {
                // Fallback to default values if no reading data exists
                setProgress(0);
                setType(Progress_Type.Pages);
            }
        }
    }, [userBookId, getReadingData]);

    // GraphQL mutations
    const [createRead] = useCreateReadMutation({
        onCompleted: (_) => {
            toast({
                title: `Started reading ${bookTitle}`,
                variant: 'success'
            });
        },
        onError: (error) => {
            toast({
                title: 'Error starting reading session',
                variant: 'destructive'
            });
        }
    });

    const [createReadingSession] = useCreateReadingSessionMutation({
        onCompleted: (data) => {
            const { type, progress } = data.createReadingSession;
            const newSession = data.createReadingSession;
            const newRead = data.createReadingSession.read;

            // Update store immediately
            updateReadingData(userBookId, newRead, newSession);
            toast({
                title: `${bookTitle} progress updated to ${progress} ${type === Progress_Type.Pages ? 'pages' : '%'}`,
                variant: 'success'
            });
            onClose();
        },
        onError: (error) => {
            // invalidate the read data
            invalidateReadingData(userBookId);
            toast({
                title: 'Error updating reading progress',
                variant: 'destructive'
            });
        }
    });

    const handleToggle = (newType: Progress_Type) => {
        if (newType !== type) {
            setType(newType);

            // Convert progress when switching between types
            if (newType === Progress_Type.Percentage) {
                const newProgress = Math.round((progress / totalPages) * 100);
                setProgress(newProgress);
            } else {
                const newProgress = Math.round((progress / 100) * totalPages);
                setProgress(newProgress);
            }
        }
    };

    const submitProgress = async () => {
        if (!userBookId) {
            toast({
                title: 'No book selected',
                variant: 'destructive'
            });
            return;
        }

        try {
            if (!readingData?.latestRead) {
                // Create a new Read first
                const createReadResult = await createRead({
                    variables: { userBookId }
                });

                if (createReadResult.data?.createRead) {
                    // Then create the reading session
                    await createReadingSession({
                        variables: {
                            readId: createReadResult.data.createRead.id,
                            capacity: type === Progress_Type.Pages ? totalPages : 100,
                            progress: progress,
                            type: type
                        }
                    });
                }
            } else {
                // Add reading session to existing read
                await createReadingSession({
                    variables: {
                        readId: readingData?.latestRead.id,
                        capacity: type === Progress_Type.Pages ? totalPages : 100,
                        progress: progress,
                        type: type
                    }
                });
            }
        } catch (error) {
            console.error('Error submitting progress:', error);
        }
    };

    const handleIncrement = () => {
        const maxValue = type === Progress_Type.Pages ? totalPages : 100;
        const newProgress = Math.min(progress + 1, maxValue);
        setProgress(newProgress);
    };

    const handleDecrement = () => {
        const newProgress = Math.max(progress - 1, 0);
        setProgress(newProgress);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || /^\d+$/.test(value)) {
            const numValue = parseInt(value, 10);
            if (value === '' || isNaN(numValue)) {
                setProgress(0);
            } else {
                const maxValue = type === Progress_Type.Pages ? totalPages : 100;
                const newProgress = Math.min(Math.max(numValue, 0), maxValue);
                setProgress(newProgress);
            }
        }
    };

    const getProgressText = () => {
        if (type === Progress_Type.Pages) {
            return `of ${totalPages} pages read`;
        } else {
            return `${progress}% completed`;
        }
    };

    return (
        <div className='flex w-full flex-col items-center justify-start gap-4'>
            <div className='flex flex-col items-center justify-start'>
                <div className='flex flex-col items-center justify-start gap-5'>
                    <div className='text-lg font-normal'>
                        Update reading progress for
                        <span className='font-bold'> {bookTitle}</span>
                    </div>
                    <div className='flex w-full items-center justify-center gap-4'>
                        <IconButton
                            className='h-14 w-14 rounded-lg'
                            onClick={handleDecrement}
                        >
                            <span className='sr-only'>Decrement</span>
                            <Icons.minus className='h-4 w-4 items-center' />
                        </IconButton>
                        <input
                            type='text'
                            className='h-14 w-64 rounded-lg border border-gray-200 px-5 py-4 text-center text-lg text-neutral-900 shadow-xs'
                            value={progress}
                            onChange={handleInputChange}
                        />
                        <IconButton
                            className='h-14 w-14 rounded-lg'
                            onClick={handleIncrement}
                        >
                            <span className='sr-only'>Increment</span>
                            <Icons.plus className='h-4 w-4 items-center' />
                        </IconButton>
                    </div>
                </div>
                <div className='text-base font-normal text-zinc-700'>
                    {getProgressText()}
                </div>
            </div>
            <div className='flex w-full items-end justify-start gap-4'>
                <Button
                    variant={type === Progress_Type.Pages ? 'secondary' : 'outline'}
                    className='flex h-12 w-1/2 items-center justify-center rounded-lg py-4 text-sm font-normal text-black'
                    onClick={() => handleToggle(Progress_Type.Pages)}
                >
                    # Pages
                </Button>
                <Button
                    variant={type === Progress_Type.Percentage ? 'secondary' : 'outline'}
                    className='flex h-12 w-1/2 items-center justify-center rounded-lg py-4 text-sm font-normal text-black'
                    onClick={() => handleToggle(Progress_Type.Percentage)}
                >
                    % Percent
                </Button>
            </div>
            <Button
                onClick={submitProgress}
                variant='default'
                className='mt-4 flex h-12 w-full items-center justify-center rounded-lg text-base font-medium text-white'
            >
                Done
            </Button>
        </div>
    );
};

export default ProgressTab;
