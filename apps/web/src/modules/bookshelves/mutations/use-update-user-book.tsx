import {
  useUpdateUserBookMutation,
  UserBookUpdateInput,
} from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';
import { gql } from '@apollo/client';

export const useUpdateUserBook = () => {
  const [UpdateUserBook] = useUpdateUserBookMutation();
  const updateUserBook = async (
    bookId: string,
    updateInput: UserBookUpdateInput
  ) => {
    const { data, errors } = await UpdateUserBook({
      variables: {
        data: updateInput,
        where: {
          id: (bookId),
        },
      },
      update: (cache, { data }) => {
        // update the status of the book
        cache.writeFragment({
          id: `UserBook:${data?.updateUserBook.id}`,
          fragment: gql`
            fragment MyUserBook on UserBook {
              status
            }
          `,
          data: {
            status: data?.updateUserBook.status,
          },
        });
      },

      errorPolicy: 'all',
    });

    if (errors) {
      console.log(errors);
      toast({
        title: 'Error updating book',
        variant: 'destructive',
      });
    }

    if (data && !errors) {
      return data.updateUserBook;
    }
    return null;
  };

  return {
    updateUserBook,
  };
};
