import { processBookData } from "@/lib/utils";
import axios from "axios";

export async function getBooks(search: string) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&maxResults=20&key=${process.env.GOOGLE_BOOKS_API_KEY}`;
    const response = await axios.get(url);

    // Check if the response status is successful (status code 2xx)
    if (response.status >= 200 && response.status < 300) {
      let data = response.data.items;
      let books = processBookData(data);
      return books;
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
