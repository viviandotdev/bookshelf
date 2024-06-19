import { toast } from '@/hooks/use-toast';
import { useRemoveUserBookMutation } from '@/graphql/graphql';

export const useRemoveUserBook = () => {
  const [RemoveUserBook] = useRemoveUserBookMutation();

  const removeUserBook = async (id: string) => {
    const { data, errors } = await RemoveUserBook({
      variables: { where: { id } },
      // update: (cache, data) => {
      //     cache.evict({ id: `Book:${bookId}` });
      // },
      errorPolicy: 'all',
    });

    if (errors) {
      toast({
        title: errors[0].message,
        variant: 'destructive',
      });
    }

    if (data && !errors) {
      toast({ title: 'Successfully deleted book' });
      return data.removeUserBook;
    }
    return null;
  };

  return { removeUserBook };
};
