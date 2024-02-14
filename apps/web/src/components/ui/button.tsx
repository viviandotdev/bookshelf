import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex rounded-md items-center justify-center text-sm font-medium disabled:opacity-50 disabled:pointer-events-none ",
    {
        variants: {
            variant: {
                default: "bg-beige text-beige-50 text-sm font-medium hover:bg-beige/90 ",
                outline:
                    "bg-white border-2 font-semibold border-beige text-beige items-center",
                secondary: "bg-beige-100 text-beige-700 hover:bg-beige-100/80",
                link: "underline-offset-4 hover:underline text-beige",
                pill: "bg-beige-100 text-beige-700 hover:bg-beige-100/80 rounded-2xl font-semibold h-8 px-3",
                action:
                    "text-xs bg-beige-100 text-beige-700 mr-1 mb-1 w-max gap-1 hover:bg-beige-100/80 ",
            },
            size: {
                default: "h-10 py-2 px-4",
                xs: "h-6 px-2 ",
                sm: "h-8 px-3",
                lg: "h-12 px-8",
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
    ({ label, children, icon, className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {icon && <span>{icon}</span>}
                {label ? label : children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
