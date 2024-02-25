import { timeAgo } from '@/lib/utils';
import { UserAvatar } from '@/modules/layout/components/user-avatar';
import { User } from '@/types/interfaces';
import React from 'react';

interface CommentCardProps {
  content: string;
  createdAt: string;
  user: User;
}

export const CommentCard: React.FC<CommentCardProps> = ({
  user,
  content,
  createdAt,
}) => {
  return (
    <div className='flex gap-4'>
      <div className=' items-center text-base font-semibold'>
        <span className='flex items-center'>
          <UserAvatar
            user={{ name: (user && user.username) || null }}
            size={'default'}
            className='h-10 w-10'
          />
        </span>
      </div>

      <div className='flex flex-col gap-1 text-sm'>
        <div className='flex gap-2'>
          <div className='font-bold'>{user && user.username}</div>
          <div className='text-gray-500'>{timeAgo(Number(createdAt))}</div>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};
export default CommentCard;
