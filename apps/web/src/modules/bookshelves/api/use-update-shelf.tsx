import { useUpdateShelfMutation } from "@/graphql/graphql";
import toast from "react-hot-toast";


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
