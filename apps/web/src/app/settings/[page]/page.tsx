import { getCurrentUser } from '@/lib/auth';
import { SettingsTemplate } from '@/modules/settings/templates';

interface SettingsPageProps {
  params: {
    page: string;
  };
}

async function SettingsPage({ params }: SettingsPageProps) {
  const page = params.page;
  const user = await getCurrentUser();
  return (
    <>
      <SettingsTemplate page={page} user={user} />
    </>
  );
}

export default SettingsPage;
