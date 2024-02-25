import { getCurrentUser } from '@/lib/auth';
import { getShelves } from '@/modules/shelf/queries/getShelves';
import { getUserBooks } from '@/modules/bookshelves/queries/getUserBooks';
import { getUser } from '@/modules/profile/queries/getUser';
import ProfileTemplate from '@/modules/profile/templates';
import { notFound } from 'next/navigation';

interface ProfilePageProps {
  params: { user: string };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const currentUser = await getCurrentUser();

  const { shelves } = await getShelves();
  const profileUser = await getUser({ username: params.user });

  if (!profileUser || !profileUser.username) {
    return notFound();
  }

  const currentlyReading = await getUserBooks({
    status: {
      equals: 'Currently Reading',
    },
  });

  return (
    <ProfileTemplate
      profileUser={profileUser}
      currentUser={currentUser}
      shelves={shelves}
      currentlyReading={currentlyReading}
    />
  );
}
