import { RESULTS_PAGE_SIZE } from '@/lib/constants';
import { processBookData } from '@/lib/utils';
import axios from 'axios';

export async function getBooks(search: string, field: string, offset: number) {
  try {
    let inField: string = 'intitle';
    if (field === 'author') {
      inField = 'inauthor';
    } else if (field === 'categories') {
      inField = 'insubject';
    }
    const url = `https://www.googleapis.com/books/v1/volumes?q=${inField}:${search}&maxResults=${RESULTS_PAGE_SIZE}&startIndex=${offset}`;
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
    return { hits: hits.length > 0 ? hits : [], count: count };
  } catch (error) {
    return {
      hits: [],
      count: 0,
    };
  }
}
