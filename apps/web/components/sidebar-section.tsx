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
            <>
              <div
                className={`${
                  heading.title === sidebar.selected
                    ? "bg-secondary"
                    : "hover:bg-muted "
                } flex opacity-60 rounded-lg p-2 px-3 font-medium`}
                key={i}
              >
                <div
                  key={i}
                  className={`w-[fill-available] cursor-pointer justify-between`}
                  onClick={() => updateSelected(heading.title!)}
                >
                  <span className="flex">
                    {heading.icon && nameIcon(heading.icon)}
                    {heading.title}
                  </span>
                </div>
                <span
                  className={`opacity-100 flex align-middle items-center rounded-r-lg pr-2`}
                >
                  {isShelves && (
                    <Icons.more
                      className="fill-current hover:text-black hover:stroke-black hover:opacity-100 hover:text-opacity-100 h-4 w-4 cursor-pointer stroke-muted-foreground stroke-1"
                      onClick={(e) => {
                        console.log("e", e);
                      }}
                    />
                  )}
                  {counts && (
                    <span className="cursor-pointer max-w-[1rem] min-w-[1rem] px-2">
                      {counts[i]}
                    </span>
                  )}
                </span>
              </div>
            </>
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
