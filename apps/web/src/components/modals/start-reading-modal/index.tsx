'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Progress_Type, Reading_Status } from '@/graphql/graphql';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useCreateRead } from '@/modules/bookshelves/mutations/use-create-read';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import { toast } from '@/hooks/use-toast';
import useStartReadingModal from './use-start-reading-modal';

interface StartReadingModalProps { }

export const StartReadingModal: React.FC<StartReadingModalProps> = () => {
    const { isOpen, onClose, userBookId, bookTitle } = useStartReadingModal();
    const [progressType, setProgressType] = useState<Progress_Type>(Progress_Type.Pages);
    const [capacity, setCapacity] = useState<string>('');
    const { createRead } = useCreateRead();
    const { updateUserBook } = useUpdateUserBook();

    const handleSubmit = async () => {
        try {
            // Create a new read
            await createRead({
                variables: {
                    data: {
                        active: true,
                        type: progressType,
                        capacity: parseInt(capacity),
                        userBook: {
                            connect: {
                                id: userBookId
                            }
                        }
                    }
                }
            });

            // Update user book status to READING
            await updateUserBook({
                variables: {
                    data: {
                        status: Reading_Status.Reading
                    },
                    where: {
                        id: userBookId
                    }
                }
            });

            toast({
                title: 'Started reading',
                description: `You've started reading ${bookTitle}`,
            });

            onClose();
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to start reading. Please try again.',
                variant: 'destructive',
            });
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Start Reading"
            description="Set up your reading progress tracking"
        >
            <div className="flex flex-col gap-6">
                <div className="space-y-4">
                    <div>
                        <h4 className="mb-4 text-sm font-medium">How would you like to track your progress?</h4>
                        <RadioGroup
                            defaultValue={Progress_Type.Pages}
                            value={progressType}
                            onValueChange={(value) => setProgressType(value as Progress_Type)}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={Progress_Type.Pages} id="pages" />
                                <Label htmlFor="pages">Pages</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={Progress_Type.Percentage} id="percentage" />
                                <Label htmlFor="percentage">Percentage</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div>
                        <Label htmlFor="capacity">
                            {progressType === Progress_Type.Pages ? 'Total Pages' : 'Total Percentage'}
                        </Label>
                        <Input
                            id="capacity"
                            type="number"
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            placeholder={progressType === Progress_Type.Pages ? 'Enter total pages' : '100'}
                            className="mt-2"
                        />
                    </div>
                </div>
                <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={!capacity || parseInt(capacity) <= 0}
                    >
                        Start Reading
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
