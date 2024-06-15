import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
interface StatsCardProps {
  value: number;
  title: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ value, title }) => {
  return (
    <Card className='bg-white '>
      <CardContent className='min-w-32 px-4 py-2'>
        <div className='mb-0.5 text-2xl font-medium '>{value}</div>
        <div className='text-xs font-medium text-beige-700'>{title}</div>
      </CardContent>
    </Card>
  );
};
export default StatsCard;
