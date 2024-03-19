import { Action } from '@/graphql/graphql';
import { buildSortQuery } from '@/lib/utils';
import { getActivity } from '@/modules/activity/queries/getActivity';
import AcitvityTemplate from '@/modules/activity/templates';
import { getBook } from '@/modules/book/queries/getBook';

interface ActivityPageProps {
    params: { bookId: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ActivityPage({ params, searchParams }: ActivityPageProps) {
    const action = searchParams.filter as Action
    const sort = searchParams.sort ?? 'createdAt.desc';
    const sortQuery = buildSortQuery(sort as string)
    const book = await getBook(params.bookId);
    let auditLogs = await getActivity({
        bookId: {
            equals: parseInt(params.bookId),
        },
    }, 0, 10, action, sortQuery);
    let title;
    if (auditLogs && auditLogs.activities && auditLogs.activities.length > 0) {
        title = auditLogs.activities[0].book!.title;
    }

    return (
        <AcitvityTemplate auditLogs={auditLogs.activities} title={book!.title} id={params.bookId} />
    );
}
