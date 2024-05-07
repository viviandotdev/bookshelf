import axiosInstance from 'src/config/axios.config';
import { bookcoverIsbn, bookcoverSearch } from './get-cover';
// go the get cover in parallet

function getSmallImage(url) {
  if (url) {
    url = url.replace(
      'https://images-na.ssl-images-amazon.com/images/',
      'https://i.gr-assets.com/images/',
    );

    // Insert "._SY180_" before the file extension
    const lastDotIndex = url.lastIndexOf('.');
    if (lastDotIndex !== -1) {
      url = url.slice(0, lastDotIndex) + '._SY180_' + url.slice(lastDotIndex);
    }
  }

  return url;
}

export async function getCovers({ isbn, title, authors }) {
  if (isbn) {
    const cover = await bookcoverIsbn(isbn);

    const imageLinks = {
      small: getSmallImage(cover) || '',
      medium: cover || '',
    };
    if (cover) {
      return imageLinks;
    }
  } else {
    if (title && authors.length > 0) {
      const cover = await bookcoverSearch(title, authors[0]);

      const imageLinks = {
        small: getSmallImage(cover) || '',
        medium: cover || '',
      };
      if (cover) {
        return imageLinks;
      }
    }
  }
}
export async function getCoverByTitle(title, author) {
  try {
    const url = `http://bookcover.longitood.com/bookcover?book_title=${title}&author_name=${author}`;
    const response = await axiosInstance.get(url);
    if (response.status >= 200 && response.status < 300) {
      const url = response.data.url;

      return url;
    }
    // Handle non-successful response status codes (4xx, 5xx, etc.) if needed
    return null;
  } catch (error) {
    // Handle Axios errors here
    console.error('Error fetching cover image:', error);
    return null;
  }
}
// getCover
export async function getCoverByIsbn(isbn) {
  try {
    const url = `http://bookcover.longitood.com/bookcover/${isbn}`;
    const response = await axiosInstance.get(url);
    if (response.status >= 200 && response.status < 300) {
      const url = response.data.url;
      return url;
    }
    // Handle non-successful response status codes (4xx, 5xx, etc.) if needed
    return null;
  } catch (error) {
    // Handle Axios errors here
    console.error('Error fetching cover image:', error);
    return null;
  }
}
