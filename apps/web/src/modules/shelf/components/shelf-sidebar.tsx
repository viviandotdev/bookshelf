"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Shelf } from "@/graphql/graphql";
import ShelfGroup from "./shelf-container";
import useShelfStore from "@/stores/use-shelf-store";
import { Icons } from "@/components/icons";
import { CreateShelfModal } from "./modals/create-shelf-modal";
import { Button } from "@/components/ui/button";
import useCreateShelfModal from "../hooks/use-create-shelf-modal";

interface SidebarProps {
    librarySelections: Shelf[];
    shelfSelections: Shelf[];
}

const SideBar: React.FC<SidebarProps> = ({
    librarySelections,
    shelfSelections,
}) => {
    const { shelves, library, initLibrary, initShelves, updateSelected } = useShelfStore();
    const shelfModal = useCreateShelfModal();
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
        <div className="hidden xl:block">
            <div className="gap-1.5 w-full justify-between mt-8 rounded-lg flex flex-col text-sm text-slate-500 font-light">
                <ShelfGroup
                    key={0}
                    title="Library"
                    shelves={library}
                    isShelves={false}
                />

                <ShelfGroup
                    key={1}
                    title="Shelves"
                    shelves={shelves}
                    collapsible
                    isShelves={true}
                >
                    <div className="pt-1.5">
                        <CreateShelfModal />
                        <Button
                            className="w-[fill-available]"
                            size="sm"
                            label="Add Shelf"
                            onClick={() => {
                                shelfModal.onOpen()
                            }}
                            icon={<Icons.edit className="h-4 w-4 mr-2" />}
                        />
                    </div>

                </ShelfGroup>
            </div>
        </div>
    );
};

export default SideBar;
