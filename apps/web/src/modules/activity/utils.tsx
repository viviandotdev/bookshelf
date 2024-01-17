import React from 'react';
import Rating from "@/components/rating";
import { Action, AuditLog } from "@/graphql/graphql";
import Link from 'next/link';

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
            return <span>You reviewed {titleLink} with {actionContent}</span>;
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
