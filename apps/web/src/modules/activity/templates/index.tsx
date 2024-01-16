import React from 'react'
import { ActivityItem } from '../components/activity-item';
import { AudtiLog } from '@/graphql/graphql';

interface AcitvityTemplateProps {
    auditLogs: any;

}

export const AcitvityTemplate: React.FC<AcitvityTemplateProps> = ({ auditLogs }) => {
    console.log(auditLogs)

    return (
        <div>
            <div className="flex-col justify-center">
                <div className="w-full grid grid-cols-4 gap-4">
                    <div className="col-span-4 xl:col-span-3 mt-8 ">
                        <div className="leading-7 items-start text-primary font-semibold text-xl">
                            Activity
                        </div>
                        <hr className="mt-2 border-t-1 border-primary" />
                        <ol className="space-y-4 mt-4">
                            <p className="hidden last:block text-xs text-center text-muted-foreground">
                                No activity found inside this organization
                            </p>

                            {auditLogs.map((log: AudtiLog) => (
                                <ActivityItem key={log.id} data={log} />
                            ))}
                        </ol>
                    </div>
                </div>

            </div>
        </div>

    );
}
export default AcitvityTemplate
