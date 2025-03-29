"use client"

import { dm_sefif_display } from '@/lib/fonts';
import { cn, convertTitleToUnderscore, formatAuthors } from '@/lib/utils';
import { User } from '@/types/interfaces';
import React from 'react';
import Image from 'next/image';
import BookStatusModal from '@/components/modals/book-status-modal';
import { BookActions } from '../components/actions';
import UnderlinedTabs from '@/components/underlined-tabs';
import {
    DEFAULT_BOOKCOVER_PLACEHOLDER,
    GOODREADS_BASE_URL,
    GOOGLE_BASE_URL,
} from '@/lib/constants';
import { BookData } from '@/modules/bookshelves/types';
import { Size, Source, UserBook, useUserBookQuery } from '@/graphql/graphql';
import AddToShelfButton from '../components/actions/add-to-shelf-button';
import BookInfo from '../components/book-info';
import RatingInfo from '../components/rating-info';

interface BookTemplateProps {
    book: BookData;
    user: User;
    userBookId?: string;
}

export default function BookTemplate({ book, userBookId }: BookTemplateProps) {
    const { data: userBookData, loading, error } = useUserBookQuery({
        variables: {
            where: {
                id: userBookId
            }
        },
        skip: !userBookId,
    });

    const userBook = userBookData?.userBook as UserBook;


    if (error) {
        return <>
            <div>
                {error.message}
            </div>
        </>
    }


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
                                    {
                                        userBook && !loading &&
                                        <AddToShelfButton
                                            bookTitle={book.title}
                                            targetBook={userBook}
                                        />
                                    }
                                </div>
                                {/* Mobile View */}
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
                                        targetBook={userBook}
                                        ratings={book?.ratings}
                                        urls={{ goodreads: goodreadsUrl, google: googleBookUrl }}
                                    />
                                </div>
                                <BookActions targetBook={userBook} book={book} />
                            </section>
                        </div>
                    </section>
                    {/* Desktop View */}
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
                        <UnderlinedTabs tabs={
                            [
                                {
                                    label: 'Book Info',
                                    children: <BookInfo processedBook={book} />,
                                    id: 'bookInfo',
                                }
                            ]
                        } initialTabId='bookInfo' />
                    </main>
                </section>
            </div>
        </div>
    );
}
