"use client"
import React from 'react';

interface SpoilerContentProps {
    content: string;
}

export const SpoilerContent: React.FC<SpoilerContentProps> = ({ content, }) => {
    const [showFullReview, setShowFullReview] = React.useState(false);

    return (
        <>
            {!showFullReview && (
                <div className="flex flex-col gap-2 p-8 bg-secondary rounded-md flex-grow">
                    <span className='flex-grow w-full'>This review has been hidden because it may contain spoilers.</span>
                    <div
                        className="font-bold cursor-pointer"
                        onClick={() => setShowFullReview(true)}
                    >
                        Show full review
                    </div>
                </div>

            )}
            {showFullReview && (
                <div>{content}</div>
            )}
        </>
    );
};

export default SpoilerContent;
