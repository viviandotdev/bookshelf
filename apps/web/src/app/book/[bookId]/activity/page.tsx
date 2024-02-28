import { getActivity } from '@/modules/activity/queries/getActivity';
import AcitvityTemplate from '@/modules/activity/templates';

interface ActivityPageProps {
  params: { bookId: string };
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const auditLogs = await getActivity({
    bookId: {
      equals: params.bookId,
    },
  });
  let title;
  if (auditLogs.length > 0) {
    title = auditLogs[0].book!.title;
  }

  return (
    <AcitvityTemplate
      auditLogs={auditLogs}
      title={title}
      book={auditLogs[0].book}
      id={params.bookId}
    />
  );
}
