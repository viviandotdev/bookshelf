'use client';
import React from 'react';
import CommentCard from './comment-card';
import CommentForm from './comment-form';
import { NetworkStatus } from '@apollo/client';
import useLoadComments from '../mutations/use-load-comments';
interface CommentSectionProps {
  reviewId: string;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ reviewId }) => {
  const { loadComments, commentsData, networkStatus } = useLoadComments();
  React.useEffect(() => {
    const loadData = async () => {
      await loadComments({
        variables: {
          where: {
            id: reviewId,
          },
        },
      });
    };

    loadData();
  }, [loadComments, reviewId]);

  if (networkStatus === NetworkStatus.loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className='flex justify-between'>
        <div className='text-sm text-beige'>
          122 COMMENTS Showing 1-20 of 20
        </div>
        {/* <div className="text-sm text-beige">MORE</div> */}
      </div>
      <hr className='border-t-1 border-beige' />
      <CommentForm reviewId={reviewId} />
      <div className='flex flex-col gap-3'>
        {commentsData?.comments &&
          commentsData?.comments.length > 0 &&
          commentsData?.comments.map((comment) => {
            return (
              <CommentCard
                key={comment.id}
                content={comment.content || ''}
                createdAt={comment.createdAt}
                user={comment.user}
              />
            );
          })}
      </div>
    </>
  );
};
export default CommentSection;
