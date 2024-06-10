import {
  useUpdateUserBookMutation,
  UserBookUpdateInput,
} from '@/graphql/graphql';
import { gql } from '@apollo/client';
import { UserBook } from '@prisma/client';

interface UseUpdateUserBookOptions {
  onCompleted?: (data: UserBook) => void;
  onError?: (error: any) => void;
}

export const useUpdateUserBook = (options: UseUpdateUserBookOptions = {}) => {
  const { onCompleted, onError } = options;

  const [UpdateUserBook] = useUpdateUserBookMutation({
    onCompleted: (data) => {
      onCompleted?.(data.updateUserBook);
    },
    onError: (error) => {
      onError?.(error);
    },
  });

  const updateUserBook = async (
    bookId: string,
    updateInput: UserBookUpdateInput
  ) => {
    await UpdateUserBook({
      variables: {
        data: updateInput,
        where: {
          id: bookId,
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
          },
        });
      },
    });
  };

  return {
    updateUserBook,
  };
};
