import { PlayIcon } from "lucide-react";
import MenuButton from "./menu-button";

interface StartReadingButtonProps {
    onClick: () => void;
    className?: string;
}

export default function StartReadingButton({ onClick, className = '' }: StartReadingButtonProps) {
    return (
        <MenuButton
            onClick={onClick}
            className={className}
            title="Start Reading"
            icon={PlayIcon}
        />

    );
}
