import { processBookData } from "@/lib/utils";
import { getUserBook } from "@/modules/book/api/getUserBook";
import axios from "axios";
const URL = "http://openlibrary.org/search.json?title=";
export async function getBooks(search: string) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&maxResults=20&key=${process.env.GOOGLE_BOOKS_API_KEY}`;
    const response = await axios.get(url);

    // Check if the response status is successful (status code 2xx)
    if (response.status >= 200 && response.status < 300) {
      let data = response.data.items;

      let hits = processBookData(data);
      // sort by numbers of ratings
      hits.sort((a, b) => {
        return b.ratingsCount - a.ratingsCount;
      });

      let count = response.data.totalItems;

      // Use Promise.all to wait for all userBook requests to complete
      hits = await Promise.all(
        hits.map(async (hit) => {
          const userBook = await getUserBook(hit.id);

          // Add additional userBook properties if it exists
          if (userBook) {
            return {
              ...hit,
              userBook: {
                status: userBook.status,
                rating: userBook.rating,
                shelves: userBook.shelves,
              },
            };
          }
          return hit;
        })
      );
      //   sort by numbers of ratings and average rating
      return { hits, count };
    } else {
      // Handle non-successful response status codes (4xx, 5xx, etc.) if needed
      return null;
    }
  } catch (error) {
    // Handle Axios errors here
    console.error("Error Searching Books :", error);
    return null;
  }
}
