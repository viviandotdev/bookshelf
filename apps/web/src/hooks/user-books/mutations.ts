import {
  UserBookUpdateInput,
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

export const useUpdateUserBook = () => {
  const [UpdateUserBook] = useUpdateUserBookMutation();
  const updateUserBook = async (
    bookId: string,
    updateInput: UserBookUpdateInput
  ) => {
    const { data, errors } = await UpdateUserBook({
      variables: {
        data: updateInput,
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
      return data.updateUserBook;
    }
    return null;
  };

  return {
    updateUserBook,
  };
};
