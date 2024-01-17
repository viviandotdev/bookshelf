import React from 'react';
import Rating from "@/components/rating";
import { Action, AuditLog } from "@/graphql/graphql";
import Link from 'next/link';
import BookCover from '@/components/book-cover';
import { format } from 'date-fns';

const LogMessage = ({ log }: { log: AuditLog }) => {
    const { action, book, actionContent } = log;

    const titleLink = (
        <Link href={`/book/${book!.id}`} className="text-primary hover:text-stone-500">
            {book!.title}
        </Link>
    );
    switch (action) {
        case Action.Shelve:
            return <span>You shelved {titleLink} as: {actionContent}</span>;
        case Action.Review:
            return (
                <span className="flex gap-2">
                    <BookCover src={book?.coverImage!} size='sm' />
                    <span className="flex flex-col ml-2 justify-between">
                        <span className="flex flex-col gap-1">
                            <span>You reviewed</span>
                            <span className="font-semibold text-lg">{titleLink}</span>
                            <span className="text-sm">{actionContent}</span>

                        </span>
                        <span className="text-xs text-muted-foreground">
                            {format(new Date(log.createdAt), "MMM d, yyyy 'at' h:mm a")}
                        </span>
                    </span>

                </span>
            );
        case Action.StatusUpdate:
            return <span>You marked {titleLink} as {actionContent}</span>;
        case Action.Like:
            return <span>You marked {titleLink} as {actionContent}</span>;
        case Action.Rate:
            const rating = Number(actionContent);
            return (
                <span className="flex gap-2">
                    You rated {titleLink} <Rating value={rating} />
                </span >
            );
        case Action.Log:
            return <span>You marked {titleLink} as {actionContent}</span>;
        default:
            return <span>Unknown action "{action}" for entity {titleLink}</span>;
    }
};

export default LogMessage;
