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
  //   const bookTitle = '21 Lessons for the 21st Century';
  //   const authorName = 'Yuval Noah Harari';
  const searchUrl = `https://www.goodreads.com/search?utf8=✓&query=${isbn}`;

  try {
    const goodreadResponse = await axiosInstance.get(searchUrl);
    // console.log(goodreadResponse);
    const imageUrl = getUrl(
      goodreadResponse.data,
      START_PATTERN_GOODREADS_IMAGE_SEARCH,
      END_PATTERN_IMAGE_SEARCH,
    );
    console.log(imageUrl);
    return imageUrl;
    // res.status(200).send(buildSuccessResponse(imageUrl));
  } catch (error) {
    // const ex = new HttpException(500, error.message);
    console.log(error + ' ' + isbn);
    return null;
    // res.status(ex.statusCode).send(buildErrorResponse(ex));
  }
}

export async function bookcoverSearch(bookTitle, authorName) {
  //   const bookTitle = '21 Lessons for the 21st Century';
  //   const authorName = 'Yuval Noah Harari';

  if (!bookTitle || !authorName) {
    // const ex = new HttpException(400, 'Mandatory parameters missing');
    // console.log(ex);
    return null;
  }

  const encodedBookTitle = encodeURIComponent(bookTitle);
  const encodedAuthorName = encodeURIComponent(authorName);
  const query = `${encodedBookTitle}+${encodedAuthorName}+site:goodreads.com/book/show`;
  const searchUrl = `https://www.google.com/search?q=${query}&sourceid=chrome&ie=UTF-8`;

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
    // res.status(200).send(buildSuccessResponse(imageUrl));
  } catch (error) {
    // const ex = new HttpException(500, error.message);
    console.log('ERROR' + bookTitle + ' ' + authorName);
    return null;
    // res.status(ex.statusCode).send(buildErrorResponse(ex));
  }

  //   http://bookcover.longitood.com/bookcover/978-0593135204
}
