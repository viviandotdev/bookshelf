import { useLikeReviewMutation } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";

export const useLikeReview = () => {
    const [likeReviewMutation] = useLikeReviewMutation();

    const likeReview = async (reviewId: string, value: boolean) => {
        try {
            const { data, errors } = await likeReviewMutation({
                variables: {
                    where: {
                        id: reviewId,
                    },
                    value,
                },
                errorPolicy: "all",
            });

            if (errors) {
                console.log(errors);
                toast({
                    title: "Error liking review",
                    variant: "destructive",
                });
                return null;
            }

            if (data && !errors) {
                toast({
                    title: "Liked Review",
                });
                return data.likeReview;
            }
            return null;
        } catch (error) {
            console.error("Error liking review:", error);
            toast({
                title: "Error liking review",
                variant: "destructive",
            });
            return null;
        }
    };

    return {
        likeReview,
    };
};
