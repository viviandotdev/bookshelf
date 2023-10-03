import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium disabled:opacity-50 disabled:pointer-events-none rounded-xl",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "bg-white border-2 font-semibold border-primary text-primary items-center text-center p-2 cursor-pointer hover:bg-white",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        tag: "text-[12px] bg-secondary text-secondary-foreground",
        action:
          "text-[12px] bg-secondary text-secondary-foregroundmr-1 mb-1 cursor-pointer w-max gap-1 hover:bg-secondary ",
      },
      size: {
        default: "h-10 py-2 px-4",
        xs: "h-7 px-2 rounded-md ",
        sm: "h-9 px-3 rounded-md text-xs",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label?: string;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, icon, className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && <span>{icon}</span>}
        {label}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
