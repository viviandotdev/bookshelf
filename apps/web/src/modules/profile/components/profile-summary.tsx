'use client';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import { useFollowUser } from '../mutations/use-follow-user';
import { BookCountsResponse, User } from '@/graphql/graphql';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import Link from 'next/link';
import StatsCard from '@/components/stats-card';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';

interface ProfileSummaryProps {
  profileUser: User;
  currentUser: User;
  bookCounts: BookCountsResponse;
}

const ProfileSummary: React.FC<ProfileSummaryProps> = ({
  profileUser,
  currentUser,
  bookCounts,
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  return (
    <div className='mb-12 flex flex-col items-center space-y-6 pt-12 lg:flex-row lg:items-start lg:space-x-6 lg:space-y-0'>
      <div className='h-32 w-32 flex-shrink-0 rounded-full bg-gray-200'>
        <Avatar className='h-full w-full rounded-full'>
          <AvatarImage
            className='rounded-full'
            alt='Profile picture'
            src='/placeholder.svg?height=200&width=200'
          />
        </Avatar>
      </div>
      <div className='min-w-0 flex-1 text-center lg:text-left'>
        <div className='text-sm text-gray-500'>@{profileUser.username}</div>
        <h2
          className={cn(
            dm_sefif_display.className,
            'py-2 text-3xl font-medium leading-7 text-beige-700 lg:text-5xl'
          )}
        >
          Vivian Lin
        </h2>
        <div className='mt-2 flex flex-col items-center lg:mt-1 lg:flex-row lg:flex-wrap lg:items-start lg:space-x-6'>
          {profileUser.username === currentUser.username && (
            <>
              <Button
                onClick={() => linkRef.current?.click()}
                variant={'pill'}
                className='h-8 rounded-full border border-beige-100 font-normal transition-all duration-300 hover:border-beige-700 hover:shadow-sm'
              >
                Edit Profile
              </Button>
              <Link
                ref={linkRef}
                href={`/settings/personal`}
                className='hidden'
              ></Link>
            </>
          )}
        </div>
      </div>
      <div className='flex  flex-row gap-x-3'>
        <StatsCard title='Want to Read' value={bookCounts.wantsToReadCount} />
        <StatsCard title='Books Read' value={bookCounts.finishedCount} />
        <StatsCard title='Pages' value={160} />
      </div>
    </div>
  );
};

export default ProfileSummary;
