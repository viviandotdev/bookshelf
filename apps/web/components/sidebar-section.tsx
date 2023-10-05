import { NavItem } from "@/types";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import useSidebar from "@/hooks/use-sidebar";
import useCreateShelfModal from "@/hooks/use-create-shelf-moda";
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

export default SidebarSection;
