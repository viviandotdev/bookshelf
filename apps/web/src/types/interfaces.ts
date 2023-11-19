export interface User {
  name?: string | null | undefined;
  id: string;
  userName?: string;
  accessToken?: string;
}

export interface BookData {
  id: string;
  title: string;
  author: string;
  averageRating: Number;
  ratingsCount: number;
  publishedDate: string;
  publisher: string;
  image: string;
  preview: string;
  description: string;
  pageCount: string;
  isbn: string;
  categories: string[];
  isbn13: string;
}
