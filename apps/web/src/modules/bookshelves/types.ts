export enum Status {
  WantToRead = 0,
  UpNext = 1,
  CurrentlyReading = 2,
  Read = 3,
  Abandoned = 4,
}

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
  books: BookItem[];
  fetchMore: any;
};
