import { DEFAULT_BOOKCOVER_PLACEHOLDER } from "@/lib/constants";
import Image from "next/image";

interface BookCoverProps {
    src: string | null;
    size?: "sm" | "lg" | "dynamic";
}

const BookCover: React.FC<BookCoverProps> = ({ src, size = "lg" }) => {
    const width = size === "sm" ? 76 : 176;
    // const height = size == "sm" ? `h-[112px]` : `h-[264px]`;
    return (
        <div className={`relative flex items-start`}>
            <Image
                className={`max-w-none w-[76px] object-contain`}
                src={src ? src : DEFAULT_BOOKCOVER_PLACEHOLDER}
                alt={`Book cover`}
                width={width}
                height={width * 1.5}
            // priority={false}
            />
        </div>
    );
};

export default BookCover;
