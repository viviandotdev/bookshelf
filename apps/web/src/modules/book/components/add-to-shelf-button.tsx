// AddToShelfButton.tsx
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import AddToShelfHandler from '@/modules/shelf/mutations/add-to-shelf-hadnler';

interface AddToShelfButtonProps {
  userBookId: string;
  bookTitle: string;
}

const AddToShelfButton: React.FC<AddToShelfButtonProps> = ({
  userBookId,
  bookTitle,
}) => {
  return (
    <AddToShelfHandler userBookId={userBookId} bookTitle={bookTitle}>
      {(handleAddToShelf) => (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleAddToShelf();
          }}
          variant='pill'
          className='h-10 rounded-full border text-base font-normal shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-beige-700 hover:bg-beige-100'
        >
          + Add to collection
        </Button>
      )}
    </AddToShelfHandler>
  );
};

export default AddToShelfButton;
