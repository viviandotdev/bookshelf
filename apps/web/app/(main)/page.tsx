import { getCurrentUser } from "@/lib/auth/session";
import HomeTemplate from "@/modules/home/templates";
import MarketingTemplate from "@/modules/marketing/templates";

export default async function IndexPage() {
  const user = await getCurrentUser();

  return <>{user ? <HomeTemplate /> : <MarketingTemplate />}</>;
}
