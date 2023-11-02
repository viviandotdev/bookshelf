import {
  useCreateShelfMutation,
  useUpdateShelfMutation,
} from "@/graphql/graphql";
import { toast } from "../use-toast";

export const useCreateShelf = () => {
  const [CreateShelf] = useCreateShelfMutation();

  const createShelf = async (name: string) => {
    const { data, errors } = await CreateShelf({
      variables: {
        data: {
          name: name,
        },
      },
    });
    if (errors) {
      toast({
        title: errors[0].message,
        variant: "destructive",
      });
    }

    if (data && !errors) {
      toast({ title: "Successfully created shelf" });
      return data.createShelf;
    }
    return null;
  };

  return { createShelf };
};

export const useUpdateShelf = () => {
  const [UpdateShelf] = useUpdateShelfMutation();

  const updateShelf = async (shelfId: string, name: string) => {
    const { data, errors } = await UpdateShelf({
      variables: {
        data: {
          name: name,
        },
        where: {
          id: shelfId,
        },
      },
    });
    if (errors) {
      toast({
        title: errors[0].message,
        variant: "destructive",
      });
    }

    if (data && !errors) {
      toast({ title: "Successfully renamed shelf" });
      return data.updateShelf;
    }
    return null;
  };

  return { updateShelf };
};
