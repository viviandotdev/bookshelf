'use client';
import React from 'react';
import { Modal } from '@/components/ui/modal';
import useProgressModal from './use-progress-modal';
import ProgressTab from './components/progress-tab';
import useUserBookStore from '@/stores/use-user-book-store';
import { ReadDate, ReadingProgress } from '@/graphql/graphql';

interface ProgressModalProps { }

export const ProgressModal: React.FC<ProgressModalProps> = () => {
    const { isOpen, onClose, readDates } = useProgressModal();
    const { userBookId } = useUserBookStore();

    const readDateWithProgress = readDates.find(
        (rd: ReadDate) => rd.userBookId === userBookId
    );

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={'Reading Progress'}>
            <ProgressTab
                readingProgress={
                    readDateWithProgress?.readingProgress as ReadingProgress
                }
            />
        </Modal>
    );
};

export default ProgressModal;
