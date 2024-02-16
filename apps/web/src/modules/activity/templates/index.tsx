import React from 'react';
import { ActivityItem } from '../components/activity-item';
import { AuditLog, Book } from '@/graphql/graphql';
import Link from 'next/link';
import { dm_sefif_display } from '@/lib/fonts';
import { cn, formatDate } from '@/lib/utils';
import BookCover from '@/components/book-cover';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select';

interface AcitvityTemplateProps {
    auditLogs: any;
    title?: string;
    id?: string;
    book: Book;
}

export const AcitvityTemplate: React.FC<AcitvityTemplateProps> = ({ auditLogs, title, book, id }) => {
    return (
        <div>

            <div className="my-12 w-[950px] flex flex-col mx-auto justify-center">
                <h3 className={cn(dm_sefif_display.className, "text-2xl text-gray-400")}>Vivian's Activity For</h3>
                <h1 className={cn(dm_sefif_display.className, "text-4xl font-bold text-beige-700 mb-6")}>
                    <Link href={`/book/${id}`} className="text-beige hover:text-stone-500">
                        {title}
                    </Link>
                </h1>
            </div>

            <div className="flex justify-center">

                <div className="w-[200px] h-[300px] top-5 sticky">
                    <div className="">
                        <BookCover src={book.coverImage} className="justify-start max-w-none w-[fill-available] rounded-lg" size={"lg"} />
                        <div className="mt-3 text-xs font-light">
                            <div>{book.pageCount} Pages</div>
                            <div>First published {formatDate(book.publishedDate)}</div>
                        </div>
                    </div>

                </div>
                <div className="w-[750px]">
                    <ol className="space-y-4">
                        <p className="hidden last:block text-xs text-center text-gray-500">
                            No activity found
                        </p>
                        {auditLogs.map((log: AuditLog) => (
                            <React.Fragment key={log.id}>
                                <ActivityItem data={log} />
                                <ActivityItem data={log} />
                                <ActivityItem data={log} />
                                <hr />
                            </React.Fragment>
                        ))}
                    </ol>

                </div>

            </div>

        </div>
        // <div className="relative flex">
        //     {/* Header */}
        //     <div className="absolute top-0 left-0 w-full px-4 bg-white">
        //         <div className="my-12">
        //             <h3 className={cn(dm_sefif_display.className, "text-2xl text-gray-400")}>Vivian's Activity For</h3>
        //             <h1 className={cn(dm_sefif_display.className, "text-4xl font-bold text-beige-700 mb-6")}>
        //                 <Link href={`/book/${id}`} className="text-beige hover:text-stone-500">
        //                     {title}
        //                 </Link>
        //             </h1>
        //         </div>
        //     </div>
        //     <div className="sticky flex-col mt-40 justify-center w-1/4 px-4">
        //         <div className="relative z-10">
        //             <div className="">
        //                 <BookCover src={book.coverImage} size={"lg"} />
        //                 <Tabs>
        //                     <TabsList>
        //                         <TabsTrigger className="w-full" value="today">
        //                             Today
        //                         </TabsTrigger>
        //                         <TabsTrigger className="w-full" value="week">
        //                             This Week
        //                         </TabsTrigger>
        //                     </TabsList>
        //                 </Tabs>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="w-3/4 px-4 mt-40 ">
        //         <div className="h-[calc(100vh-150px)]">
        //             <ol className="space-y-4 mt-4">
        //                 <p className="hidden last:block text-xs text-center text-gray-500">
        //                     No activity found
        //                 </p>
        //                 {auditLogs.map((log: AuditLog) => (
        //                     <React.Fragment key={log.id}>
        //                         <ActivityItem data={log} />
        //                         <ActivityItem data={log} />
        //                         <ActivityItem data={log} />
        //                         <hr />
        //                     </React.Fragment>
        //                 ))}
        //             </ol>
        //         </div>
        //     </div>
        // </div>
    );
};

export default AcitvityTemplate;
