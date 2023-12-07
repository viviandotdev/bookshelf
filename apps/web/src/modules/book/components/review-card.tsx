
import React from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Review, UserBook } from '@/graphql/graphql';
import { formatDate } from '@/lib/utils';
import { UserAvatar } from '@/modules/layout/components/user-avatar';
import Link from 'next/link';
import Rating from '@/components/rating';
import { Dot } from 'lucide-react';
import ReviewActions from './review-actions';

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
    const { id, content, likes, comments, userBook, createdAt, spoilers } = review;
    const { user, rating, status } = getUserBookDetails(userBook);


    const ReviewContent = () => {
        if (spoilers) {
            return (
                <div>
                    <span>This review has been hidden because it may contain spoilers.</span>
                    <span
                        className="font-bold cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();

                            console.log('show full review');
                        }}
                    >
                        Show full review
                    </span>
                </div>
            );
        }
        return <div>{content || 'Default content if none provided'}</div>;
    };

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
                                <Link href={`review/${id}`} className="hover:text-muted" > Reviewed by</Link>
                                <div className="mx-2 font-bold">{user?.username}</div>
                                {
                                    rating ? (
                                        <Rating value={4} /> // Render Rating component with value 4 if rating exists
                                    ) : (
                                        status || '' // Render status if no rating is available, or an empty string if status is also not available
                                    )
                                }

                            </div>
                            <div>{formatDate(createdAt)}</div>
                        </div>
                        <div className="flex gap-2">
                            <ReviewContent />
                        </div>
                    </div>
                    <ReviewActions reviewId={id} likes={likes} comments={comments} user={user} />
                </div>
            </div>
        </div>
    );
};

;

export default ReviewCard;
