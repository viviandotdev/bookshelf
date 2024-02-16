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
    BookOpen,
    Dot,
    LayoutGrid,
    LayoutList,
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
    Eye, Mail, LockIcon,


} from "lucide-react";
import { DotsVerticalIcon, LayoutIcon } from "@radix-ui/react-icons";

export type Icon = LucideIcon;

const bookShelf = ({ className }: { className: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M9 3v15h3V3zm3 2l4 13l3-1l-4-13zM5 5v13h3V5zM3 19v2h18v-2z" />
    </svg>
);



const trendingUp = ({ className }: { className: string }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
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
    read: CheckCircle2,
    bookOpen: BookOpen,
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
    abondoned: BanIcon,
    save: Bookmark,
    comment: MessageSquare,
    kanban: LayoutIcon,
    view: Eye,
    email: Mail,
    password: LockIcon,
    trendingUp: trendingUp,
    finished: CheckCircle2


};
