import {
  JournalEntryUpdateInput,
  useUpdateJournalEntryMutation,
} from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';

export const useUpdateJournalEntry = () => {
  const [UpdateJournalEntry] = useUpdateJournalEntryMutation();
  const updateJournalEntry = async (
    entryId: string,
    updateInput: JournalEntryUpdateInput
  ) => {
    const { data, errors } = await UpdateJournalEntry({
      variables: {
        data: updateInput,
        where: {
          id: entryId,
        },
      },
      errorPolicy: 'all',
    });

    if (errors) {
      toast({
        title: 'Error updating journal entry',
        variant: 'destructive',
      });
    }

    if (data && !errors) {
      return data.updateJournalEntry;
    }
    return null;
  };

  return {
    updateJournalEntry,
  };
};
