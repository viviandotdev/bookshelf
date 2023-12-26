import { Icons } from '@/components/icons';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import React from 'react'
import { Shelf } from '@/graphql/graphql';
import useCreateShelfModal from './modals/use-create-shelf-modal';
import { MoreHorizontal } from 'lucide-react';

interface EditShelfMenuProps {
    shelf: Shelf;
    setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditShelfMenu: React.FC<EditShelfMenuProps> = ({ shelf, setOpenAlert }) => {
    const shelfModal = useCreateShelfModal();
    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger>
                    <span>
                        <a className="group/edit hidden group-hover/item:block hover:bg-slate-200 rounded-sm px-1">
                            <Icons.more className="rotate-90 fill-current h-4 w-4 cursor-pointer stroke-muted-foreground stroke-1" />
                        </a>

                        <span className={`block group-hover/item:hidden cursor-pointer px-1 rounded-sm`}
                        >
                            {shelf._count.userBooks}
                        </span>
                    </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align={"end"}
                    side={"bottom"}
                    alignOffset={-100}
                >
                    <DropdownMenuItem
                        onClick={() => {
                            shelfModal.onEdit({
                                id: shelf.id!,
                                name: shelf.name!,
                            })
                        }}
                    >
                        Rename
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => {
                            shelfModal.setEditShelf({
                                id: shelf.id!,
                                name: shelf.name!,
                            });
                            setOpenAlert(true);
                        }}
                    >
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
export default EditShelfMenu
