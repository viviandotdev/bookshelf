import { CheckIcon } from "lucide-react";
import MenuButton from "./menu-button";

interface UpNextButtonProps {
    onClick: () => void;
    className?: string;
}

export default function UpNextButton({ onClick, className = '' }: UpNextButtonProps) {
    return (
        <MenuButton
            onClick={onClick}
            className={className}
            title="Up Next"
            icon={CheckIcon}
        />
    );
}
