import { getCurrentUser } from "@/lib/auth/session";
import { getShelves } from "@/modules/bookshelves/api/getShelves";
import { getUserBooks } from "@/modules/home/api/getUserBooks";
import HomeTemplate from "@/modules/home/templates";
import MarketingTemplate from "@/modules/marketing/templates";

export default async function IndexPage() {
    const user = await getCurrentUser();
    const { shelves } = await getShelves();
    if (user) {
        const currentlyReading = await getUserBooks({
            status: {
                equals: "Currently Reading"
            }
        });

        return <HomeTemplate shelves={shelves} currentlyReading={currentlyReading} />;
    }
    else {
        return <MarketingTemplate />;
    }
}
