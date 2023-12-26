"use client";

import { ElementRef, useRef } from "react";
import { MoreHorizontal, X } from "lucide-react";
;
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface ColumnOptionsProps {
};

export const ColumnOptions = ({
}: ColumnOptionsProps) => {
    const closeRef = useRef<ElementRef<"button">>(null);


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="h-auto w-auto p-2" variant={"tag"}>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="px-1 py-1 flex-col w-min-content" side="bottom" align="start"
            >

                <DropdownMenuItem
                    onClick={() => {

                    }}
                >
                    Hide
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => {

                    }}
                >
                    Add book
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    );
};
