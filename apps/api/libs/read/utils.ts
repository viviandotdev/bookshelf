import { ReadingSession, ReadingProgress } from './types';

/**
 * Calculate total reading progress from sessions
 */
export function calculateReadingProgress(sessions: ReadingSession[]): ReadingProgress {
    const totalCapacity = sessions.reduce((sum, session) => sum + session.capacity, 0);
    const totalProgress = sessions.reduce((sum, session) => sum + session.progress, 0);
    const percentage = totalCapacity > 0 ? (totalProgress / totalCapacity) * 100 : 0;

    return {
        totalCapacity,
        totalProgress,
        percentage: Math.round(percentage * 100) / 100, // Round to 2 decimal places
        sessions,
    };
}

/**
 * Group reading sessions by date
 */
export function groupSessionsByDate(sessions: ReadingSession[]) {
    const grouped = sessions.reduce((acc, session) => {
        const date = session.createdAt.toISOString().split('T')[0];
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(session);
        return acc;
    }, {} as Record<string, ReadingSession[]>);

    return Object.entries(grouped).map(([date, sessions]) => ({
        date,
        sessions,
        progress: calculateReadingProgress(sessions),
    }));
}

/**
 * Calculate reading statistics
 */
export function calculateReadingStats(sessions: ReadingSession[]) {
    if (sessions.length === 0) {
        return {
            totalSessions: 0,
            averageProgress: 0,
            totalPages: 0,
            totalPercentage: 0,
        };
    }

    const pageSessions = sessions.filter(s => s.type === 'PAGES');
    const percentageSessions = sessions.filter(s => s.type === 'PERCENTAGE');

    const totalPages = pageSessions.reduce((sum, s) => sum + s.progress, 0);
    const totalPercentage = percentageSessions.reduce((sum, s) => sum + s.progress, 0);
    const averageProgress = sessions.reduce((sum, s) => sum + s.progress, 0) / sessions.length;

    return {
        totalSessions: sessions.length,
        averageProgress: Math.round(averageProgress * 100) / 100,
        totalPages,
        totalPercentage: Math.round(totalPercentage * 100) / 100,
    };
}

/**
 * Format duration between two dates
 */
export function formatDuration(startDate: Date, endDate?: Date): string {
    const end = endDate || new Date();
    const diffInMs = end.getTime() - startDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
        return 'Today';
    } else if (diffInDays === 1) {
        return '1 day';
    } else if (diffInDays < 7) {
        return `${diffInDays} days`;
    } else if (diffInDays < 30) {
        const weeks = Math.floor(diffInDays / 7);
        return `${weeks} week${weeks > 1 ? 's' : ''}`;
    } else {
        const months = Math.floor(diffInDays / 30);
        return `${months} month${months > 1 ? 's' : ''}`;
    }
}
