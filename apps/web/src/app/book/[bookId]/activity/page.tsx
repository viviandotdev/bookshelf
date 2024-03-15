import { getActivity } from '@/modules/activity/queries/getActivity';
import AcitvityTemplate from '@/modules/activity/templates';

interface ActivityPageProps {
    params: { bookId: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ActivityPage({ params, searchParams }: ActivityPageProps) {
    let auditLogs = await getActivity({
        bookId: {
            equals: parseInt(params.bookId),
        },
    });
    let title;
    if (auditLogs.length > 0) {
        title = auditLogs[0].book!.title;
    }


    if (searchParams.filter) {
        auditLogs = auditLogs.filter((log) => log.action === searchParams.filter);
    }

    return (
        <AcitvityTemplate auditLogs={auditLogs} title={title} id={params.bookId} />
    );
}
