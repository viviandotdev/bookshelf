import { AvatarProps } from '@radix-ui/react-avatar';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';
import { Maybe } from '@/graphql/graphql';

interface UserAvatarProps extends AvatarProps {
  username: Maybe<string> | undefined;
  size?: 'xs' | 'default' | 'lg';
  src?: string;
}

export function UserAvatar({ username, size, src, ...props }: UserAvatarProps) {
  let iconSize;
  switch (size) {
    case 'xs':
      iconSize = 'h-2 w-2';
      break;
    case 'lg':
      iconSize = 'h-24 w-24';
      break;
    default:
      iconSize = 'h-4 w-4';
      break;
  }
  console.log('src', src);

  return (
    <Avatar size={size} {...props}>
      <AvatarFallback>
        <span className='sr-only'>{username}</span>
        <Icons.user className={iconSize} />
      </AvatarFallback>
      <AvatarImage
        className='rounded-full'
        alt='Profile picture'
        src={`${src}`}
      />
    </Avatar>
  );
}
