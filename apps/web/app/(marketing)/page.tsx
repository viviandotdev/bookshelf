import { cn } from "@/lib/utils";
import { dm_sefif_display } from "@/lib/fonts";
import { BookProgressCard } from "@/components/book-progress-card";

export default function IndexPage() {
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
            Welcome to Bookcue, A place to store and track your favorite books
          </h1>
        </div>
      </section>
    </>
  );
}
