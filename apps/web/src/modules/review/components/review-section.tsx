'use client'
import ActionsPanel from '@/modules/book/components/actions-panel';
import React from 'react'
import ReviewInfo from './review-info';
import { Book, Shelf, User } from '@/graphql/graphql';
import { useLoadReview } from '../mutations/use-load-review';

interface ReviewSectionProps {
    reviewId: string
    book: Book
    shelves: Shelf[]
    user: User
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({ reviewId, user, book, shelves }) => {
    const { review, loading, error } = useLoadReview({ id: reviewId })
    if (loading) return <div>Loading...</div>
    if (!review) {
        return <div>Something went wrong</div>
    }
    const reviewUser = review.userBook?.user
    return (
        <>
            <section className="flex flex-col gap-2 col-span-4 pr-4">
                <ReviewInfo review={review} />
            </section>
            <section className="col-span-2">
                <ActionsPanel book={book} shelves={shelves} review={reviewData} reviewed={reviewUser.id == user.id} reviewId={reviewId} />
            </section>
        </>
    );
}
export default ReviewSection
