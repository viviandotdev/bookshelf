'use client';
import { BookRating } from '@/components/book-rating';
import { Icons } from '@/components/icons';
import { Rating, RatingCreateInput, Source, UserBook } from '@/graphql/graphql';
import useUserBookStore from '@/stores/use-user-book-store';
import Link from 'next/link';
import React, { useEffect } from 'react';

interface RatingInfoProps {
    ratings: RatingCreateInput[] | Rating[];
    urls?: {
        goodreads?: string;
        google?: string;
    };
    userBook?: UserBook;
    size?: 'sm' | 'lg';
}

const sizeClasses = {
    sm: {
        gap: 'gap-2',
        iconSize: 'h-2 w-2',
        wrapperSize: 'h-4 w-4',
        padding: 'pl-1.5',
        textSize: 'text-[11px]',
    },
    lg: {
        gap: 'gap-4',
        iconSize: 'h-4 w-4',
        wrapperSize: 'h-7 w-7',
        padding: 'pl-2.5',
        textSize: 'text-base',
    },
};

export const RatingInfo: React.FC<RatingInfoProps> = ({
    ratings,
    urls,
    userBook,
    size = 'lg',
}) => {
    const { setUserBook, isInLibrary, userBookId, rating } = useUserBookStore();

    const setRating = (rating: number | undefined) => {
        setUserBook({ rating });
    };

    const classes = sizeClasses[size];
    const goodreadsRating = ratings?.find(
        (rating) => rating.source === Source.Goodreads
    );
    const googleRating = ratings?.find(
        (rating) => rating.source === Source.Google
    );
    useEffect(() => {
        if (userBook) {
            setUserBook({
                rating: userBook?.rating || 0,
            });
        }
    }, [userBook, setUserBook]);

    return (
        <div className={`flex ${classes.gap}`}>
            {isInLibrary && (
                <BookRating
                    size={size}
                    rating={rating}
                    setRating={setRating}
                    userBookId={userBookId}
                />
            )}

            {goodreadsRating &&
                goodreadsRating.score !== 0 &&
                goodreadsRating.score !== undefined && (
                    <RatingIconWrapper
                        href={urls?.goodreads}
                        rating={goodreadsRating.score}
                        size={size}
                    >
                        <Icons.goodReads className={classes.iconSize} />
                    </RatingIconWrapper>
                )}
            {googleRating &&
                googleRating.score !== 0 &&
                googleRating.score !== undefined && (
                    <RatingIconWrapper
                        rating={googleRating.score}
                        href={urls?.google}
                        size={size}
                    >
                        <Icons.googleBooks className={classes.iconSize} />
                    </RatingIconWrapper>
                )}
        </div>
    );
};

const RatingIconWrapper = ({
    children,
    rating,
    href,
    size,
}: {
    children: React.ReactNode;
    rating: number;
    href?: string;
    size: 'sm' | 'lg';
}) => {
    const classes = sizeClasses[size];

    const WrapperComponent = href ? Link : 'div';

    return (
        <div
            {...(href && { href, target: '_blank' })}
            className='flex items-center'
        >
            <div
                className={`inline-flex items-center justify-center rounded-full bg-gray-100 ${classes.wrapperSize}`}
            >
                {children}
            </div>
            <div
                className={`inline-flex flex-col items-start justify-start ${classes.padding}`}
            >
                <div className='flex flex-col items-start justify-start'>
                    <div
                        className={`${classes.textSize} font-light leading-tight text-gray-700`}
                    >
                        {rating}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatingInfo;
