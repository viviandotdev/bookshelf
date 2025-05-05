import { DEFAULT_BOOKCOVER_PLACEHOLDER } from '@/lib/constants';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
interface BookCoverProps {
    src: string | null;
    size?: 'xxs' | 'xs' | 'sm' | 'lg' | 'md' | 'dynamic';
    className?: string;
}

const BookCover: React.FC<BookCoverProps> = ({
    src,
    size = 'dynamic',
    className,
}) => {
    let width: number = 0;

    switch (size) {
        case 'xxs':
            width = 36;
            break;
        case 'xs':
            width = 48;
            break;
        case 'sm':
            width = 76;
            break;
        case 'md':
            width = 106;
            break;
        case 'lg':
            width = 176;
            break;
        case 'dynamic':
        default:
            size = 'dynamic';
            break;
    }

    return (
        <span
            className={twMerge(
                'relative flex items-end justify-end justify-self-end ',
                className
            )}
        >
            {width == 0 ? (
                <Image
                    className={`max-w-non h-auto rounded-sm object-contain`}
                    src={src || DEFAULT_BOOKCOVER_PLACEHOLDER} // If src is empty or null, display the DEFAULT_BOOKCOVER_PLACEHOLDER
                    alt={'Book Cover'}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: '100%', height: 'auto' }} // optional
                />
            ) : (
                <Image
                    className={`max-w-none w-[${width}px] h-auto rounded-sm object-contain`}
                    src={src || DEFAULT_BOOKCOVER_PLACEHOLDER} // If src is empty or null, display the DEFAULT_BOOKCOVER_PLACEHOLDER
                    alt={'Book Cover'}
                    width={width}
                    height={width * 1.5}
                    style={{ height: 'auto' }} // optional
                />
            )}
        </span>
    );
};

export default BookCover;
