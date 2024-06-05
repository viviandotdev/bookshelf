import { Size, UserBook } from '@/graphql/graphql';

export interface BookItem {
  id: string;
  title: string;
  order: number;
  status: string;
  author: string;
  coverImage: string;
}
export type ColumnWithBooks = {
  title: string;
  books: any[];
  fetchMore: any;
  hasMore: boolean;
  totalBooks: number;
};

// Define the BookParts subtype by picking specific properties from UserBook
export type BookParts = Pick<
  UserBook,
  'title' | 'subtitle' | 'covers' | 'identifiers' | 'pageCount' | 'authors'
>;
