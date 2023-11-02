import {
  useRemoveUserBookMutation,
  useUpdateUserBookMutation,
} from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";

export const useRemoveUserBook = () => {
  const [RemoveUserBook] = useRemoveUserBookMutation();

  const removeUserBook = async (bookId: string) => {
    const { data, errors } = await RemoveUserBook({
      variables: { where: { id: bookId } },
      errorPolicy: "all",
    });

    if (errors) {
      toast({
        title: errors[0].message,
        variant: "destructive",
      });
    }

    if (data && !errors) {
      toast({ title: "Successfully deleted book" });
      return true;
    }
    return false;
  };

  return { removeUserBook };
};

export const useUpdateUserBookStatus = () => {
  const [UpdateUserBook] = useUpdateUserBookMutation();
  const updateUserBookStatus = async (bookId: string, status: string) => {
    const { data, errors } = await UpdateUserBook({
      variables: {
        data: {
          status: status,
        },
        where: {
          id: bookId,
        },
      },
      errorPolicy: "all",
    });

    if (errors) {
      toast({
        title: "Error updating book",
        variant: "destructive",
      });
    }

    if (data && !errors) {
      toast({
        title: `Successfully updated book status to ${data.updateUserBook.status}`,
      });
      return true;
    }
    return false;
  };

  return {
    updateUserBookStatus,
  };
};
