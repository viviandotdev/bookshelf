export enum Status {
  WantToRead = 0,
  CurrentlyReading = 1,
  Read = 2,
}
export interface BookItem {
  id: string;
  title: string;
  order: number;
  status: string;
}
export type ColumnWithBooks = {
  title: string;
  books: BookItem[];
  fetchMore: any;
};
