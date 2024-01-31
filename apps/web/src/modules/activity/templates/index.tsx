import React from 'react'
import { ActivityItem } from '../components/activity-item';
import { AuditLog } from '@/graphql/graphql';
import Link from 'next/link';

interface AcitvityTemplateProps {
    auditLogs: any;
    title?: string;
    id?: string;

}

export const AcitvityTemplate: React.FC<AcitvityTemplateProps> = ({ auditLogs, title, id }) => {

    return (
        <div>
            <div className="flex-col justify-center">
                <div className="w-full grid grid-cols-4 gap-8">
                    <div className="col-span-4 xl:col-span-3 mt-8 ">
                        <div className="leading-7 items-start text-beige font-semibold text-xl">
                            Your Activity {title ? <>
                                for
                                <Link href={`/book/${id}`} className="text-beige hover:text-stone-500">
                                    {title}
                                </Link></> : null}
                        </div>
                        <hr className="mt-2 border-t-1 border-beige" />
                        <ol className="space-y-4 mt-4">
                            <p className="hidden last:block text-xs text-center text-gray-500">
                                No activity found
                            </p>

                            {auditLogs.map((log: AuditLog) => (
                                <>
                                    <ActivityItem key={log.id} data={log} />
                                    <hr /></>
                            ))}

                        </ol>
                    </div>
                </div>

            </div>
        </div>

    );
}
export default AcitvityTemplate
