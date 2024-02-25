import { Shelf, useDeleteShelfMutation } from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';
import {
  ActionState,
  createSafeAction,
  UseActionOptions,
} from '@/lib/create-safe-action';
import { useState } from 'react';
import { z } from 'zod';

export const DeleteShelfInput = z.object({
  id: z.string(),
});
export type InputType = z.infer<typeof DeleteShelfInput>;
export type DeleteReturnType = ActionState<InputType, Shelf> | undefined;

export const useDeleteShelf = (options: UseActionOptions = {}) => {
  const [DeleteShelf] = useDeleteShelfMutation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handler = async (input: InputType): Promise<DeleteReturnType> => {
    setIsLoading(true);
    try {
      const { data, errors } = await DeleteShelf({
        variables: {
          where: {
            id: input.id,
          },
        },
        errorPolicy: 'all',
      });

      if (errors) {
        options.onError?.(errors[0].message);
        toast({ title: 'Error deleting shelf', variant: 'destructive' });
        return {
          error: errors[0].message,
        };
      }

      if (data && !errors) {
        options.onSuccess?.(data.deleteShelf);
        toast({ title: `Shelf "${data.deleteShelf.name}" deleted` });
        return {
          data: data.deleteShelf,
        };
      }
    } finally {
      options.onComplete?.();
      setIsLoading(false);
    }
  };

  const deleteShelf = createSafeAction(DeleteShelfInput, handler);

  return {
    deleteShelf,
    isLoading,
  };
};
