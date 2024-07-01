import React from 'react';
import { ReadDate } from '@/graphql/graphql';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { DateSelector } from './date-selector';
import { Button } from '@/components/ui/button';

interface FinishedTabProps {
  readDate: ReadDate;
}

const formatDate = (date: Date): string => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
};

const schema = z
  .object({
    startDate: z.string().min(1),
    finishedDate: z.string().min(1),
  })
  .refine(
    (data) => {
      const start = new Date(data.startDate);
      const end = new Date(data.finishedDate);
      return start <= end;
    },
    {
      message: 'Finished date must be after start date',
      path: ['finishedDate'],
    }
  );

type FormData = z.infer<typeof schema>;

export const FinishedTab: React.FC<FinishedTabProps> = ({ readDate }) => {
  const defaultStartDate = readDate?.startDate
    ? formatDate(new Date(readDate.startDate))
    : '';
  const defaultFinishedDate = readDate?.finishedDate
    ? formatDate(new Date(readDate.finishedDate))
    : formatDate(new Date());

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      startDate: defaultStartDate,
      finishedDate: defaultFinishedDate,
    },
  });

  const onSubmit = (data: FormData) => {
    // update the database
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className='mt-8 flex w-full flex-col items-center justify-start gap-6'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-6'>
        <Controller
          name='startDate'
          control={control}
          render={({ field }) => <DateSelector label='Start Date' {...field} />}
        />
        {errors.startDate && (
          <span className='text-red-500'>{errors.startDate.message}</span>
        )}

        <Controller
          name='finishedDate'
          control={control}
          render={({ field }) => (
            <DateSelector label='Finished Date' {...field} />
          )}
        />
        {errors.finishedDate && (
          <span className='text-red-500'>{errors.finishedDate.message}</span>
        )}

        <Button
          type='submit'
          variant={'default'}
          className='mt-4 flex  h-12 w-full items-center justify-center rounded-lg  text-base font-medium text-white'
        >
          Done
        </Button>
      </form>
    </div>
  );
};

export default FinishedTab;
