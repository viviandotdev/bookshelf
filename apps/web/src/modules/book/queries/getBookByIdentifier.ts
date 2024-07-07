import {
  FindBookByIdentifierDocument,
  FindBookByIdentifierQuery,
  IdentifierCreateInput,
} from '@/graphql/graphql';
import { getApolloClient, setAuthToken, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function getBookByIdentifier(identifier: IdentifierCreateInput) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));
  const { data } = await client.query<FindBookByIdentifierQuery>({
    query: FindBookByIdentifierDocument,
    variables: {
      identifier: {
        source: identifier.source,
        sourceId: identifier.sourceId,
      },
    },
  });
  if (data.findBookByIdentifier) {
    return data.findBookByIdentifier;
  } else {
    return null;
  }
}
