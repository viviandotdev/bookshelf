import { BookmarkIcon } from "lucide-react";
import MenuButton from "./menu-button";

interface ToReadButtonProps {
    onClick: () => void;
    className?: string;
}

export default function ToReadButton({ onClick, className = '' }: ToReadButtonProps) {
    return (
        <MenuButton
            onClick={onClick}
            className={className}
            title="To Read"
            icon={BookmarkIcon}
        />
    );
}
