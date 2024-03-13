import React from 'react';
import { getActivity } from '@/modules/activity/queries/getActivity';
import AcitvityTemplate from '@/modules/activity/templates';
import { getCurrentUser } from '@/lib/auth';
interface ActivityPageProps {}

export default async function ActivityPage({}: ActivityPageProps) {
  const auditLogs = await getActivity({});
  const user = await getCurrentUser();
  console.log(auditLogs);
  return (
    <AcitvityTemplate
      auditLogs={auditLogs}
      title={'Activity for ' + user?.username}
    />
  );
}
