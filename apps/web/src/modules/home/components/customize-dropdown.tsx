import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icons } from '@/components/icons';

const CustomizeDropdown = ({
  currentView,
  setView,
}: {
  currentView: string;
  setView: (view: string) => void;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center gap-2'>
        <Icons.customize className='h-4 w-4 items-center' />
        <span>Customize</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={'start'} sideOffset={8} side={'bottom'}>
        <DropdownMenuLabel>List Preferences</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className={currentView === 'want-to-read' ? 'bg-beige-100' : ''}
          onClick={() => setView('want-to-read')}
        >
          Want to Read
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomizeDropdown;
