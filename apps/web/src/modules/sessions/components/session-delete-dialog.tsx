import { useState } from "react";
import { useRemoveReadingSessionMutation } from "@/graphql/graphql";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { useApolloClient } from "@apollo/client";

type SessionDeleteDialogProps = {
    sessionId: string;
    sessionTitle?: string;
    onSuccess?: (sessionId: string) => void;
    trigger?: React.ReactNode;
};

export function SessionDeleteDialog({
    sessionId,
    sessionTitle = "this reading session",
    onSuccess,
    trigger,
}: SessionDeleteDialogProps) {
    const [isOpen, setIsOpen] = useState(false);
    const client = useApolloClient();

    const [removeReadingSession, { loading }] = useRemoveReadingSessionMutation({
        onCompleted: (data) => {
            if (data.removeReadingSession) {
                setIsOpen(false);

                // Mark the deleted session's fields as invalid to trigger refetch

                client.refetchQueries({
                    updateCache(cache) {
                        // Invalidate the specific session that was deleted
                        cache.modify({
                            id: cache.identify({ __typename: 'ReadingSession', id: sessionId }),
                            fields: (_value, { INVALIDATE }) => INVALIDATE,
                        });
                    },
                });

                toast({
                    title: "Session deleted successfully",
                    variant: "success",
                });
                onSuccess?.(sessionId);
            }
        },
        onError: (error) => {
            toast({
                title: "Failed to delete session",
                description: error.message || "Please try again",
                variant: "destructive",
            });
        },
    });

    const handleDelete = () => {
        removeReadingSession({
            variables: {
                sessionId,
            },
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {trigger || (
                    <Button
                        variant="outline"
                        className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
                    >
                        Delete
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Reading Session</DialogTitle>
                </DialogHeader>
                <p className="text-neutral-600 dark:text-neutral-400">
                    Are you sure you want to delete {sessionTitle}? This action
                    cannot be undone.
                </p>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        variant="outline"
                        className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
                        onClick={handleDelete}
                        disabled={loading}
                    >
                        {loading ? "Deleting..." : "Delete"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
