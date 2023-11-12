import { DEFAULT_BOOKCOVER_PLACEHOLDER } from "@/lib/constants";
import { getBook } from "@/modules/book/api/getBook";
import axios from "axios";
const URL = "http://openlibrary.org/search.json?title=";
export async function getBooks(search: string) {
  try {
    console.log(search);
    const searchUrl = `${URL}${search}&limit=30&sort=readinglog`;

    const response = await axios.get(searchUrl);
    const { docs } = response.data;

    const books = await Promise.all(
      docs.map(async (doc: any) => {
        const olid = doc.key.split("/")[2];
        // if (doc.id_google && doc.id_google.length > 0) {
        //   const book = await getBook(doc.id_google[0]);

        //   return {
        //     ...book,
        //     source: "google",
        //   };
        // }
        const coverUrl = `http://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`;
        const details = await getBook(olid);

        return {
          id: olid,
          title: doc.title,
          author: doc.author_name,
          date: doc.first_publish_year,
          rating: doc.ratings_average,
          pageNum: doc.number_of_pages_median,
          image: doc.cover_i ? coverUrl : DEFAULT_BOOKCOVER_PLACEHOLDER,
          ...details,
          // Add more properties from bookDetails as needed
        };
      })
    );

    const filteredBooks = books.filter((book) => book !== null);
    return { hits: filteredBooks, count: docs.numFound };
  } catch (error) {
    // Handle Axios errors here
    console.error("Error Searching Books :", error);
    return null;
  }
}
