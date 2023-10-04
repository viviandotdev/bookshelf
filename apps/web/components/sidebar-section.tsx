import { NavItem } from "@/types";
import { Icons } from "./icons";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./ui/testaccordion";
import { Button } from "./ui/button";
import { Icon, LucideIcon } from "lucide-react";
import { useState } from "react";
import useSidebar from "@/hooks/use-sidebar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "postcss";
import useCreateShelfModal from "@/hooks/use-create-shelf-moda";
import Accordion from "./ui/collapsible";
import CreateShelfModal from "./modal/create-shelf-modal";
import Collapsible from "./ui/collapsible";

interface SidebarSectionProps {
  title: string;
  items: NavItem[];
  counts?: number[];
  isShelves?: boolean;
  collapsible?: boolean;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  items,
  counts,
  isShelves,
  collapsible,
}) => {
  const sidebar = useSidebar();
  const createShelfModal = useCreateShelfModal();
  const updateSelected = useSidebar((state) => state.updateSelected);
  return (
    <>
      <Collapsible title={title} collapsible={collapsible}>
        <>
          {items.map((heading, i) => (
            <div
              key={i}
              onClick={() => updateSelected(heading.title!)}
              className={`${
                heading.title == sidebar.selected
                  ? "bg-secondary"
                  : "hover:bg-muted"
              } font-medium opacity-60 w-[fill-available] rounded-lg p-2 px-3 cursor-pointer flex justify-between`}
            >
              <span className="flex">
                {heading.icon && nameIcon(heading.icon)}
                {heading.title}
              </span>
              {counts && <span>{counts[i]}</span>}
            </div>
          ))}
          {isShelves && (
            <div className="pt-1.5">
              <Button
                className="w-[fill-available]"
                size="sm"
                label="Add Shelf"
                onClick={createShelfModal.onOpen}
                icon={<Icons.edit className="h-4 w-4 mr-2" />}
              />
            </div>
          )}
        </>
      </Collapsible>
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

// export const AccordianSidebarSection: React.FC<SidebarSectionProps> = ({
//   title,
//   items,
//   counts,
// }) => {
//   const sidebar = useSidebar();
//   const updateSelected = useSidebar((state) => state.updateSelected);
//   const createShelfModal = useCreateShelfModal();
//   return (
//     <>
//       <Accordion type="single" defaultValue={"item-1"} collapsible>
//         <AccordionItem value="item-1">
//           <AccordionTrigger className="text-sm ">{title}</AccordionTrigger>
//           {items.map((heading, i) => (
//             <AccordionContent key={i}>
//               <div
//                 onClick={() => updateSelected(heading!)}
//                 className={`${
//                   heading == sidebar.selected
//                     ? "bg-secondary"
//                     : "hover:bg-muted"
//                 } font-medium opacity-60 w-[fill-available] rounded-lg p-2 px-3 cursor-pointer flex justify-between`}
//               >
//                 <span className="flex">
//                   <Icons.shelf className="h-5 w-5 mr-4" />
//                   {heading}
//                 </span>
//                 {counts && <span>{counts[i]}</span>}
//               </div>
//             </AccordionContent>
//           ))}
//           <AccordionContent className="pb-0">
//             <Button
//               className="w-[fill-available] "
//               size="sm"
//               label="Add Shelf"
//               onClick={createShelfModal.onOpen}
//               icon={<Icons.edit className="h-4 w-4 mr-2" />}
//             />
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     </>
//   );
// };

export default SidebarSection;
