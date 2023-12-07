"use client"
import { Icons } from '@/components/icons';
import { LikedReview, User } from '@/graphql/graphql';
import Link from 'next/link';
import React, { useState } from 'react'

interface ReviewActionsProps {
    reviewId: string
    likes: LikedReview[]
    comments: Comment[]
    user: User
}

export const ReviewActions: React.FC<ReviewActionsProps> = ({ likes, comments, reviewId, user }) => {

    const [likeCount, setLikeCount] = useState(likes ? likes.length : 0);
    const isLiked = likes?.some((like) => like.user?.id === user.id);
    const [liked, setLiked] = useState(isLiked);

    const handleLikeClick = (e: any) => {
        e.stopPropagation();
        if (!liked) {
            setLikeCount(likeCount + 1);
        } else {
            setLikeCount(likeCount - 1);
        }
        setLiked(!liked);

    };

    return (

        <div className="flex gap-4">
            <div
                onClick={handleLikeClick}
                className="flex gap-2 items-center font-bold mb-2 cursor-pointer"
            >
                <Icons.heart
                    className={`h-5 w-5 ${liked ? 'stroke-1 stroke-primary text-primary fill-current' : ''}`} // Use different color or style when liked
                />
                Like
                <span className="font-light">{likeCount} likes</span>
            </div>
            <div
                className="flex gap-2 items-center  mb-2 cursor-pointer"
            >
                <Icons.comment className="h-5 w-5" />
                <Link href={`review/${reviewId}`} className="hover:text-muted" >{comments ? comments.length : 0} comments</Link>
                {/* <span className="font-light hover:font-bold">7 comments</span> */}
            </div>
        </div>
    );
}
export default ReviewActions
