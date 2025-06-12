import {
    useUpdateUserBookMutation,
    UserBookUpdateInput,
    UserBook,
    UpdateUserBookMutationVariables,
    UpdateUserBookMutation,
} from '@/graphql/graphql';
import { MutationOptions } from '@apollo/client';

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
        mutationOptions?: Partial<MutationOptions<UpdateUserBookMutation, UpdateUserBookMutationVariables>>
    ) => {
        await UpdateUserBook({
            variables: {
                data: updateInput,
                where: {
                    id: userBookId,
                },
            },

            update: (cache, { data }) => {
                if (data?.updateUserBook) {
                    // Update the cache for the specific book
                    const cacheId = cache.identify({
                        __typename: 'UserBook',
                        id: userBookId,
                    });

                    if (cacheId) {
                        cache.modify({
                            id: cacheId,
                            fields: {
                                status: () => data.updateUserBook.status,
                            },
                        });
                    }
                }
            },
            ...mutationOptions,
        });
    };

    return {
        updateUserBook,
    };
};
