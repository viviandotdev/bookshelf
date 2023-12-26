"use client"
import { Icons } from "@/components/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { viewSelects } from "@/config/books";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
interface ViewOptionsProps {
    view: string
setView: Dispatch<SetStateAction<string>>

}
export const ViewOptions: React.FC<ViewOptionsProps> = ({ view, setView }) => {
    let selectedView = viewSelects.find((option) => option.value === view) || viewSelects[2];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={"tag"}
                    size={"xs"}
                    className={"bg-white px-0 mr-4"}
                >
                    {<selectedView.icon className={cn("mr-2 h-4 w-4")} />}
                    {selectedView.label}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                avoidCollisions={false}
                align="start" side={"bottom"}
                className="w-48">
                <DropdownMenuLabel>View</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {viewSelects.slice().reverse().map((option) => (
                    <DropdownMenuItem
                        key={option.label}
                        className={cn(option.value === view && "font-bold")}
                        onClick={() => {
                            setView(option.value)
                        }}
                    >
                        <div>
                            {option.icon &&
                                <option.icon
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        option.value === view
                                            ? "opacity-100"
                                            : "opacity-40"
                                    )}
                                />
                            }
                        </div>
                        {option.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>

    );
}
