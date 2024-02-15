import { Button } from "@/components/ui/button";
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/modules/layout/components/user-avatar";
import { Section } from "../components/section";
import { Shelf, User, UserBook } from "@/graphql/graphql";
import ReadingChallenge from "../components/reading-challenge";
import ShelvesSection from "../components/shelves-section";
import ProfileSummary from "../components/profile-summary";
import { Tabs } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import NavLink from "../components/nav-link";


interface ProfileTemplateProps {
    currentlyReading: UserBook[];
    shelves: Shelf[];
    profileUser: User;
    currentUser: User;

}

const ProfileTemplate: React.FC<ProfileTemplateProps> = ({ currentlyReading, shelves, profileUser, currentUser }) => {
    const tabs = [
        { name: "Profile", href: "/profile" },
        { name: "Activity", href: "/activity" },
        { name: "Library", href: "/library" },
        { name: "Journal", href: "/journal" },
        { name: "Reviews", href: "/reviews" },
        { name: "Want to Read", href: "/want-to-read" },
        { name: "Lists", href: "/lists" },
        { name: "Tags", href: "/tags" },
        { name: "Stats", href: "/stats" }
    ];

    const selectedTab = "Profile";
    return (
        <>
            <ProfileSummary profileUser={profileUser} currentUser={currentUser} />
            <Tabs>
                <div className="px-12 mt-4 flex space-x-1 rounded-xl bg-white shadow-sm border border-gray-200 justify-center py-3">
                    {tabs.map((tab, index) => (
                        <NavLink href={tab.href}>{tab.name}</NavLink>
                    ))}
                </div>
            </Tabs>
            <div className="grid grid-cols-3 gap-2 pt-12">
                <div className="col-span-2">
                    <Section books={currentlyReading} title={"Favorite Books "} />
                    <Section books={currentlyReading} title={"Currently Reading"} />
                    {/* Activity section */}

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

            <div className="text-beige text-lg font-semibold">{title}</div>
            {children}
        </div>
    );
};

export default ProfileTemplate;
