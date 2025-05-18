import { UserBookDocument, UserBookQuery } from '@/graphql/graphql';
import { setAuthToken, httpLink } from '@/lib/apollo';
import { getClient } from '@/lib/apollo-client';
import { getCurrentUser } from '@/lib/auth';

export async function getUserBook(bookId: string) {
    const user = await getCurrentUser();
    const client = getClient();
    client.setLink(setAuthToken(user.accessToken).concat(httpLink));
    const { data } = await client.query<UserBookQuery>({
        query: UserBookDocument,
        variables: {
            where: {
                id: bookId,
            },
        },
    });
    if (data.userBook) {
        return data.userBook;
    } else {
        return null;
    }
}
