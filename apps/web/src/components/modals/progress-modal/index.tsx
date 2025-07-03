'use client';
import React from 'react';
import { Modal } from '@/components/ui/modal';
import useProgressModal from './use-progress-modal';
import ProgressTab from './components/progress-tab';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import SessionsTab from './components/sessions-tab';

interface ProgressModalProps { }

export const ProgressModal: React.FC<ProgressModalProps> = () => {
    const {
        isOpen,
        onClose,
    } = useProgressModal();

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={'Reading Progress'}>
            <ProgressTab />
        </Modal>
    );
};

export default ProgressModal;
