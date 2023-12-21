export enum Status {
  WantToRead = 0,
  CurrentlyReading = 1,
  Read = 2,
}
export interface BookWithOrder {
  id: string;
  title: string;
  order: number;
}
export type ColumnWithBooks = {
  title: string;
  books: BookWithOrder[];
  fetchMore: any;
};
