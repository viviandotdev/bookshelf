import { Size, UserBookShelves } from '@/graphql/graphql';
import { DEFAULT_BOOKCOVER_PLACEHOLDER } from '@/lib/constants';
import React from 'react';

interface UserBook {
  book: {
    covers: { url: string }[];
  };
}

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
      className={`overflow-hidden ${rotate ? `rotate-[${rotate}]` : ''} ${size} ${margin} ${zIndex}`}
      style={{ aspectRatio: '2 / 3' }}
    >
      <img
        className='h-full w-full rounded-sm shadow'
        src={src}
        alt='Book Cover'
      />
    </div>
  );
};

interface BookCoverGridProps {
  shelfBooks: UserBookShelves[];
}

const BookCoverGrid: React.FC<BookCoverGridProps> = ({ shelfBooks }) => {
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

    return {
      src: coverUrl,
      rotate: index === 0 ? '-10deg' : index === 2 ? '10deg' : '0deg',
      margin:
        index === 0 ? '-mr-10 mt-12' : index === 2 ? '-ml-10 mt-12' : 'ml-0',
      zIndex: index === 1 ? 'z-20' : 'z-10',
    };
  });

  const as = [
    {
      src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589842551i/40651883.jpg',
      rotate: '-10deg',
      margin: '-mr-10 mt-12', // Adjust this value for more overlap
      zIndex: 'z-10',
    },
    {
      src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422216361i/22551809.jpg',
      rotate: '0deg',
      margin: 'ml-0', // Middle book
      zIndex: 'z-20', // Higher z-index to bring it to the front
    },
    {
      src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1601937850i/54814676.jpg',
      rotate: '10deg',
      margin: '-ml-10 mt-12', // Adjust this value for more overlap
      zIndex: 'z-10',
    },
  ];

  return (
    <div className='flex h-48 w-full items-center justify-center'>
      <div className='relative flex items-center justify-center'>
        {bookCovers.map((cover, index) => (
          <BookCover key={index} {...cover} size='w-28 md:w-24 lg:w-28' />
        ))}
      </div>
    </div>
  );
};

export default BookCoverGrid;
