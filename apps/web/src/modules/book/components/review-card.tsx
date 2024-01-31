
import React from 'react';
import { Review, UserBook } from '@/graphql/graphql';
import { formatDate } from '@/lib/utils';
import { UserAvatar } from '@/modules/layout/components/user-avatar';
import Link from 'next/link';
import Rating from '@/components/rating';
import ReviewActions from './review-actions';
import SpoilerContent from './spoiler-content';

interface ReviewCardProps {
    review: Review;
}

interface UserBookDetails {
    user?: UserBook['user'];
    rating?: UserBook['rating'];
    status?: UserBook['status'];
}

const getUserBookDetails = (userBook: UserBook | null | undefined): UserBookDetails => {
    return {
        user: userBook?.user,
        rating: userBook?.rating,
        status: userBook?.status,
    };
};

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
    const { id, content, likeCount, liked, commentCount, userBook, createdAt, spoilers } = review;
    const { user, rating, status } = getUserBookDetails(userBook);


    return (
        <div >
            <div className="flex gap-12 mt-4">
                <div className="flex flex-col gap-2">
                    <UserAvatar
                        user={{ name: user?.username || null }}
                        size="default"
                        className="h-16 w-16"
                    />
                </div>

                <div className="flex flex-col gap-4 w-full flex-grow space-y-4">
                    <div className="flex flex-col flex-grow gap-3">
                        <div className="flex justify-between gap-3">
                            <div className="flex items-center">
                                <Link href={`review/${id}`} className="hover:text-gray-500" > Reviewed by</Link>
                                <div className="mx-2 font-bold">{user?.username}</div>
                                {
                                    rating ? (
                                        <Rating value={rating} /> // Render Rating component with value 4 if rating exists
                                    ) : (
                                        status || '' // Render status if no rating is available, or an empty string if status is also not available
                                    )
                                }

                            </div>
                            <div>{formatDate(createdAt)}</div>
                        </div>
                        <div className="flex gap-2 justify-between flex-grow w-full">
                            {
                                spoilers ? <SpoilerContent content={content} /> : <div>{content}</div>
                            }
                        </div>
                    </div>
                    <ReviewActions reviewId={id} liked={liked} likeCount={likeCount} commentCount={commentCount} user={user} />
                </div>
            </div>
        </div>
    );
};

;

export default ReviewCard;
