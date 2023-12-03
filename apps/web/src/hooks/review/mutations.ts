import { ReviewCreateInput, useCreateReviewMutation } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";

export const useCreateReview = () => {
  const [CreateReview] = useCreateReviewMutation();
  const createReview = async (
    bookId: string,
    createInput: ReviewCreateInput
  ) => {
    const { data, errors } = await CreateReview({
      variables: {
        data: createInput,
        where: {
          id: bookId,
        },
      },
      errorPolicy: "all",
    });
    if (errors) {
      toast({
        title: "Error updating review",
        variant: "destructive",
      });
    }

    if (data && !errors) {
      toast({
        title: "Successfully created Review",
      });
      return data.createReview;
    }
    return null;
  };

  return {
    createReview,
  };
};
