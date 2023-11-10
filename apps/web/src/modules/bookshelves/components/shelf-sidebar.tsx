"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Shelf } from "../../../../graphql/graphql";
import ShelfGroup from "./shelf-group";
import { useAppDispatch, useAppSelector } from "@/stores";
import { initLibrary, initShelves, selectShelves, updateSelected } from "@/stores/shelf-slice";

interface SidebarProps {
    librarySelections: Shelf[];
    shelfSelections: Shelf[];
}

const SideBar: React.FC<SidebarProps> = ({
    librarySelections,
    shelfSelections,
}) => {
    const shelves = useAppSelector(selectShelves)
    const library = useAppSelector((state) => state.shelf.library);
    const dispatch = useAppDispatch();

    const params = useSearchParams();
    const shelf = params?.get("shelf");


    useEffect(() => {
        if (shelf) {
            dispatch(updateSelected(shelf));

        } else {
            dispatch(updateSelected("All Books"));

        }
        dispatch(initShelves(shelfSelections));
        dispatch(initLibrary(librarySelections));
    }, []);

    return (
        <div className="hidden xl:block">
            <div className="gap-1.5 w-full justify-between mt-8 rounded-lg flex flex-col text-sm text-muted-foreground font-light">
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
                />
            </div>
        </div>
    );
};

export default SideBar;
