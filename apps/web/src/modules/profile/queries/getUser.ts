import {
    User,
    UserDocument,
    UserQuery,
    UserWhereUniqueInput,
} from '@/graphql/graphql';
import { getClient, httpLink, setAuthToken } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function getUser(where: UserWhereUniqueInput) {
    const user = await getCurrentUser();
    const client = getClient();
    client.setLink(setAuthToken(user?.accessToken as string).concat(httpLink));

    const { data } = await client.query<UserQuery>({
        query: UserDocument,
        variables: {
            where: {
                username: where.username,
            },
        },
    });

    return data.user ? (data.user as User) : null;
}
