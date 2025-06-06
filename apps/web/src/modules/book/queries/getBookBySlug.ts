import { BookDocument, BookQuery } from '@/graphql/graphql';
import { getClient, httpLink, setAuthToken } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function getBookBySlug(slug: string) {
    const user = await getCurrentUser();
    const client = getClient();
    client.setLink(setAuthToken(user?.accessToken as string).concat(httpLink));
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
