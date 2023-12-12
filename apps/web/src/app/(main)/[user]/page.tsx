import { getCurrentUser } from "@/lib/auth/session";
import { getShelves } from "@/modules/bookshelves/api/getShelves";
import { getUserBooks } from "@/modules/home/api/getUserBooks";
import ProfileTemplate from "@/modules/profile/templates";


interface ProfilePageProps {
    params: { user: string };
}

export default async function ProfilePage({ params }: ProfilePageProps) {

    const { shelves } = await getShelves();
    const user = await getCurrentUser();
    const currentlyReading = await getUserBooks({
        status: {
            equals: "Currently Reading"
        }
    });

    return <ProfileTemplate profileUsername={params.user} currentUsername={user.userName} shelves={shelves} currentlyReading={currentlyReading} />
}
