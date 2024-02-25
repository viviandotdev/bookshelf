import { UserBook } from '@/graphql/graphql';

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
