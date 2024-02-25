import { Icons } from '@/components/icons';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import React from 'react'

interface EditBookCardMenuProps {

}

export const EditBookCardMenu: React.FC<EditBookCardMenuProps> = ({ }) => {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="shadow-md border-gray-400 rounded">
                <span>
                    <a className="">
                        <Icons.more className="rotate-90 fill-current h-4 w-4 cursor-pointer stroke-gray-500 stroke-1" />
                    </a>

                    <span className={`block text-gray-400 group-hover/item:hidden cursor-pointer px-1 rounded-sm`}
                    >
                        {/* {shelf._count.userBooks} */}
                    </span>
                </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align={"end"}
                side={"bottom"}
                alignOffset={-100}
            >
                <DropdownMenuItem
                >
                    Rename
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => {
                    }}
                >
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
export default EditBookCardMenu
