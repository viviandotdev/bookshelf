"use client"
import React, { useEffect, useState, useTransition } from 'react'
import { ActivityItem } from './activity-item';
import { Action, AuditLog, UserBookWhereInput } from '@/graphql/graphql';
import { getActivity } from '../queries/getActivity';
import { useInView } from 'react-intersection-observer'
import { useSearchParams } from 'next/navigation';
import { buildSortQuery } from '@/lib/utils';

interface ActivityListProps {
    initialActivities: AuditLog[]
    bookId?: string
}
const NUMBER_TO_FETCH = 10
export const ActivityList: React.FC<ActivityListProps> = ({ bookId, initialActivities, }) => {
    const [offset, setOffset] = useState(NUMBER_TO_FETCH)
    const [logs, setLogs] = useState<AuditLog[]>(initialActivities)
    const [hasMoreActivity, setHasMoreActivity] = useState(true)
    const searchParams = useSearchParams();
    const action = searchParams.get("filter")
    const sort = searchParams?.get('sort') ?? 'createdAt.desc';
    const sortQuery = buildSortQuery(sort)
    const [isPending, startTransition] = useTransition();
    const { ref, inView } = useInView()
    const loadMore = async () => {
        // implement has more
        if (isPending || !hasMoreActivity) { return; }

        let activityOptions: UserBookWhereInput = {};

        // Check if bookId exists and is a valid number after parsing
        if (bookId && !isNaN(parseInt(bookId))) {
            activityOptions = {
                bookId: {
                    equals: parseInt(bookId)
                }
            };
        }

        let { activities, hasMore } = await getActivity(activityOptions, offset, NUMBER_TO_FETCH, action as Action, sortQuery);

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
            {logs && logs.map((log: AuditLog, index) => (

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
