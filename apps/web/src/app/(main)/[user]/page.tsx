import { getShelves } from "@/modules/bookshelves/api/getShelves";
import { getUserBooks } from "@/modules/home/api/getUserBooks";
import ProfileTemplate from "@/modules/profile/templates";

export default async function ProfilePage() {
    const { shelves } = await getShelves();
    const currentlyReading = await getUserBooks({
        status: {
            equals: "Currently Reading"
        }
    });

    return <ProfileTemplate shelves={shelves} currentlyReading={currentlyReading} />;
}
