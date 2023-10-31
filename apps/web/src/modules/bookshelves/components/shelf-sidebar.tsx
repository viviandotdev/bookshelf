"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Shelf } from "@/graphql/graphql";
import useShelves from "@/stores/shelf-store";
import ShelfGroup from "./shelf-group";

interface SidebarProps {
    librarySelections: Shelf[];
    shelfSelections: Shelf[];
}

const SideBar: React.FC<SidebarProps> = ({
    librarySelections,
    shelfSelections,
}) => {
    const { shelves } = useShelves();
    const updateSelected = useShelves((state) => state.updateSelected);
    const initShelves = useShelves((state) => state.initShelves);

    const params = useSearchParams();
    const shelf = params?.get("shelf");

    useEffect(() => {
        if (shelf) {
            updateSelected(shelf);
        } else {
            updateSelected("All");
        }
        initShelves(shelfSelections);
    }, []);

    return (
        <div className="hidden xl:block">
            <div className="gap-1.5 w-full justify-between mt-8 rounded-lg flex flex-col text-sm text-muted-foreground font-light">
                <ShelfGroup
                    key={0}
                    title="Library"
                    shelves={librarySelections}
                    isShelves={false}
                />

                <ShelfGroup
                    key={1}
                    title="Shelves"
                    shelves={shelves}
                    collapsible
                    isShelves={true}
                />
            </div>
        </div>
    );
};

export default SideBar;
