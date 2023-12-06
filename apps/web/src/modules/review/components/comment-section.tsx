"use client"
import React, { useState } from 'react'
import CommentCard from './comment-card';
import CommentForm from './comment-form';
import { NetworkStatus } from '@apollo/client';
import useLoadComments from '../hooks/use-load-comments';
interface CommentSectionProps {
    reviewId: string
    comments: Comment[]
}

export const CommentSection: React.FC<CommentSectionProps> = ({ reviewId }) => {
    const { loadComments, commentsData, networkStatus } = useLoadComments();
    ;
    React.useEffect(() => {
        const loadData = async () => {
            await loadComments({
                variables: {
                    where: {
                        id: reviewId
                    }
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
            <CommentForm reviewId={reviewId} />
            <div className="flex flex-col gap-3">

                {commentsData?.comments && commentsData?.comments.length > 0 && commentsData?.comments.map((comment) => {
                    return (
                        <CommentCard
                            key={comment.id}
                            content={comment.content || ""}
                            createdAt={comment.createdAt}
                            user={comment.user}
                        />
                    );

                })}
            </div>

        </>
    );
}
export default CommentSection
