import { getCurrentUser } from "@/src/lib/auth/session";
import HomeTemplate from "@/src/modules/home/templates";
import MarketingTemplate from "@/src/modules/marketing/templates";

export default async function IndexPage() {
  const user = await getCurrentUser();

  return <>{user ? <HomeTemplate /> : <MarketingTemplate />}</>;
}
