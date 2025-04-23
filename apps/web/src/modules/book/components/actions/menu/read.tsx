import { CheckIcon } from "lucide-react";
import MenuButton from "./menu-button";

interface ReadButtonProps {
    onClick: () => void;
    className?: string;
}

export default function ReadButton({ onClick, className = '' }: ReadButtonProps) {
    return (
        <MenuButton
            onClick={onClick}
            className={className}
            title="Read"
            icon={CheckIcon}
        />
    );
}
