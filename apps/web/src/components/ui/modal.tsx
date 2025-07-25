'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface ModalProps {
    title?: string;
    description?: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children,
}) => {
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>

            <DialogContent className='p-8'>

                <DialogHeader>
                    {
                        title ? (
                            <>
                                <DialogTitle>{title}</DialogTitle>
                                <DialogDescription>{description}</DialogDescription>
                            </>
                        )
                            :
                            <VisuallyHidden>
                                <DialogTitle>{title}</DialogTitle>
                            </VisuallyHidden>




                    }

                </DialogHeader>

                <div>{children}</div>
            </DialogContent>
        </Dialog >
    );
};
