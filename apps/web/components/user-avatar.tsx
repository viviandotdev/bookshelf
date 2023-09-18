import { AvatarProps } from "@radix-ui/react-avatar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";
import { User } from "next-auth/core/types";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "name">;
  size?: "xs" | "default";
}

export function UserAvatar({ user, size, ...props }: UserAvatarProps) {
  const iconSize = size === "xs" ? "h-2 w-2" : "h-4 w-4";
  return (
    <Avatar size={size} {...props}>
      <AvatarFallback>
        <span className="sr-only">{user.name}</span>
        <Icons.user className={iconSize} />
      </AvatarFallback>
    </Avatar>
  );
}
