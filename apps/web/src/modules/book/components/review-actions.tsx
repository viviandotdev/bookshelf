"use client"
import { Icons } from '@/components/icons';
import { User } from '@/graphql/graphql';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useLikeReview } from '../mutations/use-like-review';

interface ReviewActionsProps {
    reviewId: string
    liked: boolean
    likeCount: number
    commentCount: number[]
    user: User
}

export const ReviewActions: React.FC<ReviewActionsProps> = ({ liked, likeCount, commentCount, reviewId, user }) => {
    const { likeReview, loading } = useLikeReview();
    const [likesCount, setLikesCount] = useState(likeCount ? likeCount : 0);
    const [isLiked, setIsLiked] = useState(liked);
    useEffect(() => {
        console.log(commentCount)
    }, [])
    const handleLikeClick = async (e: any) => {
        if (!loading) {
            e.stopPropagation();
            if (!isLiked) {
                setLikesCount(likesCount + 1);
                await likeReview(reviewId, true);
            } else {
                setLikesCount(likesCount - 1);
                await likeReview(reviewId, false);
            }
            setIsLiked(!isLiked);
        }

    };

    return (

        <div className="flex gap-4">
            <div
                onClick={handleLikeClick}
                className="flex gap-2 items-center font-bold mb-2 cursor-pointer"
            >
                <Icons.heart
                    className={`h-5 w-5 ${isLiked ? 'stroke-1 stroke-beige text-beige fill-current' : ''}`} // Use different color or style when liked
                />
                {isLiked ? 'Unlike' : 'Like'}
                <span className="font-light">{likesCount} likes</span>
            </div>
            <div
                className="flex gap-2 items-center  mb-2 cursor-pointer"
            >
                <Icons.comment className="h-5 w-5" />
                <Link href={`review/${reviewId}`} className="hover:text-gray-500" >{commentCount ? commentCount : 0} comments</Link>
            </div>
        </div>
    );
}
export default ReviewActions
