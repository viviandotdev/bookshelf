import { BookDocument, BookQuery } from '@/graphql/graphql';
import { setAuthToken, httpLink } from '@/lib/apollo';
import { getClient } from '@/lib/apollo-client';
import { getCurrentUser } from '@/lib/auth';

export async function getBookBySlug(slug: string) {
    const user = await getCurrentUser();
    const client = getClient();
    client.setLink(setAuthToken(user.accessToken).concat(httpLink));
    const { data } = await client.query<BookQuery>({
        query: BookDocument,
        variables: {
            where: {
                slug: slug,
            },
        },
    });
    if (data.book) {
        return data.book;
    } else {
        return null;
    }
}
