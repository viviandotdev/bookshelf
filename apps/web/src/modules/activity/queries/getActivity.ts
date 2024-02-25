import {
  AuditLog,
  GetAuditLogsDocument,
  GetAuditLogsQuery,
  UserBookWhereInput,
} from '@/graphql/graphql';
import { getApolloClient, setAuthToken, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function getActivity(where: UserBookWhereInput) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));

  const { data } = await client.query<GetAuditLogsQuery>({
    query: GetAuditLogsDocument,
    variables: {
      where,
    },
  });

  return data.auditLogs ? (data.auditLogs as AuditLog[]) : [];
}
