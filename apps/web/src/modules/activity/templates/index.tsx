import React from 'react'
import { ActivityItem } from '../components/activity-item';
import { AudtiLog } from '@/graphql/graphql';

interface AcitvityTemplateProps {
    auditLogs: any;

}

export const AcitvityTemplate: React.FC<AcitvityTemplateProps> = ({ auditLogs }) => {
    console.log(auditLogs)

    return (
        <ol className="space-y-4 mt-4">
            <p className="hidden last:block text-xs text-center text-muted-foreground">
                No activity found inside this organization
            </p>
            {auditLogs.map((log: AudtiLog) => (
                <ActivityItem key={log.id} data={log} />
            ))}
        </ol>
    );
}
export default AcitvityTemplate
