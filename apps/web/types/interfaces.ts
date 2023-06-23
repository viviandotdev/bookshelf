export interface User {
  name?: string | null | undefined
  id: string
  userName?: string
  accessToken?: string
}

export interface BookData {
  id: string;
  title: string;
  author: string;
  date: string;
  publisher: string;
  image: string;
  preview: string;
  plot: string;
  pageNum: string;
  isbn: string;
  isbn13: string;
  buyLink: string;
  price: string;
  currency: string;
}
