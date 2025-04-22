'use client';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import AddToShelfHandler from '@/modules/shelf/mutations/add-to-shelf-hadnler';
import useUserBookStore from '@/stores/use-user-book-store';
import { UserBook } from '@/graphql/graphql';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Icons } from '@/components/icons';
import { IconButton } from '@/modules/bookshelves/components/icon-button';

interface AddToShelfButtonProps {
    bookTitle: string;
    targetBook?: UserBook;
    variant?: 'default' | 'icon';
}

const AddToShelfButton: React.FC<AddToShelfButtonProps> = ({
    targetBook,
    bookTitle,
    variant = 'default',
}) => {
    const { data } = useSession();
    const {
        userBookId,
        isInLibrary,
        shelves: userBookShelves,
        setUserBook,
    } = useUserBookStore();

    useEffect(() => {
        if (targetBook) {
            const myShelves = targetBook!.shelves?.filter(
                ({ shelf }) => shelf.name != 'Owned' && shelf.name !== 'Favorites'
            );
            setUserBook({
                userBookId: targetBook!.id,
                bookTitle: bookTitle,
                shelves: myShelves,
            });
        }
    }, [setUserBook, targetBook]);

    let buttonText: string = 'Add to shelves';


    return (
        <>
            {isInLibrary && (
                <AddToShelfHandler userBookId={userBookId} bookTitle={bookTitle}>
                    {(handleAddToShelf) =>
                        <Button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleAddToShelf();
                            }}
                            variant='pill'
                            className='h-10 bg-white border border-gray-200 shadow-sm rounded-full text-base font-normal transition duration-300 hover:-translate-y-0.5 hover:border hover:border-beige-700 hover:bg-beige-100'
                        >
                            <Icons.plus className='h-4 w-4 text-black' />
                            <span className='ml-2'>{buttonText}</span>

                        </Button>
                    }
                </AddToShelfHandler>
            )}
        </>
    );
};

export default AddToShelfButton;
