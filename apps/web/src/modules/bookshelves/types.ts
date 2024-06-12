import { Size, UserBook } from '@/graphql/graphql';
import { inter } from '@/lib/fonts';

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

export interface BookData {
  id?: string;
  urls: {
    goodreads?: string;
    google?: string;
  };
  isbn?: string;
  title: string;
  subtitle?: string;
  authors: string[];
  coverImage: string;
  publishedDate?: string;
  publisher?: string;
  description?: string;
  language?: string;
  pageCount: number;
  ratings: {
    goodreads?: number;
    google?: number;
  };
}
