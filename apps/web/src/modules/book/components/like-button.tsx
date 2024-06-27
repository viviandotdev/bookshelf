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

interface LikeButtonProps {
  userBook: UserBook;
}

const LikeButton: React.FC<LikeButtonProps> = ({ userBook }) => {
  const { isLiked, userBookId } = useUserBookStore();
  const [hasReacted, toggleReact] = useToggle(isLiked);
  // TODO evict the cache after the mutation, so it is updated on other pages
  //https://github1s.com/heyxyz/hey/blob/main/apps/web/src/components/Publication/Actions/Like.tsx#L68-L86
  const [addLike] = useAddUserBookToShelfMutation({
    onError: (error) => {
      toggleReact();
      // Handle error
    },
  });

  const [removeLike] = useRemoveUserBookFromShelfMutation({
    onError: (error) => {
      toggleReact();
      // Handle error
    },
  });

  const toggleLike = async () => {
    toggleReact();
    if (hasReacted) {
      await removeLike({
        variables: {
          where: {
            id: userBookId,
          },
          shelf: 'Favorites',
        },
      });
    } else {
      await addLike({
        variables: {
          where: {
            id: userBookId,
          },
          shelf: 'Favorites',
        },
      });
    }
  };

  return (
    <IconButton onClick={toggleLike} className='h-10 w-10'>
      <span className='sr-only'>Like Book</span>
      {hasReacted ? (
        <Icons.heart className='h-4 w-4 items-center fill-current text-red-400' />
      ) : (
        <Icons.heart className='h-4 w-4 items-center' />
      )}
    </IconButton>
  );
};

export default LikeButton;
