import { Size, UserBookShelves } from '@/graphql/graphql';
import { DEFAULT_BOOKCOVER_PLACEHOLDER } from '@/lib/constants';
import React from 'react';

interface BookCoverProps {
    src: string;
    rotate?: string;
    size?: string;
    margin?: string;
    zIndex?: string;
}

const BookCover: React.FC<BookCoverProps> = ({
    src,
    rotate = '0deg',
    size = 'w-24',
    margin = 'ml-0',
    zIndex = 'z-0',
}) => {
    return (
        <div
            className={`overflow-hidden ${size} ${margin} ${zIndex}`}
            style={{
                aspectRatio: '2 / 3',
                transform: `rotate(${rotate})`,
            }}
        >
            <img
                className='h-full w-full rounded-sm shadow'
                src={src}
                alt='Book Cover'
            />
        </div>
    );
};

interface ShelfCoversProps {
    shelfBooks: UserBookShelves[];
}

const ShelfCovers: React.FC<ShelfCoversProps> = ({ shelfBooks }) => {
    const bookCovers = shelfBooks.map(({ userBook }, index) => {
        const largeCover =
            userBook.book.covers &&
            userBook.book.covers.find((cover) => cover.size === Size.Large);

        const smallCover =
            userBook.book.covers &&
            userBook.book.covers.find((cover) => cover.size === Size.Small);

        const coverUrl = largeCover
            ? largeCover.url
            : smallCover
                ? smallCover.url
                : DEFAULT_BOOKCOVER_PLACEHOLDER;

        const rotations = ['-10deg', '0deg', '10deg'];
        const margins = ['-mr-10 mt-12', 'ml-0', '-ml-10 mt-12'];
        const zIndexes = ['z-10', 'z-20', 'z-10'];

        const rotate = rotations[index % rotations.length];
        const margin = margins[index % margins.length];
        const zIndex = zIndexes[index % zIndexes.length];

        return { src: coverUrl, rotate, margin, zIndex };
    });

    return (
        <div className='flex h-48 w-full items-center justify-center px-10'>
            <div className='relative flex items-center justify-center'>
                {bookCovers.map((cover, index) => (
                    <BookCover key={index} {...cover} size='w-28 md:w-24 lg:w-28' />
                ))}
            </div>
        </div>
    );
};

export default ShelfCovers;
