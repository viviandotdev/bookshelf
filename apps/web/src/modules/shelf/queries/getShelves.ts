
import { librarySelects } from '@/config/books';
import {
    ShelvesQuery,
    ShelvesDocument,
    CountUserBooksQuery,
    CountUserBooksDocument,
    Shelf,
} from '@/graphql/graphql';
import { getApolloClient, setAuthToken, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function getShelves(): Promise<{
    shelves: Shelf[];
    library: Shelf[];
}> {
    const user = await getCurrentUser();
    const client = getApolloClient();
    client.setLink(setAuthToken(user.accessToken).concat(httpLink));

    const { data: shelvesData } = await client.query<ShelvesQuery>({
        query: ShelvesDocument,
    });


    const library = librarySelects.map((item, i): Shelf => {
        return {
            id: i.toString(),
            name: item.name,
            slug: '',
            _count: {
                userBooks:
                    item.name == 'All Books'
                        ? 0
                        : 0,
            },
        };
    });

    return {
        shelves: (shelvesData.shelves ? shelvesData.shelves : []) as Shelf[],
        library: library as Shelf[],
    };
}
