

import { getActivity } from "@/modules/activity/queries/getActivity";
import AcitvityTemplate from "@/modules/activity/templates";


export default async function ActivityPage() {
    const auditLogs = await getActivity({});

    return <AcitvityTemplate auditLogs={auditLogs} />;
}
