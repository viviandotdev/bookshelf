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
    const user = await getCurrentUser();
    const userInfo = await getUser({ username: user.username });
    return (
        <>
            <SettingsTemplate page={page} user={userInfo!} />
        </>
    );
}

export default SettingsPage;
