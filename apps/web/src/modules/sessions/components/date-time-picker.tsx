"use client"
import * as React from "react"
import { CalendarIcon, ClockIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { DateInput, TimeField } from "@/components/ui/datefield-rac"

export function Calendar24({ value, onChange }: { value?: Date; onChange: (val: Date) => void }) {
    const [open, setOpen] = React.useState(false)
    // Split value into date and time strings for the UI
    const dateStr = value ? value.toISOString().slice(0, 10) : ""
    const timeStr = value ? value.toTimeString().slice(0, 5) : "";
    // Handlers
    const handleDateChange = (date: Date | undefined) => {
        if (!date) return;
        // Keep the time from value if present
        let hours = value ? value.getHours() : 0;
        let minutes = value ? value.getMinutes() : 0;
        let seconds = value ? value.getSeconds() : 0;
        const newDate = new Date(date);
        newDate.setHours(hours, minutes, seconds, 0);
        onChange(newDate);
        setOpen(false);
    };
    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!value) return;
        const [hours, minutes] = e.target.value.split(":").map(Number);
        const newDate = new Date(value);
        newDate.setHours(hours || 0, minutes || 0, 0, 0);
        onChange(newDate);
    };
    return (
        <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-2 flex-1">
                <Label htmlFor="date-picker" className="text-black font-medium" >
                    Read Date
                </Label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            id="date-picker"
                            className="w-full h-10 hover:bg-white border border-neutral-300 bg-white shadow-xs justify-between font-normal group"
                        >
                            <span
                                className={cn("truncate")}
                            >
                                {value ? format(value.toLocaleDateString(), "PPP") : "Select date"}
                            </span>
                            <CalendarIcon
                                size={16}
                                className="shrink-0 transition-colors text-neutral-400 group-hover:text-neutral-700"
                                aria-hidden="true"
                            />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-2" align="start">
                        <Calendar
                            mode="single"
                            selected={value}
                            captionLayout="dropdown"
                            onSelect={handleDateChange}
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <TimeField className="flex flex-col gap-2 flex-1">
                <Label htmlFor="time-picker" className="text-black font-medium">
                    Read Time
                </Label>
                <div className="relative">
                    <Input
                        type="time"
                        id="time-picker"
                        step="60"
                        value={timeStr}
                        onChange={e => {
                            if (!value) return;
                            const [hours, minutes] = e.target.value.split(":").map(Number);
                            const newDate = new Date(value);
                            newDate.setHours(hours || 0, minutes || 0, 0, 0);
                            onChange(newDate);
                        }}
                        className="relative w-full h-10 border border-neutral-300 bg-white shadow-xs appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                    />
                    <div className="text-neutral-500/80 pointer-events-none absolute inset-y-0 end-0 z-10 flex items-center justify-center pe-3 dark:text-neutral-400/80">
                        <ClockIcon size={16} aria-hidden="true" />
                    </div>
                </div>
            </TimeField>
        </div>
    )
}
