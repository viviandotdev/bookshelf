import {
    Shelf,
    ShelvesWithBookCoversDocument,
    ShelvesWithBookCoversQuery,
} from '@/graphql/graphql';
import { setAuthToken, httpLink } from '@/lib/apollo';
import { getClient } from '@/lib/apollo-client';
import { getCurrentUser } from '@/lib/auth';

export async function getShelvesWithBookCovers(): Promise<{
    shelves: Shelf[];
}> {
    const user = await getCurrentUser();
    const client = getClient();
    client.setLink(setAuthToken(user.accessToken).concat(httpLink));

    const { data: shelvesData } = await client.query<ShelvesWithBookCoversQuery>({
        query: ShelvesWithBookCoversDocument,
    });
    return {
        shelves: shelvesData.shelves ? (shelvesData.shelves as Shelf[]) : [],
    };
}
