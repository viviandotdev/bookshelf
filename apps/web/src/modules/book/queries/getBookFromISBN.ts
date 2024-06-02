// import { processBook } from '@/lib/utils';
// import axios from 'axios';

// export async function getBookFromISBN(isbn: string) {
//   try {
//     const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
//     const response = await axios.get(url);

//     // Check if the response status is successful (status code 2xx)
//     if (response.status >= 200 && response.status < 300) {
//       let data = response.data.items;
//       if (data.length > 0) {
//         const processedBook: BookData = processBook(data[0]) as BookData;
//         //  also get user book if it exists
//         return processedBook;
//       }
//     }
//     // Handle non-successful response status codes (4xx, 5xx, etc.) if needed
//     return null;
//   } catch (error) {
//     // Handle Axios errors here
//     console.error('Error fetching book:', error);
//     return null;
//   }
// }
