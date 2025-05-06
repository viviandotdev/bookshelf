import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex rounded-md items-center justify-center text-sm font-medium disabled:opacity-50 disabled:pointer-events-none ',
  {
    variants: {
      variant: {
        default: 'bg-beige text-beige-50 text-sm font-medium',
        outline:
          'flex cursor-pointer items-center justify-center rounded-3xl border border-gray-200 shadow-xs transition duration-300 hover:-translate-y-0.5 hover:border-beige-700 hover:bg-beige-100',
        secondary: 'bg-beige-100 text-beige-700 ',
        link: 'underline-offset-4 hover:underline text-beige',
        pill: 'bg-beige-100 text-beige-700 hover:bg-beige-100/80 rounded-2xl font-semibold h-8 px-3',
        card: 'rounded-none bg-white border border-gray-200 text-beige-700 hover:bg-gray-100',
        // cta: 'rounded-full bg-indigo-600 text-center text-lg font-medium text-gray-300',
        cta: [
          'bg-beige-100 hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]',
          '[&_.highlight]:ml-2',
        ],
      },
      size: {
        default: 'h-10 py-2 px-4',
        xs: 'h-6 px-2 ',
        sm: 'h-8 px-3',
        lg: 'h-12 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
Button.displayName = 'Button';

export { Button, buttonVariants };
