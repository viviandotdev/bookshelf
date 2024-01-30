"use client"
import { Review } from '@/graphql/graphql';
import { formatDate } from '@/lib/utils';
import { UserAvatar } from '@/modules/layout/components/user-avatar';
import { Dot } from 'lucide-react';
import React from 'react'

interface ReviewInfoProps {
    review: Review
}

export const ReviewInfo: React.FC<ReviewInfoProps> = ({ review }) => {
    const rating = review.userBook?.rating ? review.userBook?.rating : 0
    const user = review.userBook?.user
    return (
        <div>

            <div className=" text-base font-semibold">
                <span className="flex items-center">
                    <UserAvatar
                        username={user?.username}
                        size={"default"}
                        className="h-8 w-8"
                    />
                    <span className='ml-4 mx-2'>Reviewed by</span>
                    <span className="font-bold  "> {review.userBook?.user?.username}</span>
                    {rating > 0 && <Dot />}
                    {Rating(rating)}

                </span>
            </div>

            <div className="text-sm overflow-hidden max-h-64 mt-2 gap-2">
                <div className="font-light text-base">
                    Reviewed on {formatDate(review.createdAt)}
                </div>
                <div
                    className={`leading-normal mt-2`}
                >
                    {review.content}
                </div>
            </div>

        </div>
    );
}

const Rating = (value: number) => {
    const svgElements = [];
    for (let i = 0; i < value; i++) {
        svgElements.push(
            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path
                    fill="#F4CC49"
                    stroke="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
            </svg>
        );
    }

    return (
        <div className="flex gap-0.5">
            {svgElements}
        </div>
    );
};
export default ReviewInfo
