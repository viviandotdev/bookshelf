
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import { Shelf, UserBook } from "@/graphql/graphql";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { Calendar } from "@/components/ui/calender";
import ReadingCard from "../components/reading-card";
import UpdateCard from "../components/update-card";
import { CurrentlyReadingSection } from "../components/currently-reading-section";

interface HomeTemplateProps {
    currentlyReading: UserBook[];
    shelves: Shelf[];
}
;
export default function HomeTemplate({ currentlyReading, shelves }: HomeTemplateProps) {
    return (
        <>

            <div className="mx-auto px-0 py-6">
                <div className="flex gap-16">
                    <div className="space-y-6">
                        <CurrentlyReadingSection
                            details={{ progress: 90, date_started: "Sept 12" }}
                            booksData={currentlyReading}
                            shelves={shelves}
                        />
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
                    <aside className="min-w-96 space-y-6">
                        <h2 className={cn(
                            dm_sefif_display.className,
                            "text-2xl font-semibold text-beige-700 mb-2"
                        )}>Reading Goals</h2>
                        {/* <Calendar className="rounded-md border" mode="single" /> */}
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
                            <div className="bg-white rounded-lg border p-4">
                                <h3 className="text-sm font-medium text-gray-400 mb-1">2024 READING CHALLENGE PROGRESS</h3>
                                <p className="text-lg text-beige-600 font-semibold mb-1">{22} / {45} books completed</p>
                                <p className="text-sm text-gray-400 mb-2">You're 2 books behind schedule</p>
                                <div className="flex justify-center gap-2 items-center">
                                    <Progress className="w-full items-center h-3" value={60} />
                                    <div className="items-center text-xs text-beige-700 font-semibold">60%</div>
                                </div>

                                <p className="text-sm text-beige-700 mt-2">There are still <span className="font-semibold">{85}</span> days left! You can do it!</p>
                            </div>
                            <section aria-labelledby="up-next-heading">
                                <h2 className={cn(
                                    dm_sefif_display.className,
                                    "text-2xl font-semibold text-beige-700 mb-2"
                                )}>Up Next</h2>
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
