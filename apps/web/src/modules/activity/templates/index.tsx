import React from 'react';
import Heading from '@/components/heading';
import ActivityFilter from '../components/activity-filter';
import { ActivityList } from '../components/activity-list';

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
        <div className='my-12'>
            <div className='container mx-auto mb-6 flex flex-col justify-center'>
                <Heading
                    title={title}
                    subTitle={id ? 'Your Activity For' : ''}
                    href={id ? `/book/${id}` : ''}
                />
                <div className='border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between'>

                    <ActivityFilter />
                    <div className='mt-3 flex sm:ml-4 sm:mt-0'>
                        <button
                            type='button'
                            className='inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                        >
                            Sort
                        </button>
                    </div>
                </div>
                <div className='flex justify-start gap-4'>
                    <ol className='w-full space-y-4'>
                        <p className='hidden text-center text-xs text-gray-500 last:block'>
                            No activity found
                        </p>
                        <ActivityList initialActivities={auditLogs} />

                    </ol>
                </div>
            </div>
        </div>
    );
};

export default AcitvityTemplate;
