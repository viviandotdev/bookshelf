'use server';
import {
    GetUserBooksDocument,
    GetUserBooksQuery,
    UserBook,
    UserBookOrderByWithRelationInput,
    UserBookWhereInput,
} from '@/graphql/graphql';
import { setAuthToken, httpLink } from '@/lib/apollo';
import { getClient } from '@/lib/apollo-client';
import { getCurrentUser } from '@/lib/auth';

export async function getUserBooks(
    where: UserBookWhereInput,
    limit?: number,
    orderBy?: UserBookOrderByWithRelationInput
) {
    const user = await getCurrentUser();
    const client = getClient();
    client.setLink(setAuthToken(user.accessToken).concat(httpLink));

    const { data, error, loading } = await client.query<GetUserBooksQuery>({
        query: GetUserBooksDocument,
        variables: {
            where,
            limit,
            orderBy,
        },
    });

    if (!data && !loading) {
        console.log('Error fetching user books in getUserBooks.ts', error);
        return [];
    }
    return data.getUserBooks.userBooks
        ? (data.getUserBooks.userBooks as UserBook[])
        : [];
}
