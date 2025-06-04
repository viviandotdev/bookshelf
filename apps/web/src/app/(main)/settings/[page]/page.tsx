import { getCurrentUser } from '@/lib/auth';
import { getUser } from '@/modules/profile/queries/getUser';
import { SettingsTemplate } from '@/modules/settings/templates';

interface SettingsPageProps {
    params: {
        page: string;
    };
}
export const maxDuration = 60; // Applies to the actions

async function SettingsPage({ params }: SettingsPageProps) {

    const { page } = await params
    return (
        <>
            <SettingsTemplate page={page} />
        </>
    );
}

export default SettingsPage;
