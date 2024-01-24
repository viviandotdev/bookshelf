import { getCurrentUser } from "@/lib/auth";
import { getShelves } from "@/modules/shelf/queries/getShelves";
import { getUserBooks } from "@/modules/bookshelves/queries/getUserBooks";
import HomeTemplate from "@/modules/home/templates";
import MarketingTemplate from "@/modules/marketing/templates";

export default async function IndexPage() {
    const user = await getCurrentUser();
    if (user) {
        const { shelves } = await getShelves();
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
