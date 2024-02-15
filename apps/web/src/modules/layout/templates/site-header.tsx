
import React from "react";
import MainHeader from "../components/main-header";

interface SiteHeaderProps {
    user: any
    secondary?: React.ReactNode
}

const SiteHeader = ({ user, secondary }: SiteHeaderProps) => {
    return (
        <header className="container max-w-[none] bg-background p-0">
            <MainHeader user={user} />
            <hr className="border-gray-200" />
            {secondary}

        </header>

    );

}


export default SiteHeader;
