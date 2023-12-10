import { Button } from "@/components/ui/button";
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/modules/layout/components/user-avatar";
import { Section } from "../components/section";
import { Shelf, UserBook } from "@/graphql/graphql";
import ReadingChallenge from "../components/reading-challenge";
import ShelvesSection from "../components/shelves-section";

interface ProfileSummaryProps {
    userName: string;
}

const ProfileSummary: React.FC<ProfileSummaryProps> = ({ userName }) => {
    return (
        <div className="flex justify-between items-center pt-16">
            <div className="flex gap-8">
                <UserAvatar user={{ name: userName }} size="lg" />
                <div className="flex flex-col gap-3">
                    <div className={cn(dm_sefif_display.className, "text-primary text-3xl leading-none")}>
                        {userName}
                    </div>
                    <div>Joined in December 2017</div>
                    <Button className="w-max rounded-md" variant={"secondary"}>Edit Profile</Button>
                </div>
            </div>
            <UserStats />
        </div>
    );
};

const UserStats = () => {
    const stats = [
        { number: "13", label: "Following" },
        { number: "30", label: "Followers" },
        { number: "300", label: "Books" },
        { number: "43", label: "Ratings" },
    ];

    return (
        <div className="items-start gap-10 relative flex">
            {stats.map((stat, index) => (
                <div key={index} className="flex-col items-center justify-center relative flex">
                    <div className="relative w-fit text-xl font-bold">{stat.number}</div>
                    <div className="relative w-fit">{stat.label}</div>
                </div>
            ))}
        </div>
    );
};

interface ProfileTemplateProps {
    currentlyReading: UserBook[];
    shelves: Shelf[];
}

const ProfileTemplate: React.FC<ProfileTemplateProps> = ({ currentlyReading, shelves }) => {
    return (
        <>
            <ProfileSummary userName={"Vivian Lin"} />
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

const ProfileSection: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
    return (
        <div>
            <div className="text-primary font-medium">{title.toLocaleUpperCase()}</div>
            <hr />
            {children}
        </div>
    );
};

export default ProfileTemplate;
