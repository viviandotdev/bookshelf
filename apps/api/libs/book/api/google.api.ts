import { BookData } from 'libs/user-book/types';
import axiosInstance from 'src/config/axios.config';
import { processBook, processGoogleBook } from 'libs/user-book/utils';
import { getCovers } from './book-cover.api';

export async function getGoogleBook(book) {
  try {
    const googleBook = await findGoogleBookByISBN(book.isbn10);
    if (googleBook) {
      return googleBook;
    }
  } catch (error) {
    console.error('Error finding by ISBN 10:', error.message);
  }
  try {
    const googleBook = await findGoogleBookByISBN(book.isbn13);
    if (googleBook) {
      return googleBook;
    }
  } catch (error) {
    console.error('Error finding by ISBN 13:', error.message);
  }

  // If both ISBN lookups failed, try a query with the title and authors
  try {
    const googleBook = await findBookByGoogleQuery(
      `${book.title} ${book.authors.join(' ')}`,
    );
    if (googleBook) {
      return googleBook;
    }
  } catch (error) {
    console.error('Error finding by Google query:', error.message);
  }

  // If all attempts fail, return null or handle accordingly
  return null;
}

export async function findBookByGoogleBookId(bookId: string) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`;
    const response = await axiosInstance.get(url);
    // Check if the response status is successful (status code 2xx)
    if (response.status >= 200 && response.status < 300) {
      const book: BookData = response.data; // Assuming response.data contains the book data
      const processedBook: BookData = processBook(book) as BookData;
     

      return processedBook;
    } else {
      // Handle non-successful response status codes (4xx, 5xx, etc.) if needed
      return null;
    }
  } catch (error) {
    // Handle Axios errors here
    console.error('Error fetching book:', error);
    return null;
  }
}

export async function findGoogleBookByISBN(isbn: string) {
  if (isbn == '') {
    return null;
  }
  try {
    // https://developers.google.com/analytics/devguides/config/mgmt/v3/limits-quotas
    // Check if the number of requests exceeds the limit (10 requests per second)
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
    const response = await axiosInstance.get(url);
    await new Promise((resolve) => setTimeout(resolve, 300));
    // Check if the response status is successful (status code 2xx)
    if (response.status >= 200 && response.status < 300) {
      const data = response.data.items;

      if (data && data.length > 0) {
        const processedBook: BookData = processGoogleBook(data[0]) as BookData;
        //  also get user book if it exists
        return processedBook;
      }
    }
    // Handle non-successful response status codes (4xx, 5xx, etc.) if needed
    return null;
  } catch (error) {
    // Handle Axios errors here
    console.error('Error fetching book:', error);
    return null;
  }
}

export async function findBookByGoogleQuery(query: string) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    const response = await axiosInstance.get(url);
    await new Promise((resolve) => setTimeout(resolve, 300));
    // Check if the response status is successful (status code 2xx)
    if (response.status >= 200 && response.status < 300) {
      const data = response.data.items;
      if (data.length > 0) {
        const fullBookUrl = `https://www.googleapis.com/books/v1/volumes/${data[0].id}`;
        const fullBook = await axiosInstance.get(fullBookUrl);
        const processedBook: BookData = processGoogleBook(
          fullBook.data,
        ) as BookData;
        return processedBook;
      }
    }
    // Handle non-successful response status codes (4xx, 5xx, etc.) if needed
    return null;
  } catch (error) {
    // Handle Axios errors here
    console.error('Error fetching book:', error);
    return null;
  }
}
