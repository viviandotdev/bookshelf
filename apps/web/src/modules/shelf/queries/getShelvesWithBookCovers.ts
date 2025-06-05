import {
    Shelf,
    ShelvesWithBookCoversDocument,
    ShelvesWithBookCoversQuery,
} from '@/graphql/graphql';
import { getClient, setAuthToken, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function getShelvesWithBookCovers(): Promise<{
    shelves: Shelf[];
}> {
    const user = await getCurrentUser();
    const client = getClient();
    client.setLink(setAuthToken(user?.accessToken as string).concat(httpLink));

    const { data: shelvesData } = await client.query<ShelvesWithBookCoversQuery>({
        query: ShelvesWithBookCoversDocument,
    });
    return {
        shelves: shelvesData.shelves ? (shelvesData.shelves as Shelf[]) : [],
    };
}
