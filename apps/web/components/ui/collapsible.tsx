import { ChevronUpIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

interface CollapsibleProps {
  title?: string;
  children?: React.ReactNode;
  collapsible?: boolean;
}

const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
  collapsible,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCollapsibleClick = () => {
    if (collapsible) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="">
      <div className="leading-7 items-start text-primary font-semibold">
        <div
          onClick={handleCollapsibleClick}
          className={`flex flex-1  py-4 text-sm font-medium transition-all ${
            isOpen ? "[&>svg]:rotate-180 " : ""
          } justify-between items-center cursor-pointer`}
        >
          {title}
          {collapsible && (
            <ChevronUpIcon className="h-4 w-4 shrink-0 text-primary transition-transform duration-300" />
          )}
        </div>
      </div>
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
