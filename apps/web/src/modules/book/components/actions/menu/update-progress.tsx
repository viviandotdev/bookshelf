import { PencilIcon } from "lucide-react";
import MenuButton from "./menu-button";

interface UpdateProgressButtonProps {
    onClick: () => void;
    className?: string;
}

export default function UpdateProgressButton({ onClick, className = '' }: UpdateProgressButtonProps) {
    return (
        <MenuButton
            onClick={onClick}
            className={className}
            title="Update Progress"
            icon={PencilIcon}
        />
    );
}
