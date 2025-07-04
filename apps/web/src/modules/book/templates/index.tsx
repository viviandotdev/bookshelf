import { dm_sefif_display } from '@/lib/fonts';
import { cn, convertTitleToUnderscore, formatAuthors } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import BookStatusModal from '@/components/modals/book-status-modal';
import RatingInfo from '../components/actions/rating-info';
import BookControls from '../components/actions';
import UnderlinedTabs from '@/components/underlined-tabs';
import {
    DEFAULT_BOOKCOVER_PLACEHOLDER,
    GOODREADS_BASE_URL,
    GOOGLE_BASE_URL,
} from '@/lib/constants';
import { BookData } from '@/modules/bookshelves/types';
import { Size, Source, UserBook } from '@/graphql/graphql';
import AddToShelfButton from '../components/actions/add-to-shelf-button';
import BookInfo from '../components/book-info';
import { User } from 'next-auth';
import SessionList from '@/modules/sessions/components/session-list';
interface BookTemplateProps {
    book: BookData;
    user: User;
    userBook?: UserBook;
}

export default function BookTemplate({ book, userBook }: BookTemplateProps) {
    const tabs = [
        {
            label: 'Book Info',
            children: <BookInfo processedBook={book} />,
            id: 'bookInfo',
        },
        {
            label: 'Reading Sessions',
            children: <SessionList userBookId={userBook?.id} />,
            id: 'sessions',
        }
    ];

    const coverUrl =
        (book.covers &&
            book.covers?.find((cover) => cover.size === Size.Large)?.url) ||
        book.covers?.find((cover) => cover.size === Size.Small)?.url;

    const goodreadsUrl =
        GOODREADS_BASE_URL +
        book.identifiers?.find((id) => id.source === Source.Goodreads)?.sourceId;
    const googleBookUrl =
        GOOGLE_BASE_URL +
        convertTitleToUnderscore(book.title) +
        '/' +
        book.identifiers?.find((id) => id.source === Source.Google)?.sourceId;

    return (
        <div className='flex justify-center'>
            <BookStatusModal />
            <div className='w-full max-w-[1064px] px-4 sm:px-6 lg:px-8'>
                <div className='my-8 grid grid-cols-1 gap-8 md:grid-cols-[1fr_212px] md:items-start'>
                    <section>
                        <div className='flex flex-col gap-4'>
                            <section className='flex flex-col gap-3'>
                                <div className='text-center md:text-start'>
                                    <AddToShelfButton
                                        bookTitle={book.title}
                                        targetBook={userBook}
                                    />
                                </div>
                                <section className='mx-auto block md:mx-0 md:hidden'>
                                    <Image
                                        width={160}
                                        height={277}
                                        src={coverUrl || DEFAULT_BOOKCOVER_PLACEHOLDER}
                                        className='max-w-none rounded-lg md:w-[stretch]'
                                        alt='book cover'
                                    />
                                </section>
                                <h1
                                    className={cn(
                                        dm_sefif_display.className,
                                        'line-clamp-2 text-center text-4xl/[3rem] md:text-start md:text-5xl/[4rem]'
                                    )}
                                >
                                    {book.title}
                                </h1>

                                <span className='block text-center text-lg text-gray-400 md:text-start'>
                                    by {formatAuthors(book.authors)} - {book.yearPublished}
                                </span>
                                <div className='flex justify-center md:justify-start'>
                                    <RatingInfo
                                        userBook={userBook}
                                        ratings={book?.ratings}
                                        urls={{ goodreads: goodreadsUrl, google: googleBookUrl }}
                                    />
                                </div>
                                {/* initialize the user book state on this page */}
                                <BookControls targetBook={userBook} book={book} />
                            </section>
                        </div>
                    </section>
                    <section className='mx-auto hidden md:mx-0 md:block'>
                        <Image
                            width={160}
                            height={277}
                            src={coverUrl || DEFAULT_BOOKCOVER_PLACEHOLDER}
                            className='max-w-none rounded-lg md:w-[stretch]'
                            alt='book cover'
                        />
                    </section>
                </div>
                <section className='max-w-[1064px]'>
                    <main className='flex min-h-screen flex-col'>
                        <UnderlinedTabs tabs={tabs} initialTabId='bookInfo' />
                    </main>
                </section>
            </div>
        </div>
    );
}
