import { useLikeReviewMutation } from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

export const useLikeReview = () => {
  const [likeReviewMutation] = useLikeReviewMutation();
  const [loading, setLoading] = useState(false);

  const likeReview = async (reviewId: string, value: boolean) => {
    setLoading(true); // Set loading state to true when starting the mutation
    try {
      const { data, errors } = await likeReviewMutation({
        variables: {
          where: {
            id: reviewId,
          },
          value,
        },
        errorPolicy: 'all',
      });

      if (errors) {
        return null;
      }

      if (data && !errors) {
        toast({
          title: 'Liked Review',
        });
        return data.likeReview;
      }
      return null;
    } catch (error) {
      console.error('Error liking review:', error);
      return null;
    } finally {
      setLoading(false); // Set loading state to false when the mutation finishes (success or failure)
    }
  };

  return {
    likeReview,
    loading, // Include the loading state in the returned object
  };
};
