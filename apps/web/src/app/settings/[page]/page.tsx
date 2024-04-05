import { getCurrentUser } from '@/lib/auth';
import { getUser } from '@/modules/profile/queries/getUser';
import { SettingsTemplate } from '@/modules/settings/templates';

interface SettingsPageProps {
  params: {
    page: string;
  };
}

async function SettingsPage({ params }: SettingsPageProps) {
  const page = params.page;
  const user = await getCurrentUser();
  const userInfo = await getUser({ username: user.username });
  return (
    <>
      <SettingsTemplate page={page} user={userInfo!} />
    </>
  );
}

export default SettingsPage;
