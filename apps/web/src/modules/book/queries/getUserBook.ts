import { UserBookDocument, UserBookQuery } from '@/graphql/graphql';
import { getClient, httpLink, setAuthToken } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function getUserBook(bookId: string) {
    const user = await getCurrentUser();
    const client = getClient();
    client.setLink(setAuthToken(user?.accessToken as string).concat(httpLink));
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
