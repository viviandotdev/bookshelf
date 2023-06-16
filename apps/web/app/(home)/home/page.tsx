import { cn } from "@/lib/utils";
import { dm_sefif_display } from "@/lib/fonts";
import { BookProgressCard } from "@/components/book-progress-card";

export default function HomePage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 relative z-0">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1
            className={cn(
              dm_sefif_display.className,
              "text-2xl/[1.25] sm:text-3xl/[1.25] md:text-4xl/[1.25]"
            )}
          >
          Welcome Back, Vivian. Here’s what you’ve been reading ... 
          </h1>
        </div>
      </section>
      <section className="container space-y-4" >
        <h3 className="text-primary font-semibold text-base">
          Currently Reading
        </h3>
        <div className="flex justify-between overflow-hidden flex-col md:flex-row m-0">
        
          <BookProgressCard />
          <BookProgressCard />
          <BookProgressCard />
        </div>
      </section>
    </>
  );
}
