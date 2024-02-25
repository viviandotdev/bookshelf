import { Shelf, useCreateShelfMutation } from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';
import {
  ActionState,
  UseActionOptions,
  createSafeAction,
} from '@/lib/create-safe-action';
import { useState } from 'react';
import { z } from 'zod';

export const CreateShelfInput = z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  name: z.string(),
});

export type InputType = z.infer<typeof CreateShelfInput>;
export type ReturnType = ActionState<InputType, Shelf> | undefined;

export const useCreateShelf = (options: UseActionOptions = {}) => {
  const [CreateShelf] = useCreateShelfMutation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handler = async (input: InputType): Promise<ReturnType> => {
    setIsLoading(true);
    try {
      const { data, errors } = await CreateShelf({
        variables: {
          data: {
            name: input.name,
          },
        },
      });
      if (data && data.createShelf && !errors) {
        options.onSuccess?.(data.createShelf);
        toast({ title: `Shelf "${data.createShelf.name}" created` });
      }
      if (errors) {
        options.onError?.(errors[0].message);
        toast({ title: errors[0].message, variant: 'destructive' });
        return {
          error: errors[0].message,
        };
      }
    } finally {
      options.onComplete?.();
      setIsLoading(false);
    }
  };
  const createShelf = createSafeAction(CreateShelfInput, handler);
  return {
    createShelf,
    isLoading,
  };
};
