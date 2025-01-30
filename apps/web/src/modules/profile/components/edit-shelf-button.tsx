'use client';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import useCreateShelfModal from '@/modules/shelf/hooks/use-create-shelf-modal';
import React from 'react';
import { Shelf } from '@/graphql/graphql';
interface EditShelfButtonProps {
  shelf: Shelf;
}

export const EditShelfButton: React.FC<EditShelfButtonProps> = ({ shelf }) => {
  const shelfModal = useCreateShelfModal();
  const editShelf = () => {
    shelfModal.onEdit({
      id: shelf.id!,
      name: shelf.name!,
    });
  };
  return (
    <Button
      onClick={editShelf}
      className={`cursor-pointer items-center justify-center rounded-3xl border border-gray-200 bg-white text-black shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-beige-700 hover:bg-beige-100`}
    >
      <span className='sr-only'>Edit Shelf</span>
      <div className='flex gap-2'>
        <div className='flex items-center justify-center'>
          <Icons.edit className={`h-4 w-4 `} />
        </div>
        Edit Shelf
      </div>
    </Button>
  );
};
export default EditShelfButton;
