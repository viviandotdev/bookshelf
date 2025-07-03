"use client"
import React from 'react';
import { useReadsQuery } from '@/graphql/graphql';
import useUserBookStore from '@/stores/use-user-book-store';
import { SessionCard } from './session-card';

interface SessionsTabProps { }

export const SessionsTab: React.FC<SessionsTabProps> = () => {
    const { userBookId } = useUserBookStore();
    const { data, loading } = useReadsQuery({
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

    if (!readsWithSessions.length || readsWithSessions.every(read => !read.sessions.length)) {
        return (
            <div className="flex flex-col items-center justify-center py-8">
                <p className="text-muted-foreground">No reading sessions found.</p>
                <p className="text-sm text-muted-foreground mt-2">
                    Start reading to see your progress sessions here.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full -mt-4">
            {readsWithSessions.map(({ read, readNumber, sessions }) => {
                if (!sessions.length) return null;

                return (
                    <div key={read.id} className="space-y-2">
                        {/* Read Header */}
                        <div className="flex items-center gap-2">
                            <h3 className="ml-1 text-lg font-semibold text-beige-700">Read #{readNumber}</h3>
                        </div>

                        {/* Sessions for this read */}
                        {sessions.map((session: any) => (
                            <SessionCard
                                key={session.id}
                                session={session}
                                read={read}
                                onEdit={(session) => {
                                    // TODO: Implement edit functionality
                                    console.log('Edit session:', session);
                                }}
                                onDelete={(sessionId) => {
                                    // TODO: Implement delete functionality
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

export default SessionsTab;
