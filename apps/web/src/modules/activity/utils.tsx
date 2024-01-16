import React from 'react';
import Rating from "@/components/rating";
import { Action, AuditLog } from "@/graphql/graphql";
import Link from 'next/link';

const LogMessage = ({ log }: { log: AuditLog }) => {
    const { action, entityId, entityTitle, entityData } = log;

    const titleLink = (
        <Link href={`/book/${entityId}`} className="text-primary hover:text-stone-500">
            {entityTitle}
        </Link>
    );
    switch (action) {
        case Action.Shelve:
            return <span>You shelved {titleLink} as: {entityData}</span>;
        case Action.Review:
            return <span>You reviewed {titleLink} with {entityData}</span>;
        case Action.StatusUpdate:
            return <span>You marked {titleLink} as {entityData}</span>;
        case Action.Like:
            return <span>You marked {titleLink} as {entityData}</span>;
        case Action.Rate:
            const rating = Number(entityData);
            return (
                <span className="flex gap-2">
                    You rated {titleLink} <Rating value={rating} />
                </span >
            );
        case Action.Log:
            return <span>You marked {titleLink} as {entityData}</span>;
        default:
            return <span>Unknown action "{action}" for entity {titleLink}</span>;
    }
};

export default LogMessage;
