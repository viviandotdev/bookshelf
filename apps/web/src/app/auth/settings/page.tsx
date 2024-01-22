
import React from 'react'
import { auth } from '../../../../auth';
interface SettingsPageProps {

}

export const SettingsPage: React.FC<SettingsPageProps> = ({ }) => {
    const session = auth();
    return (
        <div>
            {JSON.stringify(session)}

        </div>
    );
}
export default SettingsPage
