import { BookData } from 'libs/user-book/types';
import axiosInstance from 'src/config/axios.config';
import { processGoogleBook } from 'libs/user-book/utils';
export async function getGoogleBook(book) {
  // Attempt to find by ISBN 10
  try {
    const googleIsbn10Book = await findGoogleBookByISBN(book.isbn10);
    if (googleIsbn10Book) return googleIsbn10Book;
  } catch (error) {
    console.error('Error finding by ISBN 10:', error.message);
  }

  // If ISBN 10 failed or didn't return a book, try ISBN 13
  try {
    const googleIsbn13Book = await findGoogleBookByISBN(book.isbn13);
    if (googleIsbn13Book) return googleIsbn13Book;
  } catch (error) {
    console.error('Error finding by ISBN 13:', error.message);
  }

  // If both ISBN lookups failed, try a query with the title and authors
  try {
    console.log(book.authors);
    const googleQueryBook = await findBookByGoogleQuery(
      `${book.title} ${book.authors.join(' ')}`,
    );
    if (googleQueryBook) return googleQueryBook;
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
      const processedBook: BookData = processGoogleBook(book) as BookData;
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
