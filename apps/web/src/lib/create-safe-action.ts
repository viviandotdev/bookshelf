import { z } from 'zod';

export interface UseActionOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
  onComplete?: () => void;
}

export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type ActionState<TInput, TOutput> = {
  fieldErrors?: FieldErrors<TInput>;
  error?: string | null;
  data?: TOutput;
};

export const createSafeAction = <TInput, TOutput>(
  schema: z.Schema<TInput>,
  handler: (
    validatedData: TInput
  ) => Promise<ActionState<TInput, TOutput> | undefined>
) => {
  return async (
    data: TInput
  ): Promise<ActionState<TInput, TOutput> | undefined> => {
    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      return {
        fieldErrors: validationResult.error.flatten()
          .fieldErrors as FieldErrors<TInput>,
      };
    }

    return handler(validationResult.data);
  };
};
