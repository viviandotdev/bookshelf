import { getCurrentUser } from '@/lib/auth';
import JournalTemplate from '@/modules/journal/templates';

export default async function JournalPage() {
    const user = await getCurrentUser();
    return (
        <main className='container z-40 mx-auto flex-1 '>
            <JournalTemplate
                title={"Journal Entries for " + user?.username}
            />
        </main>
    );
}
