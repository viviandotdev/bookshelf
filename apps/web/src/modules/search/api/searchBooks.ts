import { RESULTS_PAGE_SIZE } from '@/lib/constants';
import { processGoogleBook } from '@/lib/utils';
import { BookData } from '@/modules/bookshelves/types';
import axios from 'axios';
import { unstable_noStore } from 'next/cache';

export async function searchBooks(
  search: string,
  field: string,
  offset: number
) {
  unstable_noStore();
  try {
    let inField: string = 'intitle';
    if (field === 'author') {
      inField = 'inauthor';
    } else if (field === 'categories') {
      inField = 'insubject';
    }
    const url = `https://www.googleapis.com/books/v1/volumes?q=${inField}:${search}&maxResults=${RESULTS_PAGE_SIZE}&startIndex=${offset}`;

    const response = await fetch(url);
    const data = await response.json();
    const bookData = data.items;

    let hits: BookData[] = [];
    bookData.forEach((book: any) => {
      const bookData = processGoogleBook(book);
      hits.push(bookData!);
    });
    let count = data.totalItems;

    return { hits: hits.length > 0 ? hits : [], count: count };
  } catch (error) {
    console.error(`Error fetching books: ${error}`); // Log the error
    return {
      hits: [],
      count: 0,
    };
  }
}
