import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="grid w-full gap-10">
            <div className="mx-auto w-[800px] space-y-6">
                <Skeleton className="h-[50px] w-full" />
            </div>
        </div>
    );
}
