// BookCover.tsx

import { DEFAULT_BOOKCOVER_PLACEHOLDER } from "@/lib/constants";
import Image from "next/image";

interface BookCoverProps {
    src: string | null;
    size?: "sm" | "lg" | "dynamic";
}

const BookCover: React.FC<BookCoverProps> = ({ src, size = "lg" }) => {
    const width = size === "sm" ? 48 : 176;
    return (
        <div className={`relative w-${width} h-auto`}>
            <Image
                src={src ? src : DEFAULT_BOOKCOVER_PLACEHOLDER}
                alt={`Book cover`}
                width={width}
                height={264}
            />
        </div>
    );
};

export default BookCover;
