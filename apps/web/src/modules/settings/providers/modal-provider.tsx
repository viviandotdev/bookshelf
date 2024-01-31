"use client";

import { useEffect, useState } from "react";
import { ChangePasswordModal } from "../components/modals/change-password";
export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <ChangePasswordModal />

        </>
    );
}
