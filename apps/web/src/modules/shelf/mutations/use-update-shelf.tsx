import { Shelf, useUpdateShelfMutation } from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';
import {
  ActionState,
  UseActionOptions,
  createSafeAction,
} from '@/lib/create-safe-action';
import { useState } from 'react';
import { z } from 'zod';

export const UpdateShelfInput = z.object({
  id: z.string(),
  name: z.string(),
});
export type InputType = z.infer<typeof UpdateShelfInput>;
export type ReturnType = ActionState<InputType, Shelf> | undefined;

export const useUpdateShelf = (options: UseActionOptions = {}) => {
  const [UpdateShelf] = useUpdateShelfMutation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handler = async (input: InputType): Promise<ReturnType> => {
    setIsLoading(true);
    try {
      const { data, errors } = await UpdateShelf({
        variables: {
          data: {
            name: input.name,
          },
          where: {
            id: input.id,
          },
        },
        errorPolicy: 'all',
      });

      if (data && data.updateShelf && !errors) {
        options.onSuccess?.(data.updateShelf);
        toast({ title: `Shelf "${data.updateShelf.name}" updated` });
        return {
          data: data.updateShelf as Shelf,
        };
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
  const updateShelf = createSafeAction(UpdateShelfInput, handler);

  return {
    updateShelf,
    isLoading,
  };
};
