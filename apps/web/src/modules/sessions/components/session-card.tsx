"use client"
import React from 'react';
import { format } from 'date-fns';
import { Icons } from '@/components/icons';
import { SessionDeleteDialog } from './session-delete-dialog';
import { SessionEditDialog } from './session-edit-dialog';
import { IconButton } from '@/modules/bookshelves/components/icon-button';

interface SessionCardProps {
    session: any;
    read: any;
}

export const SessionCard: React.FC<SessionCardProps> = ({
    session,
    read,
}) => {
    const formatDatePill = (dateString: string) => {
        try {
            const date = new Date(dateString);
            return {
                month: format(date, 'MMM').toUpperCase(),
                day: format(date, 'd'),
                time: format(date, 'h:mm a'),
                full: format(date, "MMM d 'at' h:mm a"),
            };
        } catch {
            return { month: '', day: '', time: '', full: '' };
        }
    };

    const pill = formatDatePill(session.createdAt);
    const fromPage = session.startPage;
    const toPage = session.endPage;
    const completionPercentage = Math.round((session.endPage / read.capacity) * 100);

    return (
        <div className="flex items-center p-3 border border-gray-100 shadow-xs rounded-lg">
            <div className="flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-beige-100 mr-4">
                <span className="text-xs font-semibold text-beige-700">{pill.month}</span>
                <span className="text-lg font-bold text-beige-700">{pill.day}</span>
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex font-semibold text-beige-700 text-base truncate">
                    Vivian read {toPage - fromPage + 1} pages
                    <Icons.dot>.</Icons.dot>
                    <div>
                        {completionPercentage}% complete
                    </div>
                </div>
                <div className="text-xs text-gray-500 truncate">
                    Read from page {fromPage} to {toPage} on {pill.full}
                </div>
            </div>
            <div className='flex gap-4 mr-2'>
                <SessionEditDialog
                    session={session}
                    trigger={
                        <IconButton className="rounded-sm p-1">
                            <Icons.edit className="h-4 w-4 items-center text-beige-700" />
                        </IconButton>
                    }
                />
                <SessionDeleteDialog
                    sessionId={session.id}
                    trigger={
                        <IconButton className="rounded-sm p-1 border-red-200 hover:border-red-300 hover:bg-red-50">
                            <Icons.delete className="h-4 w-4 items-center text-red-600" />
                        </IconButton>
                    }
                />
            </div>
        </div>
    );
};

export default SessionCard;
