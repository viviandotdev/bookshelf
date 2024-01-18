import React from 'react';
import Rating from "@/components/rating";
import { Action, AuditLog } from "@/graphql/graphql";
import Link from 'next/link';
import BookCover from '@/components/book-cover';
import { format } from 'date-fns';
import { Progress } from '@/components/ui/progress';

const LogMessage = ({ log }: { log: AuditLog }) => {
    const { action, book, actionContent } = log;

    const titleLink = (
        <Link href={`/book/${book!.id}`} className="text-primary hover:text-stone-500">
            {book!.title}
        </Link>
    );
    let page;
    let percent;
    if (Action.Log) {
        page = actionContent;
        percent = Math.round(Number(page) / Number(book?.pageCount) * 100);
    }
    switch (action) {
        case Action.Shelve:
            return <div>You shelved {titleLink} as: {actionContent}</div>;
        case Action.Review:
            return (
                <div className="flex gap-2">
                    <BookCover src={book?.coverImage!} size='md' />
                    <div className="flex flex-col ml-2 justify-between">
                        <div className="flex flex-col gap-2">
                            <div>You reviewed</div>
                            <div className="flex flex-col">
                                <div className="font-semibold text-[16px]">{titleLink}</div>
                                <div className="text-primary">by {book?.author}</div>
                            </div>
                            <div className="text-sm">{actionContent}</div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                            {format(new Date(log.createdAt), "MMM d, yyyy 'at' h:mm a")}
                        </div>
                    </div>

                </div>
            );
        case Action.StatusUpdate:
            return <div>You marked {titleLink} as {actionContent}</div>;
        case Action.Like:
            return <div>You marked {titleLink} as {actionContent}</div>;
        case Action.Rate:
            const rating = Number(actionContent);
            return (
                <div className="flex gap-2">
                    You rated {titleLink} <Rating value={rating} />
                </div >
            );
        case Action.Log:
            return (
                <div className="flex gap-2">
                    <BookCover src={book?.coverImage!} size='sm' />
                    <div className="flex flex-col ml-2 justify-between">
                        <div className="flex flex-col gap-1">
                            <div>You are on page {actionContent} of {book?.pageCount} of {titleLink}</div>
                            <div className="font-semibold text-[16px]">{titleLink}</div>
                            <div className="text-primary">by {book?.author}</div>
                        </div>
                        <div className="flex items-center gap-2">
                            progress:
                            <Progress className="align-middle" value={percent} />
                        </div>
                        <div className="text-xs text-muted-foreground">
                            {format(new Date(log.createdAt), "MMM d, yyyy 'at' h:mm a")}
                        </div>
                    </div>
                </div>
            )
        default:
            return <div>Unknown action "{action}" for entity {titleLink}</div>;
    }
};

export default LogMessage;
