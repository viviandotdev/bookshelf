'use client';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import { useFollowUser } from '../mutations/use-follow-user';
import { User } from '@/graphql/graphql';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import Link from 'next/link';
import StatsCard from '@/components/stats-card';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';

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
      <div className='h-32 w-32 flex-shrink-0 rounded-full  bg-gray-200'>
        <Avatar className='h-full w-full rounded-full'>
          <AvatarImage
            className='rounded-full'
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
          <h2
            className={cn(
              dm_sefif_display.className,
              'py-4 text-5xl font-medium leading-7 text-beige-700'
            )}
          >
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
            <span className='mr-1.5 '>{profileUser.followerCount}</span>
            Followers
          </div>
          <div className='mt-4 flex items-center text-sm text-gray-500'>
            <span className='mr-1.5'>{profileUser.followingCount} </span>
            Following
          </div>
        </div>
      </div>
      <div className='flex-shrink-0 space-x-3'>
        <div className='flex items-center space-x-4'>
          <StatsCard title='Want to Read' value={351} />
          <StatsCard title='Books Read' value={351} />
          <StatsCard title='Pages' value={160} />
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
