import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import {
  BookCountsResponse,
  CountUserBooksQuery,
  Reading_Status,
} from '@/graphql/graphql';
import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth';
import { User } from 'next-auth';

const ReadingItem = ({
  icon,
  label,
  value,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string;
}) => (
  <Link href={link} className='flex cursor-pointer justify-between py-3'>
    <div className='flex items-center space-x-4'>
      <div className='rounded-md bg-beige-100 p-4 text-beige-600'>{icon}</div>
      <div className='flex flex-col text-beige-700'>
        <span className='text-lg font-bold'>{value}</span>
        <span>{label}</span>
      </div>
    </div>
    <div className='content-center font-semibold text-beige-700'>
      <span>
        <Icons.chevronRight className='' />
      </span>
    </div>
  </Link>
);

// Modify ReadingSummary to accept props
const ReadingSummary = ({ bookCounts }: { bookCounts: BookCountsResponse }) => {
  const readingSummaryItems = [
    {
      icon: <Icons.bookOpen />,
      label: 'Currently Reading',
      value: `${bookCounts.readingCount} books`,
      link: `/library?status=${Reading_Status.Reading}`,
    },
    {
      icon: <Icons.upNext />,
      label: 'Up Next',
      value: `${bookCounts.upNextCount} books`,
      link: `/library?status=${Reading_Status.UpNext}`,
    },
    {
      icon: <Icons.save />,
      label: 'Want to Read',
      value: `${bookCounts.wantsToReadCount} books`,
      link: `/library?status=${Reading_Status.WantToRead}`,
    },

    {
      icon: <Icons.bookCheck />,
      label: 'Read',
      value: `${bookCounts.finishedCount} books`,
      link: `/library?status=${Reading_Status.Finished}`,
    },

    // {
    //   icon: <Icons.streak />,
    //   label: 'Longest streak',
    //   value: '10 days',
    //   link: '',
    // },
  ];

  return (
    <Card className='overflow-hidden rounded-md border-2 border-gray-100 bg-white shadow-sm'>
      <CardHeader className='p-6 pb-2 text-xl font-bold text-beige-700'>
        Reading Summary
      </CardHeader>
      <CardContent className=''>
        <div className='flex flex-col divide-y divide-gray-200'>
          {readingSummaryItems.map((item, index) => (
            <ReadingItem
              key={index}
              icon={item.icon}
              label={item.label}
              value={item.value}
              link={item.link}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { ReadingSummary };
