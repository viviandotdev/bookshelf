'use client';
import React, { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import AddToShelfHandler from '@/modules/shelf/mutations/add-to-shelf-hadnler';
import useAddToShelfModal from '@/components/modals/add-to-shelf-modal/use-add-to-shelf-modal';
import useUserBookStore from '@/stores/use-user-book-store';
import { UserBookShelves } from '@/graphql/graphql';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

interface AddToShelfButtonProps {
  userBookId: string;
  bookTitle: string;
  shelves?: UserBookShelves[];
}

const AddToShelfButton: React.FC<AddToShelfButtonProps> = ({
  userBookId,
  bookTitle,
  shelves,
}) => {
  const { data } = useSession();
  const { setShelves, shelves: userBookShelves } = useAddToShelfModal();
  let buttonText: string = ' + Add to shelves';

  const myShelves = shelves?.filter(
    ({ shelf }) => shelf.name != 'Owned' && shelf.name !== 'Favorites'
  );

  useMemo(() => {
    setShelves(myShelves);
  }, [setShelves, shelves]);

  if (userBookShelves && userBookShelves.length > 0) {
    if (userBookShelves.length < 4) {
      return (
        <div className='flex gap-2'>
          {userBookShelves.map(({ shelf }) => (
            <Link
              key={shelf.id}
              href={`/${data?.user.username}/shelf/${shelf.slug}`}
            >
              <Button
                variant='pill'
                className='h-10 rounded-full text-base font-normal shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border hover:border-beige-700 hover:bg-beige-100'
              >
                {shelf.name}
              </Button>
            </Link>
          ))}
        </div>
      );
    }
    buttonText = `Part of ${userBookShelves.length} shelves`;
  }

  return (
    <AddToShelfHandler userBookId={userBookId} bookTitle={bookTitle}>
      {(handleAddToShelf) => (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleAddToShelf();
          }}
          variant='pill'
          className='h-10 rounded-full text-base font-normal shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border hover:border-beige-700 hover:bg-beige-100'
        >
          {buttonText}
        </Button>
      )}
    </AddToShelfHandler>
  );
};

export default AddToShelfButton;
