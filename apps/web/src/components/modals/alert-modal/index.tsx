'use client';
import React from 'react';
import { Modal } from '@/components/ui/modal';
import { Button } from '../../ui/button';
interface AlertModalProps {
  title: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={description ? description : ''}
    >
      <div className='flex w-full items-center justify-end space-x-2 pt-6'>
        <Button
          label='Cancel'
          disabled={loading}
          variant='outline'
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          label='Continue'
          disabled={loading}
          variant='default'
          onClick={(e) => {
            e.stopPropagation();
            onConfirm();
          }}
        >
          Continue
        </Button>
      </div>
    </Modal>
  );
};
export default AlertModal;
