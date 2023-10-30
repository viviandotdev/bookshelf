import { getCurrentUser } from "@/lib/auth/session";
import MarketingTemplate from "@/modules/main/templates/MarketingTemplate";
import HomeTemplate from "@/modules/main/templates/HomeTemplate";

export default async function IndexPage() {
  const user = await getCurrentUser();

  return <>{user ? <HomeTemplate /> : <MarketingTemplate />}</>;
}
