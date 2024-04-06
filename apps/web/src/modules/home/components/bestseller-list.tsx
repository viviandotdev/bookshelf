import BookCover from '@/components/book-cover';
import { Bestseller } from '@/graphql/graphql';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// BookList component
export const BestsellerList = ({
  books,
  genre,
}: {
  books: Bestseller[];
  genre: string;
}) => (
  <>
    <h2
      className={cn(
        dm_sefif_display.className,
        'mb-4 text-2xl font-semibold text-beige-700'
      )}
    >
      New York Times Bestsellers {genre}
    </h2>
    <div className={'grid grid-cols-5 gap-4'}>
      {books &&
        books.slice(0, 5).map((book: Bestseller, idx: number) => (
          <div key={idx} className={'flex-row'}>
            <Link
              href={`/book/${book.googleId}`}
              className={'text-beige hover:text-stone-500'}
            >
              <BookCover src={book.bookImage} />
            </Link>
          </div>
        ))}
    </div>
  </>
);
