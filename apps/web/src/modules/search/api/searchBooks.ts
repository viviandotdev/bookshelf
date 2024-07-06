import { RESULTS_PAGE_SIZE } from '@/lib/constants';
import { processGoogleBook } from '@/lib/utils';
import { BookData } from '@/modules/bookshelves/types';
import axios from 'axios';

export async function searchBooks(
  search: string,
  field: string,
  offset: number
) {
  try {
    let inField: string = 'intitle';
    if (field === 'author') {
      inField = 'inauthor';
    } else if (field === 'categories') {
      inField = 'insubject';
    }
    const url = `https://www.googleapis.com/books/v1/volumes?q=${inField}:${search}&maxResults=${RESULTS_PAGE_SIZE}&startIndex=${offset}`;

    const response = await axios.get(url);

    // Check if the response status is successful (status code 2xx)
    let data = response.data.items;

    let hits: BookData[] = [];
    data.forEach((book: any) => {
      const bookData = processGoogleBook(book);
      hits.push(bookData!);
    });
    let count = response.data.totalItems;

    return { hits: hits.length > 0 ? hits : [], count: count };
  } catch (error) {
    console.error(`Error fetching books: ${error}`); // Log the error
    return {
      hits: [],
      count: 0,
    };
  }
}
