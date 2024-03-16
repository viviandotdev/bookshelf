import React from 'react';
import { getActivity } from '@/modules/activity/queries/getActivity';
import AcitvityTemplate from '@/modules/activity/templates';
import { getCurrentUser } from '@/lib/auth';
import {
    Action,
} from '@/graphql/graphql';
interface ActivityPageProps {

    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ActivityPage({ searchParams }: ActivityPageProps) {
    const action = searchParams.filter as Action
    let { activities } = await getActivity({
    }, 0, 10, action);



    const user = await getCurrentUser();

    return (
        <AcitvityTemplate
            auditLogs={activities}
            title={'Activity for ' + user?.username}
        />
    );
}
