import { motion } from 'framer-motion';
import React, { useCallback, useContext, useState } from 'react';
import { ImportLibraryContext } from './multi-step-component';
import { toast } from '@/hooks/use-toast';
import { useImportUserBooksMutation } from '@/graphql/graphql';

interface Step2Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setDirection: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const Step2: React.FC<Step2Props> = ({
  setCurrentStep,
  setDirection,
}) => {
  const [ownedShelf, setOwnedShelf] = useState('');
  const [favoritesShelf, setFavoritesShelf] = useState('favorites');
  const [ImportUserBooks] = useImportUserBooksMutation();
  const handleOwnedShelfChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOwnedShelf(e.target.value);
  };
  const { state } = useContext(ImportLibraryContext)!;

  const handleImportLibrary = useCallback(() => {
    // This function will be called when the "Next" button is clicked in the UploadFile component
    if (state.csvContent) {
      const { csvContent } = state;
      if (csvContent) {
        ImportUserBooks({ variables: { content: csvContent } });
      }
      toast({
        variant: 'success',
        title:
          "Your books are now being imported, we'll send you an email notification once it is done ",
      });
    } else {
      // Handle the case when no file is uploaded
      console.error('No file uploaded');
      // You might want to show an error message to the user here
    }
  }, [state.csvContent]);

  const handleFavoritesShelfChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFavoritesShelf(e.target.value);
  };

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
            <option value='owned'>Owned</option>
            <option value='my-books'>My Books</option>
            <option value='personal-library'>Personal Library</option>
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
            <option value='favorites'>Favorites</option>
            <option value='best-books'>Best Books</option>
            <option value='top-picks'>Top Picks</option>
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
          onClick={() => {
            handleImportLibrary();
            return;
          }}
        >
          {'Import Books'}
        </button>
      </motion.div>
    </div>
  );
};

export default Step2;
