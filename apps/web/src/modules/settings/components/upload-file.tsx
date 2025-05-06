'use client';
import React, { useContext, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';
import { Icons } from '@/components/icons';
import { ImportLibraryContext } from './modals/mutli-step-dialog/multi-step-component';
import { motion } from 'motion/react';
import { parseLineWithQuotes, processCSVLine } from '@/lib/utils';

interface UploadFileProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    setDirection: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export default function UploadFile({
    setCurrentStep,
    setDirection,
}: UploadFileProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const { state, dispatch } = useContext(ImportLibraryContext)!;
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    useEffect(() => {
        if (state.selectedFile) {
            setSelectedFile(state.selectedFile);
        }
    }, [state.selectedFile]);

    const handleFileUpload = (data: any) => {
        const file = data.file[0] || selectedFile;
        if (!file) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Please select a file to upload.',
            });
            return;
        }

        setIsLoading(true);
        const reader = new FileReader();

        reader.onload = (e) => {
            const contents = e.target?.result;
            if (contents) {
                //set the content
                dispatch({ type: 'SET_CSV_CONTENT', payload: contents as string });
                // get all the shelves and set the shlf contnent
                const csvContent = contents as string;
                const lines = csvContent.split('\n'); // -1 for empty last line, -1 for the top row

                const allShelves = new Set();
                for (let i = 1; i < lines.length - 1; i++) {
                    const line = lines[i];
                    const mappings = parseLineWithQuotes(lines[0]);
                    const goodreadsBook = processCSVLine(line, mappings);
                    let shelves: string[] = []; // get shelves
                    if (goodreadsBook['Bookshelves']) {
                        const cleanShelves = goodreadsBook['Bookshelves']
                            .split(',')
                            .map((shelf) => shelf.trim());
                        const excludedShelves = ['to-read', 'currently-reading', 'read'];
                        shelves = cleanShelves.filter(
                            (shelf) => !excludedShelves.includes(shelf)
                        );
                    }
                    shelves.forEach((shelf) => allShelves.add(shelf));
                }

                dispatch({
                    type: 'SET_SHELVES',
                    payload: Array.from(allShelves) as string[],
                });
                console.log('allShelves', allShelves);
                // set the selected file
                dispatch({ type: 'SET_SELECTED_FILE', payload: file });
                // go to the next step
                setDirection(1);
                setCurrentStep((prev) => prev + 1);
            }
            setIsLoading(false);
        };

        reader.onerror = () => {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'An error occurred while reading the file.',
            });
            setIsLoading(false);
        };

        reader.readAsText(file);
    };

    return (
        <form onSubmit={handleSubmit(handleFileUpload)}>
            <div className='grid gap-4'>
                <div className='flex flex-col items-center justify-center space-y-2 rounded-lg border-2 border-dashed p-6'>
                    <Icons.upload className='h-8 w-8 text-gray-500 dark:text-gray-400' />
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                        Drag and drop your file here
                    </p>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label htmlFor='file'>Or select a file from your device</Label>
                    <Input
                        className='cursor-pointer'
                        id='file'
                        type='file'
                        accept='.csv'
                        {...register('file', { required: !selectedFile })}
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setSelectedFile(file);
                            }
                        }}
                    />
                    {selectedFile && (
                        <p className='text-sm text-gray-500'>
                            Selected file: {selectedFile.name}
                        </p>
                    )}
                    {errors.file && (
                        <p className='text-sm text-red-500'>
                            {errors.file.message as string}
                        </p>
                    )}
                </div>
            </div>
            <motion.div layout className='mt-8 flex justify-between'>
                <button
                    className='cursor-pointer rounded-lg border border-gray-200 p-2 px-3 text-sm font-medium text-gray-600 shadow-sm disabled:opacity-50'
                    disabled={true}
                >
                    Back
                </button>
                <Button type='submit' disabled={isLoading}>
                    {isLoading ? 'Uploading...' : 'Next'}
                </Button>
            </motion.div>
        </form>
    );
}
