'use client';
import React from 'react';
import { Icons } from '@/components/icons';
import {
  useAddUserBookToShelfMutation,
  useRemoveUserBookFromShelfMutation,
  UserBook,
} from '@/graphql/graphql';
import { useToggle } from '@uidotdev/usehooks';
import { IconButton } from '@/modules/bookshelves/components/icon-button';

interface OwnedButtonProps {
  userBook: UserBook;
}

const OwnedButton: React.FC<OwnedButtonProps> = ({ userBook }) => {
  const [isOwned, toggleOwned] = useToggle(
    userBook.shelves?.some(({ shelf }) => shelf.name === 'Owned')
  );

  const [addToOwned] = useAddUserBookToShelfMutation({
    onError: (error) => {
      toggleOwned();
      // Handle error
    },
  });

  const [removeFromOwned] = useRemoveUserBookFromShelfMutation({
    onError: (error) => {
      toggleOwned();
      // Handle error
    },
  });

  const toggleOwnedStatus = async () => {
    toggleOwned();
    if (isOwned) {
      await removeFromOwned({
        variables: {
          where: {
            id: userBook.id,
          },
          shelf: 'Owned',
        },
      });
    } else {
      await addToOwned({
        variables: {
          where: {
            id: userBook.id,
          },
          shelf: 'Owned',
        },
      });
    }
  };

  return (
    <IconButton onClick={toggleOwnedStatus} className='h-10 w-10'>
      <span className='sr-only'>Mark as Owned</span>
      {isOwned ? (
        <Icons.owned className='h-4 w-4 items-center fill-current text-beige' />
      ) : (
        <Icons.owned className='h-4 w-4 items-center' />
      )}
    </IconButton>
  );
};

export default OwnedButton;
