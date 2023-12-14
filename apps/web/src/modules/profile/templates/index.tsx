import { Button } from "@/components/ui/button";
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/modules/layout/components/user-avatar";
import { Section } from "../components/section";
import { Shelf, User, UserBook } from "@/graphql/graphql";
import ReadingChallenge from "../components/reading-challenge";
import ShelvesSection from "../components/shelves-section";
import ProfileSummary from "../components/profile-summary";


interface ProfileTemplateProps {
    currentlyReading: UserBook[];
    shelves: Shelf[];
    profileUser: User;
    currentUser: User;

}

const ProfileTemplate: React.FC<ProfileTemplateProps> = ({ currentlyReading, shelves, profileUser, currentUser }) => {
    return (
        <>
            <ProfileSummary profileUser={profileUser} currentUser={currentUser} />
            <div className="grid grid-cols-3 gap-2 pt-8">
                <div className="col-span-2">
                    <Section books={currentlyReading} title={"Currently Reading"} />
                    <Section books={currentlyReading} title={"Currently Reading"} />
                    {/* Activity section */}
                    <div>
                        <div className="text-primary font-medium">{"Activity".toLocaleUpperCase()}</div>
                        <hr />
                        {/* Activity section content */}
                    </div>
                </div>
                <div className="col-span-1 pl-10 flex flex-col gap-4">
                    <ProfileSection title="Goals">
                        <ReadingChallenge />
                        {/* Show ratings chart */}
                    </ProfileSection>
                    <ProfileSection title="Ratings">
                        {/* Show ratings chart */}
                    </ProfileSection>
                    <ProfileSection title="Diary">
                        {/* Show diar */}
                    </ProfileSection>
                    <ProfileSection title="Shelves">
                        {/* Show shelves */}
                        <div className="mt-2">
                            <ShelvesSection shelves={shelves} />
                        </div>
                    </ProfileSection>
                </div>
            </div>
        </>
    );
};

const ProfileSection: React.FC<{ title: string, children?: React.ReactNode }> = ({ title, children }) => {
    return (
        <div>
            <div className="text-primary font-medium">{title.toLocaleUpperCase()}</div>
            <hr />
            {children}
        </div>
    );
};

export default ProfileTemplate;
