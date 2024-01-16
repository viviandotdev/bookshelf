import React from 'react';
import Rating from "@/components/rating";
import { Action, AuditLog } from "@/graphql/graphql";

const LogMessage = ({ log }: { log: AuditLog }) => {
    const { action, entityTitle, entityData } = log;

    switch (action) {
        case Action.Review:
            return <span>You reviewed "{entityTitle}" with {entityData}</span>;
        case Action.StatusUpdate:
            return <span>You marked "{entityTitle}" {entityData}</span>;
        case Action.Like:
            return <span>You marked "{entityTitle}" as {entityData}</span>;
        case Action.Rate:
            const rating = Number(entityData);
            return (
                <span className="flex gap-2">
                    You rated "{entityTitle}" <Rating value={rating} /> 
                </span>
            );
        case Action.Log:
            return <span>You marked "{entityTitle}" as {entityData}</span>;
        default:
            return <span>Unknown action "{action}" for entity "{entityTitle}"</span>;
    }
};

export default LogMessage;
