import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const START_PATTERN_GOODREADS_IMAGE_SEARCH =
  'https://images-na.ssl-images-amazon.com/images';
const START_PATTERN_GOODREADS_GOOGLE_SEARCH =
  'https://www.goodreads.com/book/show/';
const END_PATTERN_GOODREADS_GOOGLE_SEARCH = '&';
const END_PATTERN_IMAGE_SEARCH = '"';

function getUrl(
  data: string,
  startPattern: string,
  endPattern: string
): string {
  const startIndex = data.indexOf(startPattern);
  if (startIndex === -1) {
    throw new Error('Initial pattern not found');
  }

  const endIndex = data.indexOf(endPattern, startIndex);
  if (endIndex === -1) {
    throw new Error('End pattern not found');
  }

  return data.slice(startIndex, endIndex);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { bookTitle, authorName } = req.query;

  if (typeof bookTitle !== 'string' || typeof authorName !== 'string') {
    res.status(400).json({ error: 'Invalid query parameters' });
    return;
  }

  const encodedBookTitle = encodeURIComponent(bookTitle);
  const encodedAuthorName = encodeURIComponent(authorName);
  const query = `${encodedBookTitle}+${encodedAuthorName}+site:goodreads.com/book/show`;
  const searchUrl = `https://www.google.com/search?q=${query}&sourceid=chrome&ie=UTF-8`;

  try {
    const searchResponse = await axios.get(searchUrl);

    const goodreadUrl = getUrl(
      searchResponse.data,
      START_PATTERN_GOODREADS_GOOGLE_SEARCH,
      END_PATTERN_GOODREADS_GOOGLE_SEARCH
    );

    const goodreadResponse = await axios.get(goodreadUrl);

    const imageUrl = getUrl(
      goodreadResponse.data,
      START_PATTERN_GOODREADS_IMAGE_SEARCH,
      END_PATTERN_IMAGE_SEARCH
    );

    res.status(200).json({ imageUrl });
  } catch (error) {
    console.log('ERROR' + bookTitle + ' ' + authorName);
    res.status(500).json({ error: 'Failed to fetch book cover' });
  }
}
