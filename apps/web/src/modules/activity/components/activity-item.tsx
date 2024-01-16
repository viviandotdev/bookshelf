import { format } from "date-fns";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { UserAvatar } from "@/modules/layout/components/user-avatar";
import LogMessage, { generateLogMessage } from "../utils";
import { Action } from "@/graphql/graphql";
import Rating from "@/components/rating";

interface ActivityItemProps {
    // data: AuditLog;
    data: any;
};

export const ActivityItem = ({
    data,
}: ActivityItemProps) => {
    return (
        <li className="flex items-center gap-x-2">
            <Avatar className="h-8 w-8">
                <UserAvatar
                    user={{ id: data.user.id, username: data.user.username || null }}
                    size={"default"}
                    className="h-8 w-8"
                />
            </Avatar>
            <div className="flex flex-col space-y-0.5">
                <p className="text-sm text-muted-foreground">
                    <span className="font-semibold lowercase text-neutral-700">
                        {data.userName}
                    </span>
                    <LogMessage log={data} />
                </p>
                <p className="text-xs text-muted-foreground">
                    {format(new Date(data.createdAt), "MMM d, yyyy 'at' h:mm a")}
                </p>
            </div>
        </li>
    );
};
