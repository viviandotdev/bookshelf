import { getCurrentUser } from '@/lib/auth';
import { getUserBooks } from '@/modules/bookshelves/queries/getUserBooks';
import { getUser } from '@/modules/profile/queries/getUser';
import ProfileTemplate from '@/modules/profile/templates';
import { notFound } from 'next/navigation';
import { Reading_Status } from '@/graphql/graphql';
import { bookCountsByUserId } from '@/modules/profile/actions/bookCountsByUserId';
import { getShelvesWithBookCovers } from '@/modules/shelf/queries/getShelvesWithBookCovers';

interface ProfilePageProps {
    params: { user: string };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
    const currentUser = await getCurrentUser();

    const { shelves } = await getShelvesWithBookCovers();
    const profileUser = await getUser({ username: params.user });

    if (!profileUser || !profileUser.username) {
        return notFound();
    }
    const bookCounts = await bookCountsByUserId(profileUser.id);
    const wantToRead = await getUserBooks(
        {
            status: {
                equals: Reading_Status.WantToRead,
            },
        },
        6
    );
    const currentlyReading = await getUserBooks(
        {
            status: {
                equals: Reading_Status.Reading,
            },
        },
        6
    );
    const upNext = await getUserBooks(
        {
            status: {
                equals: Reading_Status.UpNext,
            },
        },
        6
    );

    const finished = await getUserBooks(
        {
            status: {
                equals: Reading_Status.Finished,
            },
        },
        6
    );

    return (
        <ProfileTemplate
            bookCounts={bookCounts}
            profileUser={profileUser}
            wantToRead={wantToRead}
            upNext={upNext}
            finished={finished}
            currentUser={currentUser}
            shelves={shelves}
            currentlyReading={currentlyReading}
        />
    );
}
