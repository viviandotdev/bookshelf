import { CommentsDocument, CommentsQuery, useCreateCommentMutation } from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

// This is a custom hook named useCreateBook
const useCreateComment = () => {
    const [loading, setLoading] = useState(false);
    const [CreateComment] = useCreateCommentMutation();
    const createComment = async (comment: string, reviewId: string) => {
        setLoading(true);
        try {
            const { data } = await CreateComment({
                variables: {
                    data: {
                        content: comment
                    },
                    where: {
                        id: reviewId
                    }
                },
                update: (cache, { data: { createComment } }) => {
                    const existingComments = cache.readQuery({
                        query: CommentsDocument,
                        variables: { where: { id: reviewId } },
                    }) as CommentsQuery | null;

                    if (existingComments) {
                        cache.writeQuery({
                            query: CommentsDocument,
                            variables: {
                                where: {
                                    id: reviewId
                                }
                            },
                            data: {
                                comments: [createComment, ...existingComments.comments]
                                // Assuming createComment contains the newly created comment data
                            }

                        });
                    }

                    console.log(createComment)
                }

            });
            if (data) {
                toast({
                    title: 'Successfully created comment!',
                });
                return data.createComment
            } else {
                console.log(error)
                toast({
                    title: 'Error creating comment!',
                });
                return null
            }
        } catch (error) {
            // Handle error appropriately, such as logging or displaying an error message
            console.log(error)
            toast({
                title: 'Error creating comment!',
            });
            return null
        } finally {
            setLoading(false);
        }
    };

    return { loading, createComment };
};

export default useCreateComment;
