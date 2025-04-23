import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface MenuButtonProps {
    onClick: () => void;
    className?: string;
    title: string;
    icon: LucideIcon;
}

export default function MenuButton({ onClick, className = '', title, icon: Icon }: MenuButtonProps) {
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <Button
                onClick={onClick}
                variant='pill'
                className='h-10 gap-2  bg-white border border-gray-200 shadow-sm rounded-md text-base text-black font-normal transition duration-300 hover:-translate-y-0.5 hover:border hover:border-beige-700 hover:bg-beige-100'
                title={title}
            >
                <Icon className="w-5 h-5" />
                <span className="text-sm ">{title}</span>
            </Button>
            {/* <span className="text-xs ">{title}</span> */}
        </div>
    );
}
