import axiosInstance from 'src/config/axios.config';

const START_PATTERN_GOODREADS_IMAGE_SEARCH =
  'https://images-na.ssl-images-amazon.com/images';
const START_PATTERN_GOODREADS_GOOGLE_SEARCH =
  'https://www.goodreads.com/book/show/';
const END_PATTERN_GOODREADS_GOOGLE_SEARCH = '&';
const END_PATTERN_IMAGE_SEARCH = '"';

function getUrl(data, startPattern, endPattern) {
  const startIndex = data.indexOf(startPattern);
  if (startIndex === -1) {
    throw new Error('Initial pattern not found');
  }
  ('');

  const endIndex = data.indexOf(endPattern, startIndex);
  if (endIndex === -1) {
    throw new Error('End pattern not found');
  }
  ('');
  return data.slice(startIndex, endIndex);
}

export async function bookcoverIsbn(isbn) {
  const searchUrl = `https://www.goodreads.com/search?utf8=✓&query=${isbn}`;

  try {
    const goodreadResponse = await axiosInstance.get(searchUrl);
    const imageUrl = getUrl(
      goodreadResponse.data,
      START_PATTERN_GOODREADS_IMAGE_SEARCH,
      END_PATTERN_IMAGE_SEARCH,
    );
    return imageUrl;
  } catch (error) {
    return null;
  }
}

export async function bookcoverSearch(bookTitle, authorName) {
  if (!bookTitle || !authorName) {
    return null;
  }

  const encodedBookTitle = encodeURIComponent(bookTitle);
  const encodedAuthorName = encodeURIComponent(authorName);

  const query = `${encodedBookTitle}+${encodedAuthorName}+site:goodreads.com/book/show`;
  const searchUrl = `https://www.google.com/search?q=${query}&sourceid=chrome&ie=UTF-8`;
  // The Black Swan: The Impact of the Highly Improbable Nassim Nicholas Taleb
  try {
    const searchResponse = await axiosInstance.get(searchUrl);

    const goodreadUrl = getUrl(
      searchResponse.data,
      START_PATTERN_GOODREADS_GOOGLE_SEARCH,
      END_PATTERN_GOODREADS_GOOGLE_SEARCH,
    );
    console.log(searchUrl);
    const goodreadResponse = await axiosInstance.get(goodreadUrl);

    const imageUrl = getUrl(
      goodreadResponse.data,
      START_PATTERN_GOODREADS_IMAGE_SEARCH,
      END_PATTERN_IMAGE_SEARCH,
    );
    return imageUrl;
  } catch (error) {
    console.log(error);
    return null;
  }
}
