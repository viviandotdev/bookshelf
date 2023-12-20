export interface User {
  username?: string | null | undefined;
  id: string;
  email?: string;
  accessToken?: string;
}


export interface BookData {
  id: string;
  title: string;
  author: string;
  averageRating: number;
  ratingsCount: number;
  publishedDate: string;
  publisher: string;
  coverImage: string;
  description: string;
  pageCount: number;
  isbn: string;
  categories: string[];
  isbn13: string;
}

export interface GoodreadsBook {
  "Additional Authors"?: string;
  Author?: string;
  "Author l-f"?: string;
  "Average Rating"?: string;
  Binding?: string;
  "Book Id"?: string;
  Bookshelves?: string;
  "Bookshelves with positions"?: string;
  "Date Added"?: string;
  "Date Read"?: string;
  "Exclusive Shelf"?: string;
  ISBN?: string;
  ISBN13?: string;
  "My Rating"?: string;
  "My Review"?: string;
  "Number of Pages"?: string;
  "Original Publication Year"?: string;
  "Owned Copies"?: string;
  "Private Notes"?: string;
  Publisher?: string;
  "Read Count"?: string;
  Spoiler?: string;
  Title?: string;
  "Year Published"?: string;
}

export type GoodreadsBookKeys =
  | "Additional Authors"
  | "Author"
  | "Author l-f"
  | "Average Rating"
  | "Binding"
  | "Book Id"
  | "Bookshelves"
  | "Bookshelves with positions"
  | "Date Added"
  | "Date Read"
  | "Exclusive Shelf"
  | "ISBN"
  | "ISBN13"
  | "My Rating"
  | "My Review"
  | "Number of Pages"
  | "Original Publication Year"
  | "Owned Copies"
  | "Private Notes"
  | "Publisher"
  | "Read Count"
  | "Spoiler"
  | "Title"
  | "Year Published";
