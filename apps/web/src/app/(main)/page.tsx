import { getCurrentUser } from "@/lib/auth/session";
import { getUserBooks } from "@/modules/home/api/getUserBooks";
import HomeTemplate from "@/modules/home/templates";
import MarketingTemplate from "@/modules/marketing/templates";

export default async function IndexPage() {
    const user = await getCurrentUser();
    if (user) {
        const currentlyReading = await getUserBooks({
            status: {
                equals: "Currently Reading"
            }
        });
        
        return <HomeTemplate currentlyReading={currentlyReading} />;
    }
    else {
        return <MarketingTemplate />;
    }
}
