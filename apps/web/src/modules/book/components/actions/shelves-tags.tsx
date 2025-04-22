'use client';
import React, { useEffect } from 'react';
import { UserBook } from '@/graphql/graphql';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import useUserBookStore from '@/stores/use-user-book-store';
import { Button } from '@/components/ui/button';

interface ShelvesTagsProps {
    bookTitle: string;
    targetBook?: UserBook;
}

const ShelvesTags: React.FC<ShelvesTagsProps> = ({
    targetBook,
    bookTitle,
}) => {
    const { data } = useSession();
    const {
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

    if (!isInLibrary || !userBookShelves || userBookShelves.length === 0) {
        return null;
    }

    // If there are more than 4 shelves, show the count
    if (userBookShelves.length > 4) {
        return (
            <div className="text-sm text-gray-600">
                Part of {userBookShelves.length} shelves
            </div>
        );
    }

    // Show individual shelf links if 4 or fewer shelves
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
};

export default ShelvesTags;
