import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Icons } from '@/components/icons';

const ReadingItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className='flex cursor-pointer justify-between py-3'>
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
  </div>
);

// Modify ReadingSummary to accept props
const ReadingSummary = ({
  summaryItems,
}: {
  summaryItems?: Array<{
    icon: React.ReactNode;
    label: string;
    value: string;
  }>;
}) => {
  const readingSummaryItems = [
    {
      icon: <Icons.bookOpen />,
      label: 'Currently Reading',
      value: '4 books',
    },
    {
      icon: <Icons.save />,
      label: 'Want to Read',
      value: '234 books',
    },
    {
      icon: <Icons.book />,
      label: 'Read',
      value: '100 books',
    },
    {
      icon: <Icons.streak />,
      label: 'Longest streak',
      value: '10 days',
    },
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
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { ReadingSummary };
