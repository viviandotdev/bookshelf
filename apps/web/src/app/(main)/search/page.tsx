import SeachTemplate from "@/modules/search/templates";
import { getBooks } from "@/modules/search/api/getBooks";
interface SearchPageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}


export default async function SearchPage({ searchParams }: SearchPageProps) {
    const { q } = searchParams
    const searchQuery = q as string
    const results = await getBooks(searchQuery);
    // console.log(results)
    return (
        <>
            <SeachTemplate hits={results} />
        </>
    );
}
