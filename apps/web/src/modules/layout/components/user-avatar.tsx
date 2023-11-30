import { AvatarProps } from "@radix-ui/react-avatar";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Icons } from "@/components/icons";
import { User } from "next-auth/core/types";

interface UserAvatarProps extends AvatarProps {
    user: Pick<User, "image" | "name">;
    size?: "xs" | "default" | "lg";
}

export function UserAvatar({ user, size, ...props }: UserAvatarProps) {

    let iconSize;
    switch (size) {
        case "xs":
            iconSize = "h-2 w-2";
            break;
        case "lg":
            iconSize = "h-24 w-24";
            break;
        default:
            iconSize = "h-4 w-4";
            break;
    }

    return (
        <Avatar size={size} {...props}>
            <AvatarFallback>
                <span className="sr-only">{user.name}</span>
                <Icons.user className={iconSize} />
            </AvatarFallback>
        </Avatar>
    );
}
