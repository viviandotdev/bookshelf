"use client"
import React from 'react';
import { useReadsQuery } from '@/graphql/graphql';
import useUserBookStore from '@/stores/use-user-book-store';
import { SessionCard } from './session-card';
import ErrorMessage from '@/components/error-message';
import EmptyState from '@/components/empty-state';
import { Icons } from '@/components/icons';

interface SessionListProps { }

export const SessionList: React.FC<SessionListProps> = () => {
    const { userBookId } = useUserBookStore();
    const { data, loading, error } = useReadsQuery({
        variables: {
            where: {
                userBookId: {
                    equals: userBookId
                }
            }
        },
        skip: !userBookId,
    });

    // Group sessions by read
    const readsWithSessions = (data?.reads || []).map((read, readIndex) => ({
        read,
        readNumber: (data?.reads || []).length - readIndex, // Reverse order: latest read is #1
        sessions: [...(read.readingSessions || [])].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }));

    if (loading) {
        return <div className="py-8 text-center text-muted-foreground">Loading...</div>;
    }

    if (error) {
        return <ErrorMessage error={error} title="Failed to load comment feed" />;
    }

    if (!readsWithSessions.length || readsWithSessions.every(read => !read.sessions.length)) {
        return (
            <EmptyState icon={<Icons.book />} message={<div>No reading sessions found. Start reading to see your progress sessions here.</div>} />
        );
    }

    return (
        <div className="w-full -mt-4">
            {readsWithSessions.map(({ read, readNumber, sessions }) => {
                if (!sessions.length) return null;

                return (
                    <div key={read.id} className="space-y-2">
                        <div className="flex items-center gap-2">
                            <h3 className="ml-1 text-lg font-semibold text-beige-700">Read #{readNumber}</h3>
                        </div>

                        {sessions.map((session: any) => (
                            <SessionCard
                                key={session.id}
                                session={session}
                                read={read}
                                onEdit={(session) => {
                                    console.log('Edit session:', session);
                                }}
                                onDelete={(sessionId) => {
                                    console.log('Delete session:', sessionId);
                                }}
                            />
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default SessionList;
