import { UserBook, useUpdateUserBookOrderMutation, } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";
import { ActionState, UseActionOptions, createSafeAction } from "@/lib/create-safe-action";
import { useState } from "react";
import { z } from "zod";

export const UpdateUserBookOrderInput = z.object({
    items: z.array(
        z.object({
            id: z.string(),
            title: z.string(),
            order: z.number(),
            status: z.string(),
        }),
    ),
});

export type InputType = z.infer<typeof UpdateUserBookOrderInput>;
export type ReturnType = ActionState<InputType, UserBook[]> | undefined;


export const useUpdateUserBookOrder = (
    options: UseActionOptions = {}
) => {
    const [UpdateUserBookOrder] = useUpdateUserBookOrderMutation();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handler = async (input: InputType): Promise<ReturnType> => {
        setIsLoading(true);
        try {
            const { data, errors } = await UpdateUserBookOrder({
                variables: {
                    data: {
                        items: input.items
                    }
                },
                errorPolicy: "all",
            });

            if (data && data.updateUserBookOrder && !errors) {
                options.onSuccess?.(data.updateUserBookOrder);
                toast({ title: "Book reordered" });

            }
            if (errors) {
                options.onError?.(errors[0].message);
                toast({ title: errors[0].message, variant: "destructive" });
                return {
                    error: errors[0].message,
                }
            }
        } finally {
            options.onComplete?.();
            setIsLoading(false);
        }
    }
    const updateUserBookOrder = createSafeAction(UpdateUserBookOrderInput, handler);

    return {
        updateUserBookOrder,
        isLoading
    }

};
