import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import MultiStepComponent from './multi-step-component';

interface MultiStepDialogProps {
  className?: string;
  triggerLabel: string;
}

export const MultiStepDialog: React.FC<MultiStepDialogProps> = ({
  className = '',
  triggerLabel = 'Import books',
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant='secondary'
          className={className}
          onClick={() => setOpen(true)}
        >
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-none p-6 sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Import goodreads library</DialogTitle>
        </DialogHeader>
        <MultiStepComponent />
      </DialogContent>
    </Dialog>
  );
};

export default MultiStepDialog;
