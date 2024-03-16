import React from 'react';
import Heading from '@/components/heading';
import { FilterTabs } from '../components/filter-tabs';
import { ActivityList } from '../components/activity-list';
import SortButton from '../components/sort-button';
import { SortingOptions } from '@/modules/bookshelves/components/sorting-options';

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

    const sortingSelects = [
        { label: 'Date: Old to new', value: 'createdAt.asc' },
        {
            label: 'Date: New to old',
            value: 'createdAt.desc',
        },
        {
            label: 'Title: A to Z',
            value: 'title.asc',
        },
        {
            label: 'Title: Z to A',
            value: 'title.desc',
        },
        {
            label: 'Author: A to Z',
            value: 'author.asc',
        },
        {
            label: 'Author: Z to A',
            value: 'author.desc',
        },
    ];
    return (
        <div className='my-12'>
            <div className='container mx-auto mb-6 flex flex-col justify-center'>
                <Heading
                    title={title}
                    subTitle={id ? 'Your Activity For' : ''}
                    href={id ? `/book/${id}` : ''}
                />
                <div className='border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between'>
                    <FilterTabs />
                    <SortingOptions selections={sortingSelects} />
                </div>
                <div className='flex justify-start gap-4'>
                    <ol className='w-full space-y-4'>
                        <p className='hidden text-center text-xs text-gray-500 last:block'>
                            No activity found
                        </p>
                        <ActivityList bookId={id} initialActivities={auditLogs} />

                    </ol>
                </div>
            </div>
        </div>
    );
};

export default AcitvityTemplate;
