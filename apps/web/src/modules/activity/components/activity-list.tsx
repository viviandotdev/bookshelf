"use client"
import React, { useEffect, useState, useTransition } from 'react'
import { ActivityItem } from './activity-item';
import { Action, AuditLog } from '@/graphql/graphql';
import { getActivity } from '../queries/getActivity';
import { useInView } from 'react-intersection-observer'
import { useSearchParams } from 'next/navigation';

interface ActivityListProps {
    initialActivities: AuditLog[]
}
const NUMBER_TO_FETCH = 10
export const ActivityList: React.FC<ActivityListProps> = ({ initialActivities, }) => {
    const [offset, setOffset] = useState(NUMBER_TO_FETCH)
    const [logs, setLogs] = useState<AuditLog[]>(initialActivities)
    const [hasMoreActivity, setHasMoreActivity] = useState(true)
    const searchParams = useSearchParams();
    const action = searchParams.get("filter");
    const [isPending, startTransition] = useTransition();
    const { ref, inView } = useInView()
    const loadMore = async () => {
        // implement has more
        if (isPending || !hasMoreActivity) { return; }

        let { activities, hasMore } = await getActivity({}, offset, NUMBER_TO_FETCH, action as Action);

        // Create a new Set to track unique IDs
        const uniqueIds = new Set(logs.map(log => log.id));

        // Filter out activities with duplicate IDs
        const newActivities = activities!.filter(activity => !uniqueIds.has(activity.id)) as AuditLog[]
        startTransition(() => {
            // Append non-duplicate activities to the logs
            setLogs([...logs, ...newActivities]);
            setHasMoreActivity(hasMore);
            // Increment the offset
            setOffset(offset + NUMBER_TO_FETCH);
        });

    }

    useEffect(() => {
        setLogs(initialActivities)
        setOffset(NUMBER_TO_FETCH)
    }, [searchParams])


    useEffect(() => {
        if (inView) {
            loadMore()
        }
    }, [inView])

    return (
        <>
            {logs.map((log: AuditLog, index) => (

                <React.Fragment key={index}>
                    <ActivityItem data={log} />
                    <hr />
                </React.Fragment>
            ))}
            <div ref={ref}></div>
        </>
    );
}
export default ActivityList
