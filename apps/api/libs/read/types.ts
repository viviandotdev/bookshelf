export interface ReadWithSessions {
    id: string;
    startDate: Date;
    finishedDate?: Date;
    userBookId: string;
    readingSessions: ReadingSession[];
    UserBook: {
        id: string;
        userId: string;
        bookId: string;
        status: string;
        rating?: number;
        book: {
            id: string;
            title: string;
            subtitle?: string;
            authors: string[];
            covers: Array<{
                id: string;
                url: string;
                size: string;
                source: string;
            }>;
            identifiers: Array<{
                id: string;
                source: string;
                sourceId: string;
            }>;
        };
    };
}

export interface ReadingSession {
    id: string;
    progress: number;
    pagesRead: number;
    type: 'PAGES' | 'PERCENTAGE';
    createdAt: Date;
    readId: string;
}

export interface ReadingProgress {
    totalProgress: number;
    totalPagesRead: number;
    percentage: number;
    sessions: ReadingSession[];
}
