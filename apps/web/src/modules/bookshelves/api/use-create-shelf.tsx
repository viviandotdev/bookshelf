import { useCreateShelfMutation } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";

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
