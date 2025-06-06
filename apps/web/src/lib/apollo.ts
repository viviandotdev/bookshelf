import { createHttpLink, from } from "@apollo/client";
import {
    registerApolloClient,
    ApolloClient,
    InMemoryCache,
} from "@apollo/client-integration-nextjs";
import { setContext } from "@apollo/client/link/context";

export const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
});


export const setAuthToken = (token: string) =>
    setContext((_, { headers }) => ({
        headers: {
            ...headers,
            authorization: `Bearer ${token}`,
        },
    }));


export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: from([httpLink]),
        // link: new HttpLink({
        //     // this needs to be an absolute url, as relative urls cannot be used in SSR
        //     uri: "http://example.com/api/graphql",
        //     fetchOptions: {
        //         // you can pass additional options that should be passed to `fetch` here,
        //         // e.g. Next.js-related `fetch` options regarding caching and revalidation
        //         // see https://nextjs.org/docs/app/api-reference/functions/fetch#fetchurl-options
        //     },
        // }),
    });
});
