import { Button } from "@/components/ui/button";
import useChangePasswordModal from "./modals/change-password/use-change-password-modal";
import { LucideIcon } from "lucide-react";
import { ChangeEmailModal } from "./modals/change-email";
import useChangeEmailModal from "./modals/change-email/use-change-email-modal";

interface ButtonProps {
    config: { title: string; button: string; info: string; icon: LucideIcon };
}

const ChangeButton = ({ config }: ButtonProps) => {

    const changePasswordModal = useChangePasswordModal();
    const changeEmailModal = useChangeEmailModal();
    const handleClick = () => {
        if (config.title === "Password") {
            changePasswordModal.onOpen();
        } else {
            changeEmailModal.onOpen();
        }
    };

    return (
        <Button variant="secondary" onClick={handleClick}>
            {config.button}
        </Button>
    );
};

export default ChangeButton
