import { Icons } from '@/components/icons';
import React from 'react'

interface ReviewActionsProps {
    reviewId: string
}

export const ReviewActions: React.FC<ReviewActionsProps> = ({ reviewId }) => {
    return (

        <div className="flex gap-4">
            <div
                className="flex gap-2 items-center font-bold mb-2 cursor-pointer"
            >
                <Icons.heart className="h-5 w-5" />
                Like
            </div>
            <div
                className="flex gap-2 items-center font-bold mb-2 cursor-pointer"
            >
                <Icons.comment className="h-5 w-5" />
                Comment
            </div>
        </div>
    );
}
export default ReviewActions
