import { Icons } from '@/components/icons';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React from 'react'

interface SearchInputProps {

}

export const SearchInput: React.FC<SearchInputProps> = ({ }) => {
    const router = useRouter();
    const [search, setSearch] = React.useState("");
    const onSearch = () => {
        const encodedSearch = encodeURIComponent(search);
        router.push(`/search?q=${encodedSearch}`);
    };
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch();
        }
    };
    return (
        <div className={cn("relative w-full")}>
            <Input
                type="search"
                placeholder="Search Books..."
                className="h-8 w-full sm:w-64 sm:pr-12"
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <div onClick={onSearch} className="cursor-pointer absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
                <Icons.search className="h-3 w-3" />
            </div>
        </div>
    );
}
export default SearchInput
