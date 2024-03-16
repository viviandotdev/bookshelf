'use server';
import {
  Action,
  GetAuditLogsDocument,
  GetAuditLogsQuery,
  UserBookWhereInput,
} from '@/graphql/graphql';
import { getApolloClient, setAuthToken, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function getActivity(
  where: UserBookWhereInput,
  offset: number,
  limit: number,
  action?: Action
) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));

  const { data } = await client.query<GetAuditLogsQuery>({
    query: GetAuditLogsDocument,
    variables: {
      where: {
        ...where,
      },
      action: action,
      offset,
      limit,
    },
  });

  return data.auditLogs;
}
