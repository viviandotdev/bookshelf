"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Shelf } from "@/graphql/graphql";
import useShelfStore from "@/stores/use-shelf-store";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import useCreateShelfModal from "@/modules/shelf/hooks/use-create-shelf-modal";
import ShelfContainer from "@/modules/shelf/components/shelf-container";
interface SidebarProps {
    librarySelections: Shelf[];
    shelfSelections: Shelf[];
}

export const Sidebar: React.FC<SidebarProps> = ({ shelfSelections, librarySelections }) => {
    const { shelves, library, initLibrary, initShelves, updateSelected } = useShelfStore();

    const params = useSearchParams();
    const shelf = params?.get("shelf");

    useEffect(() => {
        if (shelf) {
            (updateSelected(shelf));
        } else {
            (updateSelected("All Books"));
        }
        (initShelves(shelfSelections));
        (initLibrary(librarySelections));
    }, []);


    return (
        <div className="hidden lg:flex w-72 overflow-y-auto mt-5 gap-10">
            <div className="flex flex-col w-72 ml-4 pb-6">
                <Button
                    className="flex mr-6 mt-6 mb-2 items-center gap-2   justify-start hover:text-white rounded-lg px-3 py- text-white transition-all "
                >
                    <Icons.plus className="h-5 w-5" />
                    Add a Book
                </Button>


                <nav className="flex-1 flex flex-col overflow-auto scrollbar-thin scrollbar-track-beige-50 scrollbar-thumb-beige-700 gap-2">
                    <ShelfContainer shelves={library} collapsible={true} title="My Library " />
                    <ShelfContainer shelves={shelves} isShelves={true} collapsible={true} title="Shelves " />


                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
