import {
  JournalEntryCreateInput,
  JournalEntryUpdateInput,
  useCreateJournalEntryMutation,
} from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';

export const useCreateJournalEntry = () => {
  const [CreateJournalEntry] = useCreateJournalEntryMutation();
  const createJournalEntry = async (
    bookId: string,
    createInput: JournalEntryCreateInput
  ) => {
    const { data, errors } = await CreateJournalEntry({
      variables: {
        data: createInput,
        book: {
          id: bookId,
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
      toast({
        title: 'Successfully created journal entry',
      });
      return data.createJournalEntry;
    }
    return null;
  };

  return {
    createJournalEntry,
  };
};
