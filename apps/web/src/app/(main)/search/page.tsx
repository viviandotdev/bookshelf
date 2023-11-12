import SeachTemplate from "@/modules/search/templates";
import { getBooks } from "@/modules/search/api/getBooks";
import { Suspense } from "react";
interface SearchPageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}


export default async function SearchPage({ searchParams }: SearchPageProps) {
    const { q } = searchParams
    const searchQuery = q as string
    const { hits, count } = await getBooks(searchQuery);
    // console.log(results)
    return (
        <SeachTemplate hits={hits} count={count} />
    );
}
