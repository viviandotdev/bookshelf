import { useDeleteShelfMutation } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";

export const useDeleteShelf = () => {
    const [DeleteShelf] = useDeleteShelfMutation();
    const deleteShelf = async (shelfId: string) => {
        const { data, errors } = await DeleteShelf({
            variables: {
                where: {
                    id: shelfId,
                },
            },
        });
        if (errors) {
            toast({
                title: "Error deleting shelf",
                variant: "destructive",
            });
        }

        if (data && !errors) {
            toast({
                title: "Sucessfylly deleted shelf",
            });
            return data.deleteShelf;
        }
        return null;
    };
    return { deleteShelf };
};
