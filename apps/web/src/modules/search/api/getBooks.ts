import { RESULTS_PAGE_SIZE } from "@/lib/constants";
import { processBookData } from "@/lib/utils";
import { getUserBook } from "@/modules/book/api/getUserBook";
import axios from "axios";

export async function getBooks(search: string, offset: number) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&maxResults=${RESULTS_PAGE_SIZE}&startIndex=${offset}`;
    const response = await axios.get(url);

    // Check if the response status is successful (status code 2xx)
    let data = response.data.items;

    let hits = processBookData(data);
    // sort by numbers of ratings
    hits.sort((a, b) => {
      return b.ratingsCount - a.ratingsCount;
    });

    let count = response.data.totalItems;

    // Use Promise.all to wait for all userBook requests to complete
    const results = await Promise.all(
      hits.map(async (hit) => {
        const userBook = await getUserBook(hit.id);

        // Add additional userBook properties if it exists
        if (userBook) {
          return {
            book: { ...hit },
            userBook: {
              status: userBook.status,
              rating: userBook.rating,
              shelves: userBook.shelves,
            },
          };
        }
        console.log(hit);

        return { book: { ...hit } };
      })
    );
    return { hits: results.length > 0 ? results : [], count: count };
  } catch (error) {
    return {
      hits: [],
      count: 0,
    };
  }
}
