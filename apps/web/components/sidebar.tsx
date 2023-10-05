"use client";
import React, { useEffect, useState } from "react";
import SidebarSection, { AccordianSidebarSection } from "./sidebar-section";
import { NavItem } from "@/types";
import useSidebar from "@/hooks/use-sidebar";
import Accordion from "./ui/collapsible";
// import { Accordion } from "@radix-ui/react-accordion";

interface SidebarProps {
  librarySelections: NavItem[];
  librarySelectionsCounts: number[];
  toolSelections: NavItem[];
  shelfSelections: NavItem[];
}

const SideBar: React.FC<SidebarProps> = ({
  librarySelections,
  librarySelectionsCounts,
  toolSelections,
  shelfSelections,
}) => {
  const sidebar = useSidebar();
  const updateSelected = useSidebar((state) => state.updateSelected);
  const initShelves = useSidebar((state) => state.initShelves);

  useEffect(() => {
    updateSelected("All");
    initShelves(shelfSelections);
  }, []);

  return (
    <div className="hidden xl:block">
      <div className="gap-1.5 w-full justify-between mt-8 rounded-lg flex flex-col text-sm text-muted-foreground font-light">
        <SidebarSection
          title="Library"
          items={librarySelections}
          counts={librarySelectionsCounts}
          collapsible
        />

        <SidebarSection
          title="Shelves"
          items={sidebar.shelves}
          counts={librarySelectionsCounts}
          collapsible
          isShelves
        />
        <SidebarSection title="Tools" items={toolSelections} />
      </div>
    </div>
  );
};

export default SideBar;
