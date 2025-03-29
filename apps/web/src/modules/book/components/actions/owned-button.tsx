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
    targetBook?: UserBook;
}

const OwnedButton: React.FC<OwnedButtonProps> = ({ targetBook }) => {
    const { isOwned, userBookId, setUserBook } = useUserBookStore();
    const [hasReacted, toggleReact] = useToggle(isOwned);

    useEffect(() => {
        if (targetBook) {
            setUserBook({
                isOwned: targetBook.shelves?.some(({ shelf }) => shelf.name === 'Owned'),
            });
            toggleReact(
                targetBook.shelves?.some(({ shelf }) => shelf.name === 'Owned')
            );
        }
    }, [targetBook]);

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
                className={`h-4 w-4 items-center ${hasReacted ? 'text-beige-700 drop-shadow-lg' : ''}`}
            />
        </IconButton>
    );
};

export default OwnedButton;
