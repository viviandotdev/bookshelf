import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Icons } from "./icons";

type CardProps = React.ComponentProps<typeof Card>;

export function BookProgressCard({ className, ...props }: CardProps) {
    return (
        <Card
            className={cn(
                "sm-max:w-[60vw] md:w-[280px] lg:w-[320px] border-none shadow-none p-0 overflow-hidden",
                className
            )}
            {...props}
        >
            <CardContent className="p-4 flex gap-4">
                <div className=" flex items-center space-x-4 rounded-md">
                    <img
                        id="dimg_3"
                        className="max-w-none"
                        data-deferred="2"
                        height="121.5"
                        width="75.75"
                        alt=""
                        data-atf="1"
                        data-frt="0"
                        src="data:image/jpeg;base64,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"
                    />
                </div>
                <div className="flex items-start flex-col justify-center gap-1 xl:gap-2">
                    <CardTitle className="text-[16px] leading-tight ">
                        When Breath Becomessfjslakfjlksjflksdjflasdjf;lksadjfl
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-1">
                        by Paul Kalanit
                    </CardDescription>
                    <Button size={"xs"} className="text-xs xl:text-sm xl:h-9 xl:px-3">
                        {" "}
                        Currently Reading <Icons.chevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
            <CardFooter
                className={cn(
                    "sm-max:w-[60vw] md:w-[280px] lg:w-[320px]",
                    "justify-bewteen space-x-2"
                )}
                {...props}
            >
                <Progress value={33} />
                <div className="text-sm">33%</div>
            </CardFooter>
        </Card>
    );
}
