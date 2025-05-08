'use client';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import { BookCountsResponse, User } from '@/graphql/graphql';
import { Avatar } from '@radix-ui/react-avatar';
import Link from 'next/link';
import StatsCard from '@/components/stats-card';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';
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
        <div className='mb-12 flex flex-col items-center justify-between space-y-6 pt-12 lg:flex-row lg:items-start lg:space-x-6 lg:space-y-0'>
            <div className='flex flex-col gap-8 lg:flex-row'>
                <div className='flex items-center justify-center'>
                    <div className='h-28 w-28 overflow-hidden  rounded-full'>
                        <Avatar className='h-full w-full rounded-full'>
                            <AvatarFallback>
                                <span className='sr-only'>{profileUser.username}</span>
                                <Icons.user className={'h-10 w-10'} />
                            </AvatarFallback>
                            <AvatarImage
                                className='rounded-full'
                                alt='Profile picture'
                                src={`${profileUser.avatarImage}`}
                            />
                        </Avatar>
                    </div>
                </div>

                <div className='min-w-0 flex-1 text-center lg:text-left'>
                    <div className='text-sm text-gray-500 mb-2'>@{profileUser.username}</div>
                    <h2
                        className={cn(
                            dm_sefif_display.className,
                            'py-2 text-3xl font-medium mb-4 leading-7 text-beige-700 lg:text-5xl'
                        )}
                    >
                        {profileUser.username || profileUser.name}
                    </h2>
                    <div className='mt-2 flex flex-col items-center lg:mt-1 lg:flex-row lg:flex-wrap lg:items-start lg:space-x-6'>
                        {profileUser.username === currentUser.username && (
                            <>
                                <Button
                                    onClick={() => linkRef.current?.click()}
                                    variant={'pill'}
                                    className='h-8 rounded-full border border-beige-100 font-normal transition-all duration-300 hover:border-beige-700 hover:shadow-xs'
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
            </div>

            <div className='flex  flex-row gap-x-3'>
                <StatsCard title='Want to Read' value={bookCounts.wantsToReadCount} />
                <StatsCard title='Books Read' value={bookCounts.finishedCount} />
                <StatsCard title='Reading' value={bookCounts.readingCount} />
                {/* <StatsCard title='pages' value={bookCounts.readingCount} /> */}
            </div>
        </div>
    );
};

export default ProfileSummary;
