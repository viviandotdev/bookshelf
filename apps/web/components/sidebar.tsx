import React from "react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  shelfSelections: string[];
  toolSelections: string[];
}

const SideBar: React.FC<SidebarProps> = ({
  shelfSelections,
  toolSelections,
}) => {
  return (
    <div className="hidden xl:block">
      {renderSidebarSection("Bookshelves", shelfSelections)}
      {renderSidebarSection("Tools", toolSelections)}
    </div>
  );
};

const renderSidebarSection = (title: string, items: string[]) => (
  <div className="w-full justify-between mt-8 rounded-lg flex flex-col text-sm gap-1 text-muted-foreground font-light">
    <div className="leading-7 items-start text-primary font-semibold">
      {title}
    </div>
    <hr className="mt-1 border-t-1 border-primary" />
    {items.map((heading, i) => (
      <div
        key={i}
        className="text-xs bg-secondary w-[fill-available] rounded-lg p-2 cursor-pointer"
      >
        {heading}
      </div>
    ))}
    {title === "Bookshelves" && (
      <Button className="mt-2" size="sm" label="Add Shelf" />
    )}
  </div>
);

export default SideBar;
