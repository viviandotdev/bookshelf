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
                    : "hover:bg-slate-100 hover:bg-opacity-70"
                } group/item flex rounded-lg p-2 px-3 font-medium`}
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

                <span className="rounded-lg font-medium">
                  {isShelves && (
                    <a className="group/edit hidden hover:bg-slate-200 group-hover/item:block rounded-sm py-0.5 px-1">
                      <Icons.more
                        className="rotate-90 fill-current h-4 w-4 cursor-pointer stroke-muted-foreground stroke-1"
                        onClick={(e) => {
                          console.log("e", e);
                        }}
                      />
                    </a>
                  )}
                  {counts && (
                    <span
                      className={`${
                        isShelves ? "block group-hover/item:hidden" : ""
                      } cursor-pointer  `}
                    >
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
