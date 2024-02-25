import { Progress } from '@/components/ui/progress';
import React from 'react';

interface ReadingChallengeProps {}

export const ReadingChallenge: React.FC<ReadingChallengeProps> = ({}) => {
  return (
    <div className='relative mt-2 flex flex-col items-start gap-2 rounded-[16px] border-4 border-solid border-beige-100 bg-beige-100 p-[12px]'>
      <div className='relative text-xl font-semibold text-beige'>
        2023 Reading Challenge
      </div>
      <p className='w-fit font-semibold text-beige'>
        Read 20 books by Dec 31, 2023
      </p>
      <p className='relative w-fit'>You’re 2 books behind schedule</p>
      <div className='inline-flex flex-col font-semibold'>
        <div className=''>progress: 60%</div>
      </div>
      <Progress value={33} />
    </div>
  );
};
export default ReadingChallenge;
