import { useRemoveJournalEntryMutation } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";
import { useRemoveUserBook } from "@/hooks/user-books/mutations";

export const useRemoveEntry = () => {
  const [RemoveJournalEntry] = useRemoveJournalEntryMutation();

  const removeEntry = async (entryId: string) => {
    console.log("entryId", entryId);
    const { data, errors } = await RemoveJournalEntry({
      variables: { where: { id: entryId } },
      update: (cache) => {
        cache.evict({ id: `JournalEntry:${entryId}` });
      },
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
      return data.removeJournalEntry;
    }
    return null;
  };

  return { removeEntry };
};
