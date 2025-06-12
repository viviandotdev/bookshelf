import { BookCountsResponse, Shelf, User, UserBook } from '@/graphql/graphql';
import ProfileSummary from '../components/profile-summary';
import UnderlinedTabs from '@/components/underlined-tabs';
import Library from '../components/library';
import { Shelves } from '../components/shelves';

interface ProfileTemplateProps {
    currentlyReading: UserBook[];
    wantToRead: UserBook[];
    upNext: UserBook[];
    finished: UserBook[];
    shelves: Shelf[];
    profileUser: User;
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
            id: 'library',
        },
        {
            label: 'Shelves',
            children: <Shelves username={profileUser.username} shelves={shelves} />,
            id: 'shelves',
        },
        // {
        //     label: 'Goals',
        //     children: <div>Goals</div>,
        //     id: 'goals',
        // },
    ];
    return (
        <div className='mx-auto max-w-7xl overflow-x-auto px-12'>
            <ProfileSummary
                profileUser={profileUser}
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
