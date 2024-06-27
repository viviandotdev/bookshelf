import {
  AddIdentifierToBookDocument,
  AddIdentifierToBookMutation,
  IdentifierCreateInput,
} from '@/graphql/graphql';
import { getApolloClient, setAuthToken, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';
import { where } from 'rambda';

export async function addIdentifierToBook(
  bookId: string,
  identifier: IdentifierCreateInput
) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));
  const { data } = await client.mutate<AddIdentifierToBookMutation>({
    mutation: AddIdentifierToBookDocument,
    variables: {
      where: {
        id: bookId,
      },
      identifier: {
        source: identifier.source,
        sourceId: identifier.sourceId,
      },
    },
  });
  if (data?.addIdentifierToBook) {
    return data.addIdentifierToBook;
  } else {
    return null;
  }
}
