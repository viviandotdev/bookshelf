"use client"
import { Button } from "@/components/ui/button";
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/modules/layout/components/user-avatar";
import { useState } from "react";

interface ProfileSummaryProps {

    profileUsername: string;
    currentUsername: string;
    isFollowing?: boolean;
    
}

const ProfileSummary: React.FC<ProfileSummaryProps> = ({ profileUsername, currentUsername, isFollowing }) => {
    const [followers, setFollowers] = useState(0);
    const followUser = () => {
        console.log("follow user");
    };
    return (
        <div className="flex justify-between items-center pt-16">
            <div className="flex gap-8">
                <UserAvatar user={{ name: profileUsername }} size="lg" />
                <div className="flex flex-col gap-3">
                    <div className={cn(dm_sefif_display.className, "text-primary text-3xl leading-none")}>
                        {profileUsername}
                    </div>
                    <div>Joined in December 2017</div>
                    {
                        currentUsername === profileUsername ? (
                            <Button className="w-max rounded-md" variant={"secondary"}>{"Edit Profile".toLocaleUpperCase()}</Button>
                        ) : (<Button onClick={followUser} className="w-max rounded-md" variant={"secondary"}>{"Follow".toLocaleUpperCase()}</Button>)
                    }
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

export default ProfileSummary
