"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";
import SidebarSection, { AccordianSidebarSection } from "./sidebar-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { NavItem } from "@/types";
import useSidebar from "@/hooks/use-sidebar";

interface SidebarProps {
  librarySelections: NavItem[];
  librarySelectionsCounts: number[];
  toolSelections: NavItem[];
  shelfSelections: string[];
}

const SideBar: React.FC<SidebarProps> = ({
  librarySelections,
  librarySelectionsCounts,
  toolSelections,
  shelfSelections,
}) => {
  const updateSelected = useSidebar((state) => state.updateSelected);
  useEffect(() => {
    updateSelected("All");
  }, []);

  return (
    <div className="hidden xl:block">
      <div className="gap-1.5 ]w-full justify-between mt-8 rounded-lg flex flex-col text-sm text-muted-foreground font-light">
        <SidebarSection
          title="Library"
          items={librarySelections}
          counts={librarySelectionsCounts}
        />
        {/* <AccordianSidebarSection
          title="Library"
          items={librarySelections}
          counts={librarySelectionsCounts}
        /> */}
        {/* <hr /> */}
        <AccordianSidebarSection
          items={shelfSelections}
          title="Shelves"
          counts={librarySelectionsCounts}
        />
        {/* <hr /> */}
        {/* <SidebarSection title="Shelves" items={shelfSelections} isShelves /> */}
        <SidebarSection title="Tools" items={toolSelections} />
      </div>
    </div>
  );
};

export default SideBar;
