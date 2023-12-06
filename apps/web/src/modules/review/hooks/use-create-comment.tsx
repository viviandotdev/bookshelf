import { useCreateCommentMutation } from '@/graphql/graphql';
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
            });
            if (data) {
                toast({
                    title: 'Successfully created comment!',
                });
                return data.createComment
            } else {
                // console.log(error)
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
