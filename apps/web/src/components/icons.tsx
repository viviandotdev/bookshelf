import {
    Loader2,
    X,
    Menu,
    type Icon as LucideIcon,
    ChevronDown,
    ChevronLeft,
    User,
    ChevronRight,
    ArrowRight,
    Book,
    Dot,
    LayoutGrid,
    LayoutList,
    Settings,
    PieChart,
    Search,
    Trash,
    Library,
    ListPlus,
    Plus,
    Clock,
    ArrowDown,
    Heart,
    Pencil,
    Check,
    AlignLeft,
    CheckCircle2,
    FileDown,
    FileUp,
    BanIcon,
    Bookmark,
    MessageSquare,
    Eye,
    Mail,
    LockIcon,
    Target,
    ListStart,
    Backpack,
    Flame,
    Minus,
    CircleCheck,
    BookCheck,
} from 'lucide-react';
import { DotsVerticalIcon, LayoutIcon } from '@radix-ui/react-icons';

export type Icon = typeof LucideIcon;

const bookShelf = ({ className }: { className: string }) => (
    <svg
        className={className}
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        viewBox='0 0 24 24'
    >
        <path
            fill='currentColor'
            d='M9 3v15h3V3zm3 2l4 13l3-1l-4-13zM5 5v13h3V5zM3 19v2h18v-2z'
        />
    </svg>
);

const openBook = ({ className }: { className?: string }) => (
    <svg
        className={className}
        xmlns='http://www.w3.org/2000/svg'
        width='1.5em'
        height='1.5em'
        viewBox='0 0 24 24'
    >
        <path
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6v13m9-13v13m9-13v13'
        />
    </svg>
);

const goodReads = ({ className }: { className?: string }) => (
    <svg
        className={className}
        width='8'
        height='12'
        viewBox='0 0 8 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M0.737483 9.13696H0.799959C1.08346 9.13696 1.36916 9.13696 1.65259 9.1393C1.68833 9.1393 1.72179 9.13043 1.73297 9.18561C1.89144 9.95549 2.40257 10.39 3.13696 10.5953C3.73736 10.7629 4.34446 10.7672 4.95156 10.6349C5.70595 10.4717 6.20149 10.0106 6.46938 9.30249C6.6479 8.82817 6.70816 8.33635 6.71485 7.83549C6.71711 7.70755 6.72163 6.79868 6.71041 6.67074L6.69033 6.66413C6.6725 6.69728 6.65233 6.7281 6.63451 6.76117C6.14123 7.71207 5.26624 8.24802 4.28194 8.28561C1.98294 8.37378 0.500896 7.0281 0.44288 4.3986C0.431716 3.87576 0.48306 3.36398 0.628131 2.86101C1.08791 1.29255 2.2932 0.253515 4.06326 0.240302C5.43144 0.231469 6.3287 1.09401 6.65685 1.79111C6.66798 1.81533 6.68581 1.84183 6.71041 1.83302V0.474154H7.69923C7.69923 6.65751 7.7014 7.80241 7.7014 7.80241C7.69923 9.53409 7.10552 10.9725 5.4024 11.3805C3.85118 11.7534 1.8535 11.4865 1.02767 10.1188C0.849093 9.82086 0.764264 9.4944 0.737483 9.13696ZM4.00292 1.0455C2.83111 1.03445 1.58117 1.94333 1.43607 3.99708C1.34456 5.2986 1.7664 6.69276 3.03193 7.27526C3.64807 7.55977 4.69036 7.60607 5.44927 7.08327C6.51173 6.3509 6.84876 4.94343 6.67242 3.68604C6.45591 2.11758 5.60552 1.03887 4.00292 1.0455Z'
            fill='#4E3B2C'
        />
    </svg>
);

const googleBooks = ({ className }: { className?: string }) => (
    <svg
        className={className}
        width='10'
        height='10'
        viewBox='0 0 10 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M4.94316 3.92847V5.84528C4.94316 5.84528 6.82882 5.84278 7.59661 5.84278C7.18085 7.08545 6.53439 7.76216 4.94316 7.76216C3.33289 7.76216 2.07612 6.4748 2.07612 4.88688C2.07612 3.29895 3.33289 2.01163 4.94316 2.01163C5.7946 2.01163 6.34442 2.30673 6.84875 2.71803C7.25248 2.31991 7.21877 2.26316 8.24589 1.30661C7.37397 0.52397 6.21511 0.046875 4.94316 0.046875C2.23255 0.046875 0.0351562 2.21381 0.0351562 4.88688C0.0351562 7.55993 2.23255 9.72688 4.94316 9.72688C8.99488 9.72688 9.98515 6.2478 9.65683 3.92847H4.94316Z'
            fill='#4E3B2C'
        />
    </svg>
);

export const Icons = {
    close: X,
    spinner: Loader2,
    chevronDown: ChevronDown,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    arrowRight: ArrowRight,
    menu: Menu,
    user: User,
    book: Book,
    reading: Eye,
    finished: CheckCircle2,
    bookCheck: BookCheck,
    bookOpen: openBook,
    dot: Dot,
    layoutGrid: LayoutGrid,
    layoutList: LayoutList,
    pieChart: PieChart,
    search: Search,
    delete: Trash,
    library: Library,
    log: ListPlus,
    plus: Plus,
    date: Clock,
    down: ArrowDown,
    heart: Heart,
    edit: Pencil,
    check: Check,
    shelf: bookShelf,
    notes: AlignLeft,
    import: FileDown,
    export: FileUp,
    more: DotsVerticalIcon,
    dnf: BanIcon,
    save: Bookmark,
    comment: MessageSquare,
    kanban: LayoutIcon,
    view: Eye,
    email: Mail,
    lock: LockIcon,
    upNext: ListStart,
    owned: Backpack,
    streak: Flame,
    goal: Target,
    customize: Settings,
    goodReads,
    googleBooks,
    minus: Minus,
};
