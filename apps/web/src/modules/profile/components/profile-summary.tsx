"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useFollowUser } from "../mutations/use-follow-user";
import { User } from "@/graphql/graphql";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { LocateIcon, CalendarIcon, UsersIcon, UserIcon } from "lucide-react";
import Link from "next/link";

interface ProfileSummaryProps {
    profileUser: User;
    currentUser: User;

}

const ProfileSummary: React.FC<ProfileSummaryProps> = ({ profileUser, currentUser }) => {
    const { followUser, loading } = useFollowUser();
    const [followerCount, setFollowerCount] = useState(profileUser.followerCount ? profileUser.followerCount : 0);
    const [isFollowing, setIsFollowing] = useState(profileUser.isFollowing);

    const linkRef = useRef<HTMLAnchorElement>(null);
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
        <div className="mb-12 pt-12 flex items-center space-x-6 ">
            <div className="w-32 h-32 flex-shrink-0 bg-gray-200 rounded-xl">
                <Avatar className="h-full w-full">
                    <AvatarImage alt="Profile picture" src="/placeholder.svg?height=200&width=200" />
                </Avatar>
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center text-sm text-gray-500">
                    @{profileUser.username}
                </div>
                <div className="flex items-center space-x-8">
                    <h2 className="text-5xl font-medium leading-7 text-gray-900 py-4">
                        Vivian Lin
                    </h2>
                    {
                        profileUser.username === currentUser.username ? (
                            <>
                                <Button onClick={(e) => {
                                    e.stopPropagation();
                                    if (linkRef.current) {
                                        linkRef.current.click();
                                    }
                                }} className="bg-beige-700 text-white text-sm font-normal hover:bg-beige-700/80">Edit Profile</Button>
                                <Link ref={linkRef} href={`/settings/personal`} className="hidden"></Link>
                            </>

                        ) : (
                            isFollowing ? (
                                <Button onClick={handleFollowUser} className="bg-beige-700 text-white text-sm font-normal hover:bg-beige-700/80">Unfollow</Button>
                            ) : (
                                <Button onClick={handleFollowUser}
                                    className="bg-beige-700 text-white text-sm font-normal hover:bg-beige-700/80">Follow</Button>

                            )
                        )
                    }

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
                        <span className="font-bold mr-1.5">{profileUser.followerCount}</span> Followers

                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                        <UserIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        <span className="font-bold mr-1.5">{profileUser.followingCount} </span>  Following
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


export default ProfileSummary;
