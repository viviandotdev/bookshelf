import JournalTemplate from '@/modules/journal/templates';
import React from 'react'

interface JournalPageProps {
    params: { bookId: string };
}

export const JournalPage: React.FC<JournalPageProps> = ({ params }) => {
    return (
        <main className='container z-40 mx-auto flex-1 '>
            <JournalTemplate bookId={params.bookId} />
        </main>
    );
}
export default JournalPage
