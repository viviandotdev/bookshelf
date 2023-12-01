import { Icons } from '@/components/icons';
import { UserAvatar } from '@/modules/layout/components/user-avatar';
import React from 'react';

interface ReviewProps {
    name: string;
    rating: number;
    comments: number;
    content: string;
    likes: number;
}

export const Review: React.FC<ReviewProps> = ({ name, rating, comments, content, likes }) => {
    return (
        <div className="flex gap-8 mt-4">
            <div className="">
                <UserAvatar
                    user={{ name: name || null }}
                    size={"default"}
                    className="h-12 w-12"
                />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                    <div className="flex gap-1">Review by
                        <div className="font-bold"> {name}</div>
                    </div>
                    <div className="flex items-center">
                        {Rating(rating)}
                    </div>
                    <div className="flex gap-2 items-center">
                        <Icons.comment className="h-4 w-4" />
                        {comments}
                    </div>
                </div>
                <div>
                    {content}
                </div>
                <div className="flex gap-2">
                    <div className="flex gap-2 items-center font-bold">
                        <Icons.heart className="h-5 w-5" />
                        Like review
                    </div>
                    <div>
                        {likes} likes
                    </div>
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

export default Review;
