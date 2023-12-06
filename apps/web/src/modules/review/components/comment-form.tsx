'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { UserAvatar } from '@/modules/layout/components/user-avatar';
import { User } from 'next-auth';
import useCreateComment from '../hooks/use-create-comment';
interface CommentFormProps {

    reviewId: string
}

export const CommentForm: React.FC<CommentFormProps> = ({ reviewId }) => {
    const [error, setError] = useState<string>("");
    const { loading, createComment } = useCreateComment();

    const displayFormSchema = z
        .object({
            comment: z.string().max(160).optional(),

        })
    type DisplayFormValues = z.infer<typeof displayFormSchema>;
    const form = useForm<DisplayFormValues>({
        defaultValues: {
            comment: "",
        },
        resolver: zodResolver(displayFormSchema),
    });


    async function onSubmit(values: DisplayFormValues) {
        console.log(values)
        if (values.comment) {
            await createComment(values.comment, reviewId);
        }


    }


    return (
        <div className="flex w-full gap-4 ">
            <div className="py-3">
                <UserAvatar
                    user={{ name: "test" || null }}
                    size={"default"}
                    className="h-12 w-12"
                />
            </div>
            <Form {...form}>
                <form className="flex flex-col justify-between flex-grow" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="comment"
                        render={({ field }) => (
                            <FormItem className="pt-3">
                                <FormControl>
                                    <Textarea
                                        placeholder={`Leave a comment as ${"test"}...`}
                                        className="resize-none pt-2"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage setError={setError} />
                            </FormItem>
                        )}
                    />
                    {error && (
                        <p
                            className={"pt-2 pb-1 text-[0.8rem] font-medium text-destructive"}
                        >
                            {error}
                        </p>
                    )}
                    <div className="mt-2 flex justify-end">
                        <Button disabled={loading} type="submit" variant="default" className="fit-content-width" >
                            Comment
                        </Button>

                    </div>

                </form>

            </Form>



        </div>
    );
}
export default CommentForm
