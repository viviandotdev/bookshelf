import { getCurrentUser } from "@/lib/auth/session";
import { getShelves } from "@/modules/bookshelves/api/getShelves";
import { getUserBooks } from "@/modules/home/api/getUserBooks";
import { getUser } from "@/modules/profile/api/getUser";
import ProfileTemplate from "@/modules/profile/templates";
import { notFound } from "next/navigation";


interface ProfilePageProps {
    params: { user: string };
}

export default async function ProfilePage({ params }: ProfilePageProps) {

    const { shelves } = await getShelves();
    const profileUser = await getUser({ username: params.user })

    if (!profileUser || !profileUser.username) {
        return notFound();
    }

    const currentUser = await getCurrentUser();


    const currentlyReading = await getUserBooks({
        status: {
            equals: "Currently Reading"
        }
    });

    return <ProfileTemplate profileUser={profileUser} currentUser={currentUser} shelves={shelves} currentlyReading={currentlyReading} />
}
