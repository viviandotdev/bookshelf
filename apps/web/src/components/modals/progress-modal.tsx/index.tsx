'use client';
import React from 'react';
import { Modal } from '@/components/ui/modal';
import useProgressModal from './use-progress-modal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProgressTab from './components/progress-tab';
import FinishedTab from './components/finished-tab';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import useUserBookStore from '@/stores/use-user-book-store';

interface ProgressModalProps {}

export const ProgressModal: React.FC<ProgressModalProps> = () => {
  const { isOpen, onClose, readDates } = useProgressModal();
  const { userBookId } = useUserBookStore();
  const readDateWithProgress = readDates.find(
    (rd) => rd.userBookId === userBookId
  );
  console.log(readDateWithProgress);
  // no form validation, restrict user input, they can only input values i want
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={'Reading Progress'}>
      <Tabs defaultValue='account' className='w-full'>
        <TabsList className='w-full text-center'>
          <TabsTrigger className='w-full' value='account'>
            Progress
          </TabsTrigger>
          <TabsTrigger className='w-full' value='password'>
            Finished
          </TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          <ProgressTab
            readingProgress={readDateWithProgress?.readingProgress}
          />
        </TabsContent>
        <TabsContent value='password'>
          <FinishedTab readDate={readDateWithProgress} />
        </TabsContent>
      </Tabs>
    </Modal>
  );
};

export default ProgressModal;
