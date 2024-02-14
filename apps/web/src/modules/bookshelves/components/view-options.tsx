"use client"
import { viewSelects } from "@/config/books";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
interface ViewOptionsProps {
    view: string
    setView: Dispatch<SetStateAction<string>>

}
export const ViewOptions: React.FC<ViewOptionsProps> = ({ view, setView }) => {
    let selectedView = viewSelects.find((option) => option.value === view) || viewSelects[2];

    return (
        <div className="flex space-x-2 self-center">
            {viewSelects.slice().reverse().map((option) => (
                <div key={option.value} className={cn("p-2", option.value == view ? "bg-beige-100 rounded-lg" : "")}><option.icon onClick={
                    () => {
                        setView(option.value)
                    }

                } className={cn(
                    "h-6 w-6 cursor-pointer fill-white opacity-30"
                )} /></div>

            ))}

        </div>

    );
}
