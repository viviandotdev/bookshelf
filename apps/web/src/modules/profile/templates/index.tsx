import { Button } from '@/components/ui/button';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { UserAvatar } from '@/modules/layout/components/user-avatar';
import { Section } from '../components/section';
import { Shelf, User, UserBook } from '@/graphql/graphql';
import ReadingChallenge from '../components/reading-challenge';
import ShelvesSection from '../components/shelves-section';
import ProfileSummary from '../components/profile-summary';
import { Tabs } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import NavLink from '../components/nav-link';
import ProfileNav from '../components/profile-nav';

interface ProfileTemplateProps {
    currentlyReading: UserBook[];
    shelves: Shelf[];
    profileUser: User;
    currentUser: User;
}

const ProfileTemplate: React.FC<ProfileTemplateProps> = ({
    currentlyReading,
    shelves,
    profileUser,
    currentUser,
}) => {


    const selectedTab = 'Profile';
    return (
        <div className="container">
            <ProfileSummary profileUser={profileUser} currentUser={currentUser} />
            <ProfileNav currentUser={currentUser} />
            <div className='grid grid-cols-3 gap-2 pt-12'>
                <div className='col-span-2'>
                    <Section books={currentlyReading} title={'Favorite Books '} />
                    <Section books={currentlyReading} title={'Currently Reading'} />
                    {/* Activity section */}
                </div>
                <div className='col-span-1 flex flex-col gap-4 pl-10'>
                    <ProfileSection title='Goals'>
                        <ReadingChallenge />
                        {/* Show ratings chart */}
                    </ProfileSection>
                    <ProfileSection title='Ratings'>
                        {/* Show ratings chart */}
                    </ProfileSection>
                    <ProfileSection title='Diary'>{/* Show diar */}</ProfileSection>
                    <ProfileSection title='Shelves'>
                        {/* Show shelves */}
                        <div className='mt-2'>
                            <ShelvesSection shelves={shelves} />
                        </div>
                    </ProfileSection>
                </div>
            </div>
        </div>
    );
};

const ProfileSection: React.FC<{
    title: string;
    children?: React.ReactNode;
}> = ({ title, children }) => {
    return (
        <div>
            <div className='text-lg font-semibold text-beige'>{title}</div>
            {children}
        </div>
    );
};

export default ProfileTemplate;
