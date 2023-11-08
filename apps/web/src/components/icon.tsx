import { Icons } from './icons';

export const getLucideIcon = (iconName: string) => {
    const LucideIconComponent = Icons[iconName];
    if (LucideIconComponent) {
        return LucideIconComponent;
    } else {
        // Handle the case when the icon name is not found (return a default or null component)
        return null;
    }
};


import React from 'react';

const DynamicIcon = ({ iconName }) => {
    const LucideIcon = getLucideIcon(iconName);

    if (LucideIcon) {
        return <LucideIcon className="h-5 w-5 mr-2" />;
    } else {
        // Handle the case when the icon name is not valid (return an error message or a default icon)
        return <span>Invalid Icon</span>;
    }
};

export default DynamicIcon;
