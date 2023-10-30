import { useUpdateUserBookMutation } from "@/src/graphql/graphql";
import { toast } from "@/src/hooks/use-toast";

const useUpdateUserBook = () => {
  const [UpdateUserBook] = useUpdateUserBookMutation();

  const updateUserBook = async (bookId: string, status: string) => {
    try {
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
        return false;
      }

      if (data) {
        toast({
          title: `Successfully updated book status to ${data.updateUserBook.status}`,
        });
        return true;
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return {
    updateUserBook,
  };
};

export default useUpdateUserBook;
