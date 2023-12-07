"use client"
import { Icons } from '@/components/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

interface ReviewActionsProps {
    reviewId: string
}

export const ReviewActions: React.FC<ReviewActionsProps> = ({ reviewId }) => {
    const [likeCount, setLikeCount] = useState(24);
    const [liked, setLiked] = useState(false);
    const [commentCount, setCommentCount] = useState(7);
    const router = useRouter();

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
                <Icons.heart className="h-5 w-5" />
                Like
                <span className="font-light">{likeCount} likes</span>
            </div>
            <div
                className="flex gap-2 items-center  mb-2 cursor-pointer"
            >
                <Icons.comment className="h-5 w-5" />
                <Link href={`review/${reviewId}`} className="hover:text-muted" >{commentCount} comments</Link>
                {/* <span className="font-light hover:font-bold">7 comments</span> */}
            </div>
        </div>
    );
}
export default ReviewActions
