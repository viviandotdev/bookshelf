import { ReviewWhereUniqueInput, useBookReviewQuery } from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';

export const useLoadReview = (where: ReviewWhereUniqueInput) => {
  const { data, loading, error } = useBookReviewQuery({
    variables: {
      where: where,
    },
    onError: (error) => {
      toast({
        title: error.message,
        variant: 'destructive',
      });
    },
    errorPolicy: 'all',
  });

  return {
    review: data ? data.bookReview : null,
    loading,
    error,
  };
};
