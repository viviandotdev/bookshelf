import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

interface SecondaryButtonProps {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  label,
  icon,
  onClick,
}) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant: "tag", size: "xs" }),
        "mr-1 mb-1 cursor-pointer w-max gap-1"
      )}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default SecondaryButton;
