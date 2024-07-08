'use client';
import React, { useEffect } from 'react';
import { Icons } from '@/components/icons';
import {
  useAddUserBookToShelfMutation,
  useRemoveUserBookFromShelfMutation,
  UserBook,
} from '@/graphql/graphql';
import { useToggle } from '@uidotdev/usehooks';
import { IconButton } from '@/modules/bookshelves/components/icon-button';
import useUserBookStore from '@/stores/use-user-book-store';

interface OwnedButtonProps {
  userBook?: UserBook;
}

const OwnedButton: React.FC<OwnedButtonProps> = ({ userBook }) => {
  const { isOwned, userBookId, setUserBook } = useUserBookStore();
  const [hasReacted, toggleReact] = useToggle(isOwned);

  useEffect(() => {
    if (userBook) {
      setUserBook({
        isOwned: userBook.shelves?.some(({ shelf }) => shelf.name === 'Owned'),
      });
      toggleReact(
        userBook.shelves?.some(({ shelf }) => shelf.name === 'Owned')
      );
    }
  }, [userBook]);

  const [addToOwned] = useAddUserBookToShelfMutation({
    onError: (error) => {
      toggleReact();
      // Handle error
    },
  });

  const [removeFromOwned] = useRemoveUserBookFromShelfMutation({
    onError: (error) => {
      toggleReact();
      // Handle error
    },
  });

  const toggleOwnedStatus = async () => {
    toggleReact();
    if (hasReacted) {
      await removeFromOwned({
        variables: {
          where: {
            id: userBookId,
          },
          shelf: 'Owned',
        },
      });
    } else {
      await addToOwned({
        variables: {
          where: {
            id: userBookId,
          },
          shelf: 'Owned',
        },
      });
    }
  };

  return (
    <IconButton
      onClick={toggleOwnedStatus}
      className={`h-10 w-10 ${hasReacted ? 'border-beige-100 bg-beige-100' : ''}`}
    >
      <span className='sr-only'>Mark as Owned</span>
      <Icons.owned
        className={`h-4 w-4 items-center ${hasReacted ? 'text-green-800' : ''}`}
      />
    </IconButton>
  );
};

export default OwnedButton;
