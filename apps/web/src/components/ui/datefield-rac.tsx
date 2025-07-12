"use client"

import {
  composeRenderProps,
  DateFieldProps,
  DateField as DateFieldRac,
  DateInputProps as DateInputPropsRac,
  DateInput as DateInputRac,
  DateSegmentProps,
  DateSegment as DateSegmentRac,
  DateValue as DateValueRac,
  TimeFieldProps,
  TimeField as TimeFieldRac,
  TimeValue as TimeValueRac,
} from "react-aria-components"

import { cn } from "@/lib/utils"

function DateField<T extends DateValueRac>({
  className,
  children,
  ...props
}: DateFieldProps<T>) {
  return (
    <DateFieldRac
      className={composeRenderProps(className, (className) => cn(className))}
      {...props}
    >
      {children}
    </DateFieldRac>
  )
}

function TimeField<T extends TimeValueRac>({
  className,
  children,
  ...props
}: TimeFieldProps<T>) {
  return (
    <TimeFieldRac
      className={composeRenderProps(className, (className) => cn(className))}
      {...props}
    >
      {children}
    </TimeFieldRac>
  )
}

function DateSegment({ className, ...props }: DateSegmentProps) {
  return (
    <DateSegmentRac
      className={composeRenderProps(className, (className) =>
        cn(
          "text-neutral-950 data-focused:bg-neutral-100 data-invalid:data-focused:bg-red-500 data-focused:data-placeholder:text-neutral-950 data-focused:text-neutral-950 data-invalid:data-placeholder:text-red-500 data-invalid:text-red-500 data-placeholder:text-neutral-500/70 data-[type=literal]:text-neutral-500/70 inline rounded p-0.5 caret-transparent outline-hidden data-disabled:cursor-not-allowed data-disabled:opacity-50 data-invalid:data-focused:text-white data-invalid:data-focused:data-placeholder:text-white data-[type=literal]:px-0 dark:text-neutral-50 dark:data-focused:bg-neutral-800 dark:data-invalid:data-focused:bg-red-900 dark:data-focused:data-placeholder:text-neutral-50 dark:data-focused:text-neutral-50 dark:data-invalid:data-placeholder:text-red-900 dark:data-invalid:text-red-900 dark:data-placeholder:text-neutral-400/70 dark:data-[type=literal]:text-neutral-400/70",
          className
        )
      )}
      {...props}
      data-invalid
    />
  )
}

const dateInputStyle =
  "relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none data-focus-within:border-neutral-950 data-focus-within:ring-neutral-950/50 data-focus-within:ring-[3px] data-focus-within:has-aria-invalid:ring-red-500/20 dark:data-focus-within:has-aria-invalid:ring-red-500/40 data-focus-within:has-aria-invalid:border-red-500 dark:border-neutral-800 dark:bg-neutral-950 dark:data-focus-within:border-neutral-300 dark:data-focus-within:ring-neutral-300/50 dark:data-focus-within:has-aria-invalid:ring-red-900/20 dark:dark:data-focus-within:has-aria-invalid:ring-red-900/40 dark:data-focus-within:has-aria-invalid:border-red-900"

interface DateInputProps extends DateInputPropsRac {
  className?: string
  unstyled?: boolean
}

function DateInput({
  className,
  unstyled = false,
  ...props
}: Omit<DateInputProps, "children">) {
  return (
    <DateInputRac
      className={composeRenderProps(className, (className) =>
        cn(!unstyled && dateInputStyle, className)
      )}
      {...props}
    >
      {(segment) => <DateSegment segment={segment} />}
    </DateInputRac>
  )
}

export { DateField, DateInput, DateSegment, TimeField, dateInputStyle }
export type { DateInputProps }
