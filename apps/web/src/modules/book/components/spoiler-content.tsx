'use client';
import React from 'react';

interface SpoilerContentProps {
  content: string;
}

export const SpoilerContent: React.FC<SpoilerContentProps> = ({ content }) => {
  const [showFullReview, setShowFullReview] = React.useState(false);

  return (
    <>
      {!showFullReview && (
        <div className='flex flex-grow flex-col gap-2 rounded-md bg-beige-100 p-8'>
          <span className='w-full flex-grow'>
            This review has been hidden because it may contain spoilers.
          </span>
          <div
            className='cursor-pointer font-bold'
            onClick={() => setShowFullReview(true)}
          >
            Show full review
          </div>
        </div>
      )}
      {showFullReview && <div>{content}</div>}
    </>
  );
};

export default SpoilerContent;
