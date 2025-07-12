"use client"
import * as React from "react"
import { CalendarIcon } from "lucide-react"
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

export function Calendar24({ value, onChange }: { value?: Date; onChange: (val: Date) => void }) {
    const [open, setOpen] = React.useState(false)
    // Split value into date and time strings for the UI
    const dateStr = value ? value.toISOString().slice(0, 10) : ""
    const timeStr = value ? value.toTimeString().slice(0, 8) : ""
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
        const [hours, minutes, seconds] = e.target.value.split(":").map(Number);
        const newDate = new Date(value);
        newDate.setHours(hours || 0, minutes || 0, seconds || 0, 0);
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
                            className="w-full justify-between hover:bg-white font-normal group"
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
            <div className="flex flex-col gap-2 flex-1">
                <Label htmlFor="time-picker" className="text-black font-medium">
                    Read Time
                </Label>
                <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    value={timeStr}
                    onChange={handleTimeChange}
                    className="w-full bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />

            </div>
        </div>
    )
}
