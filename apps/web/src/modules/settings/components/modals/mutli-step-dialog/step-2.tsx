import { motion } from 'motion/react';
import React, { useCallback, useContext, useState } from 'react';
import { ImportLibraryContext } from './multi-step-component';
import { toast } from '@/hooks/use-toast';
import { useImportUserBooksMutation } from '@/graphql/graphql';

interface Step2Props {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    setDirection: React.Dispatch<React.SetStateAction<number | undefined>>;
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Step2: React.FC<Step2Props> = ({
    setCurrentStep,
    setDirection,
    setOpenDialog,
}) => {
    const [ownedShelf, setOwnedShelf] = useState('');
    const [favoritesShelf, setFavoritesShelf] = useState('');
    const [ImportUserBooks] = useImportUserBooksMutation();
    const { state } = useContext(ImportLibraryContext)!;

    const handleOwnedShelfChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOwnedShelf(e.target.value);
    };

    const handleFavoritesShelfChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFavoritesShelf(e.target.value);
    };

    const handleImportLibrary = useCallback(() => {
        if (state.csvContent) {
            const { csvContent } = state;
            if (csvContent) {
                ImportUserBooks({
                    variables: {
                        content: csvContent,
                        shelves: state.shelves || [],
                        ownedShelf: ownedShelf,
                        favoritesShelf: favoritesShelf,
                    },
                });
            }
            toast({
                variant: 'success',
                title:
                    "Your books are now being imported, we'll send you an email notification once it is done ",
            });
        } else {
            console.error('No file uploaded');
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'No file was uploaded. Please go back and select a file.',
            });
        }
        setOpenDialog(false);
    }, [state.csvContent, ownedShelf, favoritesShelf, ImportUserBooks]);

    return (
        <div className=''>
            <p className='mb-6 text-sm font-medium text-black'>
                Do you use Goodreads shelves to track your owned or favorite books?
            </p>

            <div className='mb-6 space-y-4'>
                <div className='flex flex-col'>
                    <label className='mb-2 text-xs text-zinc-700'>
                        Shelf for my <span className='font-bold'>owned</span> books
                    </label>
                    <select
                        className='w-full appearance-none rounded-lg border border-neutral-300 bg-white px-4 py-2 pr-8 text-sm font-normal text-neutral-900 focus:outline-none'
                        value={ownedShelf}
                        onChange={handleOwnedShelfChange}
                    >
                        <option value=''>Select a shelf</option>
                        {state.shelves.map((shelf) => (
                            <option key={shelf} value={shelf}>
                                {shelf}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='mb-2 text-xs text-zinc-700'>
                        Shelf for my <span className='font-bold'>favorites</span> books
                    </label>
                    <select
                        className='w-full appearance-none rounded-lg border border-neutral-300 bg-white px-4 py-2 pr-8 text-sm font-normal text-neutral-900 focus:outline-none'
                        value={favoritesShelf}
                        onChange={handleFavoritesShelfChange}
                    >
                        <option value=''>Select a shelf</option>
                        {state.shelves.map((shelf) => (
                            <option key={shelf} value={shelf}>
                                {shelf}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <p className='mb-6 text-xs font-medium text-zinc-700'>
                Note: If you use Goodreads's built-in "owned" checkbox, those books will
                automatically be marked as owned during import.
            </p>
            <motion.div layout className='mt-8 flex justify-between'>
                <button
                    className='cursor-pointer rounded-lg border border-gray-200 p-2 px-3 text-sm font-medium text-gray-600 shadow-sm disabled:opacity-50'
                    onClick={() => {
                        setDirection(-1);
                        setCurrentStep((prev) => prev - 1);
                    }}
                >
                    Back
                </button>
                <button
                    className='cursor-pointer rounded-lg bg-beige-700 p-2 px-3 text-sm font-medium text-white shadow-sm disabled:opacity-50'
                    onClick={handleImportLibrary}
                >
                    {'Import Books'}
                </button>
            </motion.div>
        </div>
    );
};

export default Step2;
