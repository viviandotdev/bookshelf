import { NavItem } from "@/types";
import { Icons } from "./icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { Icon, LucideIcon } from "lucide-react";
import { useState } from "react";

interface SidebarSectionProps {
  title: string;
  items: NavItem[];
  counts?: number[];
  isShelves?: boolean;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  items,
  counts,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>("All");

  const handleItemClick = (itemTitle: string) => {
    setSelectedItem(itemTitle);
    // Perform other actions based on the selected item if needed
  };

  return (
    <>
      <div className="leading-7 items-start text-primary font-semibold">
        <div className="flex flex-1  py-4 text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180  justify-between items-center cursor-pointer">
          {title}
        </div>
      </div>
      {items.map((heading, i) => (
        <div
          key={i}
          onClick={() => handleItemClick(heading.title!)}
          className={`${
            heading.title == selectedItem ? "bg-secondary" : "hover:bg-muted"
          } font-medium opacity-60 w-[fill-available] rounded-lg p-2 px-3 cursor-pointer flex justify-between`}
        >
          <span className="flex">
            {heading.icon && nameIcon(heading.icon)}
            {heading.title}
          </span>
          {counts && <span>{counts[i]}</span>}
        </div>
      ))}
    </>
  );
};

const nameIcon = (iconName: string) => {
  const Icon = Icons[iconName];
  return (
    <>
      <Icon className="h-5 w-5 mr-4" />
    </>
  );
};

export const AccordianSidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  items,
  counts,
}) => (
  <>
    <Accordion type="single" defaultValue={"item-1"} collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm ">{title}</AccordionTrigger>
        {items.map((heading, i) => (
          <AccordionContent key={i}>
            <div className=" hover:bg-muted font-medium opacity-60 w-[fill-available] rounded-lg p-2 px-3 cursor-pointer flex justify-between">
              <span className="flex">
                <Icons.shelf className="h-5 w-5 mr-4" />
                {heading}
              </span>
              {counts && <span>{counts[i]}</span>}
            </div>
          </AccordionContent>
        ))}
        <AccordionContent className="pb-0">
          <Button
            className="w-[fill-available] "
            size="sm"
            label="Add Shelf"
            icon={<Icons.edit className="h-4 w-4 mr-2" />}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </>
);

export default SidebarSection;
