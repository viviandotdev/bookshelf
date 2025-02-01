import { Icons } from '@/components/icons';
import { Card } from '@/components/ui/card';
import type React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}

function StatCard({ icon, value, label, className }: StatCardProps) {
  return (
    <Card
      className={`group relative overflow-hidden text-beige-700 ${className}`}
    >
      <div className='p-4'>
        <div className='flex items-start justify-between'>
          <div className='flex items-center space-x-4'>
            <div className='rounded-md bg-beige-100 p-4 text-beige-700'>
              {icon}
            </div>
            <div className='flex flex-col text-beige-700'>
              <span className='text-lg font-bold'>{value}</span>
              <span>{label}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

interface ReadingOverviewProps {
  bookCounts: {
    readingCount: number;
    upNextCount: number;
    wantsToReadCount: number;
    finishedCount: number;
  };
}

export default function ReadingOverview({ bookCounts }: ReadingOverviewProps) {
  const statCards = [
    {
      key: 'books-read',
      icon: <Icons.bookCheck className='h-5 w-5' />,
      value: `${bookCounts.finishedCount}`,
      label: 'Books Read',
    },
    {
      key: 'currently-reading',
      icon: <Icons.bookOpen className='h-5 w-5' />,
      value: `${bookCounts.readingCount}`,
      label: 'Currently Reading',
    },
    {
      key: 'want-to-read',
      icon: <Icons.save className='h-5 w-5' />,
      value: `${bookCounts.wantsToReadCount}`,
      label: 'Want to Read',
    },
  ];

  return (
    <div className='space-y-4'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {statCards.map((card) => (
          <StatCard
            key={card.key}
            icon={card.icon}
            value={card.value}
            label={card.label}
          />
        ))}
      </div>
    </div>
  );
}
