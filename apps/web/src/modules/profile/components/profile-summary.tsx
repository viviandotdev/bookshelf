"use client"
import { Button } from "@/components/ui/button";
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/modules/layout/components/user-avatar";
import { useState } from "react";
import { useFollowUser } from "../mutations/use-follow-user";
import { User } from "@/graphql/graphql";

interface ProfileSummaryProps {
    profileUser: User;
    currentUser: User;

}

const ProfileSummary: React.FC<ProfileSummaryProps> = ({ profileUser, currentUser }) => {
    const { followUser, loading } = useFollowUser();
    const [followerCount, setFollowerCount] = useState(profileUser.followerCount ? profileUser.followerCount : 0);
    const [isFollowing, setIsFollowing] = useState(profileUser.isFollowing);
    // useEffect(() => {
    //     console.log(profileUser)
    // }
    //     , []);
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
        <div className="flex justify-between items-center pt-16">
            <div className="flex gap-8">
                <UserAvatar user={{ name: profileUser.username }} size="lg" />
                <div className="flex flex-col gap-3">
                    <div className={cn(dm_sefif_display.className, "text-beige text-3xl leading-none")}>
                        {profileUser.username}
                    </div>
                    <div>Joined in December 2017</div>
                    {
                        profileUser.username === currentUser.username ? (
                            <Button className="w-max rounded-md" variant={"beige-100"}>{"Edit Profile".toLocaleUpperCase()}</Button>
                        ) : (
                            isFollowing ? (
                                <Button onClick={handleFollowUser} className="w-max rounded-md" variant={"beige-100"}>{"Unfollow".toLocaleUpperCase()}</Button>
                            ) : (
                                <Button onClick={handleFollowUser} className="w-max rounded-md" variant={"beige-100"}>{"Follow".toLocaleUpperCase()}</Button>

                            )
                        )
                    }
                </div>
            </div>
            <UserStats followers={profileUser.followerCount} following={profileUser.followingCount} />
        </div>
    );
};

interface UserStatsProps {
    followers: number;
    following: number;
}
const UserStats: React.FC<UserStatsProps> = ({ followers, following }) => {
    const stats = [
        { number: following, label: "Following" },
        { number: followers, label: "Followers" },
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
