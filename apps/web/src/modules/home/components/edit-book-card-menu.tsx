import { Icons } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import React from 'react';

interface EditBookCardMenuProps {}

export const EditBookCardMenu: React.FC<EditBookCardMenuProps> = ({}) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className='rounded border-gray-400 shadow-md'>
        <span>
          <a className=''>
            <Icons.more className='h-4 w-4 rotate-90 cursor-pointer fill-current stroke-gray-500 stroke-1' />
          </a>

          <span
            className={`block cursor-pointer rounded-sm px-1 text-gray-400 group-hover/item:hidden`}
          >
            {/* {shelf._count.userBooks} */}
          </span>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={'end'} side={'bottom'} alignOffset={-100}>
        <DropdownMenuItem>Rename</DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default EditBookCardMenu;
