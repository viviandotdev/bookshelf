'use client';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import AddToShelfHandler from '@/modules/shelf/mutations/add-to-shelf-hadnler';
import useAddToShelfModal from '@/components/modals/add-to-shelf-modal/use-add-to-shelf-modal';
import useUserBookStore from '@/stores/use-user-book-store';
import { UserBook } from '@/graphql/graphql';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Icons } from '@/components/icons';
import { IconButton } from '@/modules/bookshelves/components/icon-button';

interface AddToShelfButtonProps {
  bookTitle: string;
  userBook?: UserBook;
  variant?: 'default' | 'icon';
}

const AddToShelfButton: React.FC<AddToShelfButtonProps> = ({
  userBook,
  bookTitle,
  variant = 'default',
}) => {
  const { data } = useSession();
  const {
    setShelves,
    shelves: userBookShelves,
    setUserBookId,
    setBookTitle,
  } = useAddToShelfModal();

  const { isInLibrary } = useUserBookStore();

  useEffect(() => {
    if (userBook) {
      const myShelves = userBook.shelves?.filter(
        ({ shelf }) => shelf.name != 'Owned' && shelf.name !== 'Favorites'
      );
      setUserBookId(userBook.id);
      setBookTitle(bookTitle);
      setShelves(myShelves as any);
    }
  }, [setShelves, userBook]);

  let buttonText: string = ' + Add to shelves';

  //  If is userbook and is part of shelves
  if (
    variant != 'icon' &&
    userBook &&
    isInLibrary &&
    userBookShelves &&
    userBookShelves.length > 0
  ) {
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
    <>
      {userBook && isInLibrary && (
        <AddToShelfHandler userBookId={userBook.id} bookTitle={bookTitle}>
          {(handleAddToShelf) =>
            variant === 'icon' ? (
              <IconButton
                className='h-10 w-10'
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToShelf();
                }}
              >
                <span className='sr-only'>{buttonText}</span>
                <Icons.plus className='h-4 w-4 text-black' />
              </IconButton>
            ) : (
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
            )
          }
        </AddToShelfHandler>
      )}
    </>
  );
};

export default AddToShelfButton;
