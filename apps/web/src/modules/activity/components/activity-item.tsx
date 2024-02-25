import { format } from 'date-fns';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { UserAvatar } from '@/modules/layout/components/user-avatar';
import LogMessage from '../utils';
import { Action } from '@/graphql/graphql';

interface ActivityItemProps {
  // data: AuditLog;
  data: any;
}

export const ActivityItem = ({ data }: ActivityItemProps) => {
  return (
    <li className='flex items-start gap-x-2 '>
      <Avatar className='h-8 w-8'>
        <UserAvatar
          user={{ id: data.user.id, username: data.user.username || null }}
          size={'default'}
          className='h-8 w-8'
        />
      </Avatar>
      <div className='flex flex-col space-y-0.5'>
        <div className='text-sm text-gray-500'>
          <span className='font-semibold lowercase text-neutral-700'>
            {data.userName}
          </span>
          <LogMessage log={data} />
        </div>
        {data.action !== Action.Review && data.action !== Action.Log && (
          <p className='text-xs text-gray-500'>
            {format(new Date(data.createdAt), "MMM d, yyyy 'at' h:mm a")}
          </p>
        )}
      </div>
    </li>
  );
};
