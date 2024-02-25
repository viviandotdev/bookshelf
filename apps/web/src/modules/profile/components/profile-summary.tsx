'use client';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { useFollowUser } from '../mutations/use-follow-user';
import { User } from '@/graphql/graphql';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { LocateIcon, CalendarIcon, UsersIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { Stats } from 'fs';
import StatsCard from '@/components/stats-card';

interface ProfileSummaryProps {
  profileUser: User;
  currentUser: User;
}

const ProfileSummary: React.FC<ProfileSummaryProps> = ({
  profileUser,
  currentUser,
}) => {
  const { followUser, loading } = useFollowUser();
  const [followerCount, setFollowerCount] = useState(
    profileUser.followerCount ? profileUser.followerCount : 0
  );
  const [isFollowing, setIsFollowing] = useState(profileUser.isFollowing);

  const linkRef = useRef<HTMLAnchorElement>(null);
  const handleFollowUser = async () => {
    if (!loading) {
      if (!isFollowing) {
        setFollowerCount(followerCount + 1);
        await followUser(profileUser.id, true);
      } else {
        setFollowerCount(followerCount - 1);
        await followUser(profileUser.id, false);
      }
      setIsFollowing(!isFollowing);
    }
  };
  return (
    <div className='mb-12 flex items-center space-x-6 pt-12 '>
      <div className='h-32 w-32 flex-shrink-0 rounded-xl bg-gray-200'>
        <Avatar className='h-full w-full'>
          <AvatarImage
            alt='Profile picture'
            src='/placeholder.svg?height=200&width=200'
          />
        </Avatar>
      </div>
      <div className='min-w-0 flex-1'>
        <div className='flex items-center text-sm text-gray-500'>
          @{profileUser.username}
        </div>
        <div className='flex items-center space-x-8'>
          <h2 className='py-4 text-5xl font-medium leading-7 text-gray-900'>
            Vivian Lin
          </h2>
          {profileUser.username === currentUser.username ? (
            <>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  if (linkRef.current) {
                    linkRef.current.click();
                  }
                }}
                className='bg-beige-700 text-sm font-normal text-white hover:bg-beige-700/80'
              >
                Edit Profile
              </Button>
              <Link
                ref={linkRef}
                href={`/settings/personal`}
                className='hidden'
              ></Link>
            </>
          ) : isFollowing ? (
            <Button
              onClick={handleFollowUser}
              className='bg-beige-700 text-sm font-normal text-white hover:bg-beige-700/80'
            >
              Unfollow
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              className='bg-beige-700 text-sm font-normal text-white hover:bg-beige-700/80'
            >
              Follow
            </Button>
          )}
        </div>
        <div className='flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6'>
          <div className='mt-4 flex items-center text-sm text-gray-500'>
            <LocateIcon className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400' />
            New York, NY
          </div>
          <div className='mt-4 flex items-center text-sm text-gray-500'>
            <CalendarIcon className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400' />
            Joined April 20, 2023
          </div>
          <div className='mt-4 flex items-center text-sm text-gray-500'>
            {/* <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" /> */}
            <span className='mr-1.5 font-bold'>
              {profileUser.followerCount}
            </span>{' '}
            Followers
          </div>
          <div className='mt-4 flex items-center text-sm text-gray-500'>
            {/* <UserIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" /> */}
            <span className='mr-1.5 font-bold'>
              {profileUser.followingCount}{' '}
            </span>{' '}
            Following
          </div>
        </div>
      </div>
      <div className='flex-shrink-0 space-x-3'>
        <div className='flex items-center space-x-4'>
          <StatsCard title='Books Read' value={351} />
          <StatsCard title='Want to Read' value={160} />
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
