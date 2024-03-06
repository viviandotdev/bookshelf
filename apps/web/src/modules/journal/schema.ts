import { z } from 'zod';
export const journalEntrySchema = z.object({
  monthYear: z.string(),
  date: z.number().int().positive().min(1).max(31),
  title: z.string(),
  pagesRead: z.number().int().positive(),
  progress: z.number().int().positive(),
  notes: z.string(),
  liked: z.boolean(),
  dnf: z.boolean(),
  userBook: z.object({
    id: z.string(),
    status: z.string(),
    shelves: z.array(
      z.object({
        shelf: z.object({
          id: z.string(),
          name: z.string(),
          userId: z.string(),
        }),
        shelfId: z.string(),
      })
    ),
    book: z.object({
      id: z.string(),
      title: z.string(),
      coverImage: z.string().nullable(),
    }),
  }),
});

export type JournalEntryValues = z.infer<typeof journalEntrySchema>;
