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

        return (
            <main className="container max-w-[1440px] flex-1 z-40 mx-auto">
                <HomeTemplate shelves={shelves} currentlyReading={currentlyReading} />;
            </main>)

    }
    else {
        return <MarketingTemplate />;
    }
}
