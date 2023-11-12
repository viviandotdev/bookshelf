import { processBook } from "@/lib/utils";
import { BookData } from "@/types/interfaces";
import axios from "axios";

// export async function getBook(bookId: string) {
//   try {
//     const url = `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${process.env.GOOGLE_BOOKS_API_KEY}`;
//     const response = await axios.get(url);

//     // Check if the response status is successful (status code 2xx)
//     if (response.status >= 200 && response.status < 300) {
//       const book: BookData = response.data; // Assuming response.data contains the book data
//       const processedBook: BookData = processBook(book) as BookData;
//       return processedBook;
//     } else {
//       // Handle non-successful response status codes (4xx, 5xx, etc.) if needed
//       return null;
//     }
//   } catch (error) {
//     // Handle Axios errors here
//     console.error("Error fetching book:", error);
//     return null;
//   }
// }

export async function getBook(olid: string) {
  try {
    const bookDetailsUrl = `http://openlibrary.org/works/${olid}.json`;
    const bookDetailsResponse = await axios.get(bookDetailsUrl);
    const bookDetails = bookDetailsResponse.data;
    // pass rating_data, title, author, image, source, ratings_avg, id
    const allCategories =
      bookDetails.subject?.flatMap((category: string) =>
        category.split(" / ")
      ) || [];
    const categories = allCategories.filter(
      (value: string, index: number, self: string[]) => {
        return self.indexOf(value) === index;
      }
    );
    return {
      id: olid,
      description: bookDetails.description
        ? bookDetails.description.value
        : "N/A",
      categories: bookDetails.subject,
      // Add more properties from bookDetails as needed
    };
  } catch (error) {
    console.error("Error fetching book details:", error);
    return null;
  }
}
