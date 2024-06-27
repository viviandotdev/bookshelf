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
import useUserBookStore from '@/stores/use-user-book-store';

interface OwnedButtonProps {
  userBook: UserBook;
}

const OwnedButton: React.FC<OwnedButtonProps> = ({ userBook }) => {
  const { isOwned, userBookId } = useUserBookStore();
  const [hasReacted, toggleReact] = useToggle(isOwned);

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
    <IconButton onClick={toggleOwnedStatus} className='h-10 w-10'>
      <span className='sr-only'>Mark as Owned</span>
      {hasReacted ? (
        <Icons.owned className='h-4 w-4 items-center fill-current text-beige' />
      ) : (
        <Icons.owned className='h-4 w-4 items-center' />
      )}
    </IconButton>
  );
};

export default OwnedButton;
