"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

interface BackButtonProps {
    href: string;
    label: string;
};

export const BackButton = ({
    href,
    label,
}: BackButtonProps) => {
    return (
        <Button
            variant="link"
            className="font-normal w-full hover:bg-white"
            size="sm"
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
};
