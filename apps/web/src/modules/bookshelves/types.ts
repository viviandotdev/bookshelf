import {
  CoverCreateInput,
  IdentifierCreateInput,
  RatingCreateInput,
} from '@/graphql/graphql';

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
  slug?: string;
  urls: {
    goodreads?: string;
    google?: string;
  };
  identifiers: IdentifierCreateInput[];
  isbn?: string;
  title: string;
  subtitle?: string;
  authors: string[];
  ratings: RatingCreateInput[];
  covers: CoverCreateInput[];
  yearPublished?: string;
  publisher?: string;
  description?: string;
  language?: string;
  pageCount: number;
}
