import { BookCountsByUserIdDocument } from '@/graphql/graphql';
import { getClient } from '@/lib/apollo';

export const bookCountsByUserId = async (userId: string) => {
    const client = getClient();
    const { data } = await client.query({
        query: BookCountsByUserIdDocument,
        variables: { userId },
    });

    return data.bookCountsByUserId;
};
