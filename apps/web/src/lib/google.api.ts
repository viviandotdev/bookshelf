import axios from 'axios';
import { processGoogleBook } from './utils';

export async function findGoogleBookByISBN(isbn: string) {
  if (isbn == '') {
    return null;
  }
  try {
    // https://developers.google.com/analytics/devguides/config/mgmt/v3/limits-quotas
    // Check if the number of requests exceeds the limit (10 requests per second)
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
    const response = await axios.get(url);
    await new Promise((resolve) => setTimeout(resolve, 300));
    // Check if the response status is successful (status code 2xx)
    if (response.status >= 200 && response.status < 300) {
      const data = response.data.items;

      if (data && data.length > 0) {
        const processedBook = processGoogleBook(data[0]);
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
    const response = await axios.get(url);
    await new Promise((resolve) => setTimeout(resolve, 300));
    // Check if the response status is successful (status code 2xx)
    if (response.status >= 200 && response.status < 300) {
      const data = response.data.items;
      if (data.length > 0) {
        const fullBookUrl = `https://www.googleapis.com/books/v1/volumes/${data[0].id}`;
        const fullBook = await axios.get(fullBookUrl);
        const processedBook = processGoogleBook(fullBook.data);
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

export async function findBookByGoogleBookId(bookId: string) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`;
    const response = await axios.get(url);
    // Check if the response status is successful (status code 2xx)
    if (response.status >= 200 && response.status < 300) {
      const book = response.data; // Assuming response.data contains the book data

      const processedBook = processGoogleBook(book);

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
