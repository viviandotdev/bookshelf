import { DEFAULT_BOOKCOVER_PLACEHOLDER } from "@/lib/constants";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

interface BookCoverProps {
    src: string | null;
    size?: "xs" | "sm" | "lg" | "dynamic";
}

const BookCover: React.FC<BookCoverProps> = ({ src, size = "lg" }) => {
    let width: number;

    switch (size) {
        case "xs":
            width = 42;
            break;
        case "sm":
            width = 76;
            break;
        case "lg":
            width = 176;
            break;
        case "dynamic":
        default:
            width = 176; // Set a default width for "dynamic" or unrecognized sizes
            break;
    }

    return (
        <div className={`relative flex items-start`}>
            <Image
                className={`max-w-none w-[${width}px] h-auto object-contain`}
                src={src || DEFAULT_BOOKCOVER_PLACEHOLDER} // If src is empty or null, display the DEFAULT_BOOKCOVER_PLACEHOLDER
                alt={"Book Cover"}
                width={width}
                height={width * 1.5}
                onError={() => {
                    console.log('error')
                }}
            />
        </div>
    );
};

export default BookCover;

