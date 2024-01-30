"use client";
import React, { useEffect, useMemo, useState } from "react";
import useCreateReviewModal from "@/components/modals/create-review-modal/use-create-review.modal";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { format } from "date-fns";
import { Textarea } from "../../ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../ui/dialog";
import BookCover from "../../book-cover";
import useUserBookStore from "@/stores/use-user-book-store";
import { Checkbox } from "../../ui/checkbox";
import { Rating } from "@smastrom/react-rating";
import { myStyles } from "../../book-rating";
import { ReviewDataInput } from "@/graphql/graphql";
import { useUpdateReview } from "@/modules/review/mutations/use-update-review";
import { useCreateReview } from "@/modules/review/mutations/use-create-review";
interface CreateReviewModal {
}

const CreateReviewModal: React.FC<CreateReviewModal> = ({
}) => {
    const userBook = useUserBookStore();

    const [rating, setRating] = useState(0); // Initial value
    const onChange = (open: boolean) => {
        if (!open) {
            createReviewModal.onClose();
        }
    };

    const { createReview } = useCreateReview();
    const { updateReview } = useUpdateReview();
    const createReviewModal = useCreateReviewModal();
    const { content, spoilers } = createReviewModal.review;
    useEffect(() => {
        console.log(userBook.rating)
        form.reset({
            spoilers: (createReviewModal.editId && spoilers) || false,
            review: (createReviewModal.editId && content) || "",
            rating: userBook.rating,
            review_date: new Date(),
        });
    }, [createReviewModal.review, userBook.rating])

    const [error, setError] = useState<string>("");
    const displayFormSchema = z
        .object({
            review: z.string().max(160).optional(),
            rating: z.number().min(0).max(5).optional(),
            review_date: z.date(),
            spoilers: z.boolean().optional(),
        })


    type DisplayFormValues = z.infer<typeof displayFormSchema>;
    const form = useForm<DisplayFormValues>({
        resolver: zodResolver(displayFormSchema),
        defaultValues: useMemo(() => {
            return {
                spoilers: (createReviewModal.editId && spoilers) || false,
                review: (createReviewModal.editId && content) || "",
                rating: userBook.rating,
                review_date: new Date(),
            };
        }, [createReviewModal.review, userBook.rating]),
    });

    async function onSubmit(values: DisplayFormValues) {
        let reviewInput: ReviewDataInput = {
            spoilers: (values.spoilers),
            content: (values.review),
            rating: values.rating,
        };
        if (!createReviewModal.editId) {
            //  create book if not exists

            let data = await createReview(userBook.book!.id, { ...reviewInput }, {
                id: userBook.book!.id,
                title: userBook.book!.title,
                coverImage: userBook.book!.coverImage,
                pageCount: parseInt(userBook.book.pageCount) || 0,
                author: userBook.book!.author,
                description: userBook.book!.description,
                publisher: userBook.book!.publisher || "",
                publishedDate: userBook.book!.publishedDate,
            });
            if (data) {
                createReviewModal.onClose();
            }

        } else {
            // update review
            let data = await updateReview(createReviewModal.editId, { ...reviewInput });
            if (data) {
                createReviewModal.onClose();
            }
        }

        if (values.rating) {
            userBook.updateRating(values.rating)
        }


    }

    return (
        <>
            {userBook && userBook.book &&
                < Dialog open={createReviewModal.isOpen} onOpenChange={onChange}>
                    <DialogContent className="flex min-w-[720px]">
                        <div className="flex gap-8 min-w-full">
                            <BookCover src={userBook.book.coverImage} />
                            <div className="flex text-sm flex-col w-[fill-available] justify-evenly">
                                <DialogHeader>
                                    {
                                        createReviewModal.editId ? (
                                            <DialogTitle className="text-slate-500 font-light">
                                                Edit a review
                                            </DialogTitle>
                                        ) : (
                                            <DialogTitle className="text-slate-500 font-light">
                                                Write a review
                                            </DialogTitle>
                                        )
                                    }
                                    <DialogDescription className="text-black font-medium text-base">
                                        {userBook.book.title}
                                    </DialogDescription>
                                </DialogHeader>
                                <div>
                                    <Form {...form}>
                                        <form className="flex flex-col justify-between" onSubmit={form.handleSubmit(onSubmit)}>
                                            {formBody()}
                                            {error && (
                                                <p
                                                    className={"pt-2 pb-1 text-sm font-medium text-red-500"}
                                                >
                                                    {error}
                                                </p>
                                            )}
                                            {formFooter()}
                                        </form>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            }
        </>
    );


    function formBody() {
        return (
            <div className="pt-2 pb-5">
                <div className="flex gap-8">
                    <div className="flex items-center gap-2">
                        <div className="text-beige items-center">Review Date</div>
                        <FormField
                            control={form.control}
                            name="review_date"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="tag"
                                                    size="xs"
                                                    className={cn(
                                                        "text-left font-normal text-black cursor-pointer py-0",
                                                        !field.value && "text-slate-500"
                                                    )}
                                                >
                                                    {field.value &&
                                                        format(field.value, "PPP")}

                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                    </Popover>
                                    <FormMessage setError={setError} />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="rating"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                                <div>My Rating</div>
                                <Rating
                                    halfFillMode="box"
                                    itemStyles={myStyles}
                                    style={{ maxWidth: 100 }}
                                    value={field.value || 0}
                                    onChange={field.onChange}
                                />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="review"
                    render={({ field }) => (
                        <FormItem className="pt-3">
                            <FormControl>
                                <Textarea
                                    placeholder="Write a review here..."
                                    className="resize-none pt-2"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage setError={setError} />
                        </FormItem>
                    )}
                />
            </div>
        );
    }

    function formFooter() {
        return (
            <div className="flex justify-between">
                <div>
                    <FormField
                        control={form.control}
                        name="spoilers"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>Thie review contains spoilers?</FormLabel>
                                </div>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="space-x-2 flex items-center justify-end">
                    <Button
                        variant="outline"
                        onClick={(e) => {
                            // close
                            createReviewModal.onClose();

                        }}
                    >
                        Cancel
                    </Button>
                    <Button type="submit" variant="default">
                        Save
                    </Button>
                </div>
            </div>
        );



    };
}
export default CreateReviewModal;
