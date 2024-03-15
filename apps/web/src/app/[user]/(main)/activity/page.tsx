import React from 'react';
import { getActivity } from '@/modules/activity/queries/getActivity';
import AcitvityTemplate from '@/modules/activity/templates';
import { getCurrentUser } from '@/lib/auth';
interface ActivityPageProps {

    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ActivityPage({ searchParams }: ActivityPageProps) {
    let auditLogs = await getActivity({

    });

    if (searchParams.filter) {
        auditLogs = auditLogs.filter((log) => log.action === searchParams.filter);
    }

    //   do the filtering on the frontend
    const user = await getCurrentUser();

    return (
        <AcitvityTemplate
            auditLogs={auditLogs}
            title={'Activity for ' + user?.username}
        />
    );
}
