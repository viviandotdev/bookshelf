import React from 'react';
import { ActivityItem } from '../components/activity-item';
import { AuditLog, Book } from '@/graphql/graphql';
import Link from 'next/link';
import { dm_sefif_display } from '@/lib/fonts';
import { cn, } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Heading from '@/components/heading';

interface AcitvityTemplateProps {
    auditLogs: any;
    title?: string;
    id?: string;
}

export const AcitvityTemplate: React.FC<AcitvityTemplateProps> = ({
    auditLogs,
    title,
    id,
}) => {


    return (
        <div className="my-12">
            <div className='mx-auto mb-6 flex container flex-col justify-center'>
                <Heading title={title} subTitle={id ? "Your Activity For" : ""} href={id ? `/book/${id}` : ''} />
                <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
                    <Tabs defaultValue="all" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="rating">Rating</TabsTrigger>
                            <TabsTrigger value="review">Reviews</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <div className="mt-3 flex sm:ml-4 sm:mt-0">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            Sort
                        </button>

                    </div>
                </div>
                <div className='flex gap-4 justify-start'>
                    <ol className='space-y-4 w-full'>
                        <p className='hidden text-center text-xs text-gray-500 last:block'>
                            No activity found
                        </p>
                        {auditLogs.map((log: AuditLog) => (
                            <React.Fragment key={log.id}>
                                <ActivityItem data={log} />
                                <hr />
                            </React.Fragment>
                        ))}
                    </ol>
                </div>
            </div>


        </div>

    );
};

export default AcitvityTemplate;
