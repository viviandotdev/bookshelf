"use client";
import React, { useEffect } from "react";
import SidebarSection from "./sidebar-section";
import { useSearchParams } from "next/navigation";
import { Shelf } from "@/graphql/graphql";
import useShelves from "@/hooks/use-shelves";

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
        <SidebarSection
          key={0}
          title="Library"
          shelves={librarySelections}
          collapsible
          isShelves={false}
        />

        <SidebarSection
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
