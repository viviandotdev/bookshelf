
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import { Shelf, UserBook } from "@/graphql/graphql";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { BookOpenIcon, Badge, CalendarIcon, ClockIcon, CheckIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calender";
import { Icons } from "@/components/icons";
import ReadingCard from "../components/reading-card";
import UpdateCard from "../components/update-card";

interface HomeTemplateProps {
    currentlyReading: UserBook[];
    shelves: Shelf[];
}
;
export default function HomeTemplate({ currentlyReading, shelves }: HomeTemplateProps) {
    const headings = [
        "New York Times Bestsellers",
        "Most Recommended Non-Fiction Books",
        "Most Recommended Fiction Books",
    ];
    return (
        <>

            <div className="max-w-8xl mx-auto px-0 py-6">
                <div className="grid grid-cols-4 gap-16">
                    <div className="col-span-3 space-y-6">
                        <section aria-labelledby="currently-reading-heading">
                            <h2 className={cn(
                                dm_sefif_display.className,
                                "text-2xl font-semibold text-beige-700 mb-4"
                            )}>Currently Reading</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <ReadingCard />
                                <ReadingCard />
                                <ReadingCard />
                            </div>
                        </section>
                        <section aria-labelledby="popular-books-heading">
                            <h2 className={cn(
                                dm_sefif_display.className,
                                "text-2xl font-semibold text-beige-700 mb-4"
                            )}>Popular Books</h2>
                            <div className="grid grid-cols-4 gap-4">
                                {
                                    Array.from({ length: 4 }, (_, idx) => (
                                        <div key={idx}>
                                            <div className={`relative`}>
                                                <div className={`flex-row`}>
                                                    <div className={`relative flex items-start bg-beige-100`}>
                                                        <div className={`relative opacity-30 flex items-start bg-beige-100 h-64 md:h-44 lg:h-48 xl:h-60 2xl:h-72`} >
                                                            {/* Adjust height based on screen breakpoints */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </section>
                        <section aria-labelledby="updates-heading">
                            <h2 className={cn(
                                dm_sefif_display.className,
                                "text-2xl font-semibold text-beige-700 mb-4"
                            )}>Updates</h2>
                            <UpdateCard />
                        </section>
                    </div>
                    <aside className="col-span-1 space-y-6">
                        <h2 className={cn(
                            dm_sefif_display.className,
                            "text-2xl font-semibold text-beige-700 mb-2"
                        )}>Reading Goals</h2>
                        <Calendar className="rounded-md border" mode="single" />
                        <div className="space-y-4">

                            <div className="flex justify-between bg-white p-4 rounded-lg shadow">
                                <div className="text-left">
                                    <div className="text-lg font-semibold">10</div>
                                    <div className="text-sm text-gray-500">Total Check Ins</div>
                                </div>
                                <div className="text-left">
                                    <div className="text-lg font-semibold">132</div>
                                    <div className="text-sm text-gray-500">Best Streak</div>
                                </div>
                                <div className="text-left">
                                    <div className="text-lg font-semibold">10</div>
                                    <div className="text-sm text-gray-500">Current Streak</div>
                                </div>
                            </div>
                            <div className="bg-white rounded-md border p-4">
                                <h3 className="text-lg font-semibold mb-2">2022 READING CHALLENGE PROGRESS</h3>
                                <p className="text-sm text-gray-500 mb-1">22 / 35 books completed</p>
                                <p className="text-sm text-gray-500 mb-4">You're 2 books behind schedule</p>
                                <Progress className="w-full" value={60} />
                                <p className="text-sm text-gray-500 mt-2">There are still 85 days left! You can do it!</p>
                            </div>
                            <section aria-labelledby="up-next-heading">
                                <h2 className="text-lg font-semibold mb-2" id="up-next-heading">
                                    Up Next
                                </h2>
                                <div className="space-y-2">
                                    <ReadingCard />
                                    <ReadingCard />
                                    <ReadingCard />
                                </div>
                            </section>
                        </div>
                    </aside>
                </div>
            </div >
        </>
    );
};
