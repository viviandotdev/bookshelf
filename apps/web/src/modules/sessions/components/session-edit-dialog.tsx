import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useApolloClient } from "@apollo/client";
import { useUpdateReadingSessionMutation } from "@/graphql/graphql";
import { IconButton } from "@/modules/bookshelves/components/icon-button";
import { Icons } from "@/components/icons";
import { Calendar24 } from "./date-time-picker";

type SessionEditDialogProps = {
    session: {
        id: string;
        createdAt: string;
        startPage: number;
        endPage: number;
    };
    trigger?: React.ReactNode;
};

type FormData = {
    dateTime: Date | string;
    startPage: number;
    endPage: number;
};

export function SessionEditDialog({
    session,
    trigger,
}: SessionEditDialogProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const client = useApolloClient();
    const [updateReadingSession] = useUpdateReadingSessionMutation();

    // Calculate start and end pages from current session data
    const currentStartPage = session.startPage;
    const currentEndPage = session.endPage;

    const defaultDate = new Date(session.createdAt);
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors, isDirty },
    } = useForm<FormData>({
        defaultValues: {
            dateTime: defaultDate,
            startPage: currentStartPage,
            endPage: currentEndPage,
        },
        mode: "onChange",
    });
    const dateTime = watch("dateTime");

    // Watch form values for calculations
    const startPage = watch("startPage");
    const endPage = watch("endPage");

    // Calculate progress and pagesRead based on start and end pages
    const calculatedProgress = endPage;
    const calculatedPagesRead = endPage - startPage + 1;

    // Reset form when session changes or dialog opens
    useEffect(() => {
        if (isOpen) {
            reset({
                dateTime: defaultDate,
                startPage: currentStartPage,
                endPage: currentEndPage,
            });
        }
    }, [session, isOpen, reset, currentStartPage, currentEndPage]);

    const handleUpdateSession = async (sessionId: string, updates: any) => {
        try {
            const result = await updateReadingSession({
                variables: {
                    sessionId: sessionId,
                    startPage: updates.startPage,
                    endPage: updates.endPage,
                    date: updates.date,
                },
            });

            if (result.data?.updateReadingSession) {
                // Invalidate the cache to refresh the session data
                client.cache.modify({
                    id: client.cache.identify({ __typename: 'ReadingSession', id: sessionId }),
                    fields: (_value, { INVALIDATE }) => INVALIDATE,
                });
                return true;
            } else {
                console.error('Update error: No data returned from mutation');
                return false;
            }
        } catch (error) {
            console.error('Update error:', error);
            return false;
        }
    };

    const onSubmit = async (data: FormData) => {
        setIsSaving(true);
        // Use dateTime as ISO string
        const isoString = (data.dateTime instanceof Date ? data.dateTime : new Date(data.dateTime)).toISOString();
        const updates: any = {};
        if (data.endPage !== session.endPage) updates.endPage = data.endPage;
        if (data.startPage !== session.startPage) updates.startPage = data.startPage;
        if (isoString !== new Date(session.createdAt).toISOString()) {
            updates.date = isoString;
        }
        const success = await handleUpdateSession(session.id, updates);
        if (success) {
            setIsOpen(false);
            toast({
                title: "Session updated successfully",
                variant: "success",
            });
        } else {
            toast({
                title: "Failed to update session",
                description: "Please try again",
                variant: "destructive",
            });
        }
        setIsSaving(false);
    };

    const handleClose = () => {
        setIsOpen(false);
        // Reset form to original values
        reset({
            dateTime: defaultDate,
            startPage: currentStartPage,
            endPage: currentEndPage,
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {trigger || (
                    <IconButton>
                        <Icons.edit className="h-4 w-4" />
                    </IconButton>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Edit Reading Session</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-2">
                    <div className="space-y-2 w-full">
                        <Calendar24
                            value={dateTime as Date}
                            onChange={(val: Date) => setValue("dateTime", val, { shouldDirty: true })}
                        />
                    </div>

                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col gap-2 flex-1">
                            <Label htmlFor="date-picker" className="text-black font-medium" >
                                Start Page
                            </Label>
                            <Input
                                id="startPage"
                                type="number"
                                className="w-full bg-white shadow-xs border border-neutral-100"
                                {...register("startPage", {
                                    required: "Start page is required",
                                    min: {
                                        value: 1,
                                        message: "Start page must be at least 1"
                                    },
                                    max: {
                                        value: 10000,
                                        message: `Start page cannot exceed ${10000}`
                                    },
                                    valueAsNumber: true,
                                })}
                                min="1"
                                max={10000}
                                placeholder="Starting page number"
                            />

                        </div>
                        <div className="flex flex-col gap-1 flex-1">
                            <Label htmlFor="date-picker" className="text-black font-medium" >
                                End Page
                            </Label>
                            <Input
                                id="endPage"
                                type="number"
                                className="w-full bg-white shadow-xs border border-neutral-100"
                                {...register("endPage", {
                                    required: "End page is required",
                                    min: {
                                        value: startPage || 1,
                                        message: "End page must be at least the start page"
                                    },
                                    max: {
                                        value: 10000,
                                        message: `End page cannot exceed ${10000}`
                                    },
                                    valueAsNumber: true,
                                })}
                                min={startPage || 1}
                                max={10000}
                                placeholder="Ending page number"
                            />

                        </div>
                    </div>
                    {errors.startPage ? (
                        <p className="text-sm text-red-600">{errors.startPage.message}</p>
                    ) : errors.endPage ? (
                        <p className="text-sm text-red-600">{errors.endPage.message}</p>
                    ) : errors.dateTime ? (
                        <p className="text-sm text-red-600">{errors.dateTime.message}</p>
                    ) : null}
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleClose}
                            disabled={isSaving}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={isSaving || !isDirty}
                        >
                            {isSaving ? "Saving..." : "Save Changes"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
