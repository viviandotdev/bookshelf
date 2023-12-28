import {
    ReviewDataInput,
    useUpdateReviewMutation,
} from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";

export const useUpdateReview = () => {
    const [updateReviewMutation] = useUpdateReviewMutation();

    const updateReview = async (
        reviewId: string,
        updateInput: ReviewDataInput
    ) => {
        try {
            const { data, errors } = await updateReviewMutation({
                variables: {
                    data: updateInput,
                    where: {
                        id: reviewId,
                    },
                },
                errorPolicy: "all",
            });

            if (errors) {
                console.log(errors)
                toast({
                    title: "Error updating review",
                    variant: "destructive",
                });
                return null;
            }

            if (data && !errors) {
                toast({
                    title: "Updated Review",
                });
                return data.updateReview;
            }
            return null;
        } catch (error) {
            console.error("Error updating review:", error);
            toast({
                title: "Error updating review",
                variant: "destructive",
            });
            return null;
        }
    };

    return {
        updateReview,
    };
};
