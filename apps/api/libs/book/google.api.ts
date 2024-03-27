import { processBook } from 'libs/user-book/utils';
import { BookData } from 'libs/user-book/types';
import axiosInstance from 'src/config/axios.config';

export async function findBookByGoogleBookId(bookId: string) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`;
    const response = await axiosInstance.get(url);
    // Check if the response status is successful (status code 2xx)
    if (response.status >= 200 && response.status < 300) {
      const book: BookData = response.data; // Assuming response.data contains the book data
      const processedBook: BookData = processBook(book) as BookData;
      //  also get user book if it exists
      console.log('processed', processedBook);
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

export async function findBookByISBN(isbn: string) {
  try {
    // https://developers.google.com/analytics/devguides/config/mgmt/v3/limits-quotas
    // Check if the number of requests exceeds the limit (10 requests per second)
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
    const response = await axiosInstance.get(url);
    await new Promise((resolve) => setTimeout(resolve, 300));
    // Check if the response status is successful (status code 2xx)
    if (response.status >= 200 && response.status < 300) {
      const data = response.data.items;
      if (data.length > 0) {
        const processedBook: BookData = processBook(data[0]) as BookData;
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

import axios from 'axios';

export async function findBookByOpenLibraryQuery(query) {
  try {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
      query,
    )}`;
    const response = await axios.get(url);
    if (response.status >= 200 && response.status < 300) {
      // Assuming response.data contains the books data array
      const books = response.data.docs.map((doc) => ({
        title: doc.title,
        author_name: doc.author_name,
        publish_year: doc.publish_year,
      }));
      console.log('Books found:', books);
      return books;
    } else {
      // Handle non-successful response status codes
      console.error('Non-successful response status:', response.status);
      return null;
    }
  } catch (error) {
    // Handle errors here
    console.error('Error searching for books:', error);
    return null;
  }
}

export async function findBookByTitleAndAuthor(query: string) {
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
        const processedBook: BookData = processBook(fullBook.data) as BookData;
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
