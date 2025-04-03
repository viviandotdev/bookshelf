import {
  useUpdateUserBookMutation,
  UserBookUpdateInput,
  UserBook,
} from '@/graphql/graphql';
import { gql, MutationOptions } from '@apollo/client';

interface UseUpdateUserBookOptions {
  onCompleted?: (data: UserBook) => void;
  onError?: (error: any) => void;
}

export const useUpdateUserBook = (options: UseUpdateUserBookOptions = {}) => {
  const { onCompleted, onError } = options;

  const [UpdateUserBook] = useUpdateUserBookMutation({
    onCompleted: (data) => {
      onCompleted?.(data.updateUserBook as any);
    },
    onError: (error) => {
      onError?.(error);
    },
  });

  const updateUserBook = async (
    userBookId: string,
    updateInput: UserBookUpdateInput,
    mutationOptions?: Partial<MutationOptions>
  ) => {
    await UpdateUserBook({
      variables: {
        data: updateInput,
        where: {
          id: userBookId,
        },
      },
      update: (cache, { data }) => {
        cache.writeFragment({
          id: `UserBook:${data?.updateUserBook.id}`,
          fragment: gql`
            fragment MyUserBook on UserBook {
              status
            }
          `,
          data: {
            status: data?.updateUserBook.status,
            // rating: data?.updateUserBook.rating,
          },
        });
      },
      ...mutationOptions,
    });
  };

  return {
    updateUserBook,
  };
};
