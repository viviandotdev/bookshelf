"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Shelf } from "../../../../graphql/graphql";
import ShelfGroup from "./shelf-group";
import { useAppDispatch, useAppSelector } from "@/stores";
import { initShelves, selectShelves, updateSelected } from "@/stores/shelf-slice";
import { update } from "ramda";

interface SidebarProps {
    librarySelections: Shelf[];
    shelfSelections: Shelf[];
}

const SideBar: React.FC<SidebarProps> = ({
    librarySelections,
    shelfSelections,
}) => {
    const shelves = useAppSelector(selectShelves)
    const dispath = useAppDispatch();
    // const updateSelected = useShelves((state) => state.updateSelected);
    // const initShelves = useShelves((state) => state.initShelves);

    const params = useSearchParams();
    const shelf = params?.get("shelf");

    useEffect(() => {
        if (shelf) {
            dispath(updateSelected(shelf));

        } else {
            dispath(updateSelected("All"));

        }
        dispath(initShelves(shelfSelections));
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
