"use client"
import { Button } from "@/components/ui/button";
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/modules/layout/components/user-avatar";
import { useState } from "react";
import { useFollowUser } from "../mutations/use-follow-user";
import { User } from "@/graphql/graphql";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { LocateIcon, CalendarIcon, UsersIcon, UserIcon } from "lucide-react";

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
        <div className="mb-12 pt-12 flex items-center space-x-6">
            <div className="w-32 h-32 flex-shrink-0 bg-gray-200 rounded-xl">
                <Avatar className="h-full w-full">
                    <AvatarImage alt="Profile picture" src="/placeholder.svg?height=200&width=200" />
                    {/* <AvatarFallback>VL</AvatarFallback> */}
                </Avatar>
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center text-sm text-gray-500">
                    @vivianlin
                </div>
                <div className="flex items-center space-x-8">
                    <h2 className="text-5xl font-medium leading-7 text-gray-900 py-4">
                        Vivian Lin
                    </h2>
                    <Button className="bg-beige-700 text-white text-sm font-normal hover:bg-gray-200">Edit Profile</Button>
                </div>
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                        <LocateIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        New York, NY
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                        <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        Joined April 20, 2023
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                        <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        <span className="font-bold mr-1.5">4,545 </span> Followers
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                        <UserIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />

                        <span className="font-bold mr-1.5">99 </span>  Following
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 space-x-3">
                <div className="flex items-center space-x-4">
                    <Card className="bg-white shadow-md ">
                        <CardContent className="px-4 py-2 min-w-32">
                            <div className="text-2xl font-medium mb-0.5 ">351</div>
                            <div className="text-xs text-beige-700 font-medium">Books Read</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-white shadow-md">
                        <CardContent className="px-4 py-2 min-w-32">
                            <div className="text-2xl font-medium mb-0.5 ">167</div>
                            <div className="text-xs text-beige-700 font-medium">Want to Read</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
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
