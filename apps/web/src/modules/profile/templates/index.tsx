import { Button } from '@/components/ui/button';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { UserAvatar } from '@/modules/layout/components/user-avatar';
import { Section } from '../components/section';
import { BookCountsResponse, Shelf, User, UserBook } from '@/graphql/graphql';
import ReadingChallenge from '../components/reading-challenge';
import ShelvesSection from '../components/shelves-section';
import ProfileSummary from '../components/profile-summary';
import { Tabs } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import NavLink from '../components/nav-link';
import ProfileNav from '../components/profile-nav';
import UnderlinedTabs from '@/components/underlined-tabs';
import Library from '../components/library';
import MyShelves from '../components/my-shelves';

interface ProfileTemplateProps {
  currentlyReading: UserBook[];
  wantToRead: UserBook[];
  upNext: UserBook[];
  finished: UserBook[];
  shelves: Shelf[];
  profileUser: User;
  currentUser: User;
  bookCounts: BookCountsResponse;
}

const ProfileTemplate: React.FC<ProfileTemplateProps> = ({
  currentlyReading,
  shelves,
  bookCounts,
  wantToRead,
  upNext,
  finished,
  profileUser,
  currentUser,
}) => {
  const tabs = [
    {
      label: 'Library',
      children: (
        <Library
          bookCounts={bookCounts}
          username={profileUser.username || ''}
          currentlyReading={currentlyReading}
          wantToRead={wantToRead}
          upNext={upNext}
          finished={finished}
        />
      ),
      id: 'bookInfo',
    },
    {
      label: 'Shelves',
      children: <MyShelves shelves={shelves} />,
      id: 'shelves',
    },
    {
      label: 'Goals',
      children: <div>Goals</div>,
      id: 'goals',
    },
  ];
  return (
    <div className='mx-auto max-w-7xl overflow-x-auto px-8'>
      <ProfileSummary
        profileUser={profileUser}
        currentUser={currentUser}
        bookCounts={bookCounts}
      />
      <section className='max-w-[1220px]'>
        <main className='flex min-h-screen flex-col'>
          <UnderlinedTabs tabs={tabs} initialTabId='shelves' />
        </main>
      </section>
    </div>
  );
};

export default ProfileTemplate;
