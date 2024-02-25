import { useCommentsLazyQuery } from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';

const useLoadComments = () => {
  const [loadComments, { data: commentsData, networkStatus }] =
    useCommentsLazyQuery({
      onError: (error) => {
        toast({
          title: error.message,
          variant: 'destructive',
        });
      },
      onCompleted: (data) => {
        if (data && data.comments && data.comments.length === 0) {
          console.log('no comments loaded');
        }
      },
      errorPolicy: 'all',
    });

  return {
    loadComments,
    commentsData,
    networkStatus,
  };
};

export default useLoadComments;
