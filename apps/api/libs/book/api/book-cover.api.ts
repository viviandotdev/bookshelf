import axiosInstance from 'src/config/axios.config';

const START_PATTERN_GOODREADS_IMAGE_SEARCH =
  'https://images-na.ssl-images-amazon.com/images';
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

function getSmallImage(url) {
  if (url) {
    url = url.replace(
      'https://images-na.ssl-images-amazon.com/images/',
      'https://i.gr-assets.com/images/',
    );

    // Insert "._SY180_" before the file extension to get a smaller image
    const lastDotIndex = url.lastIndexOf('.');
    if (lastDotIndex !== -1) {
      url = url.slice(0, lastDotIndex) + '._SY180_' + url.slice(lastDotIndex);
    }
  }

  return url;
}

export async function getGoodreadsCover(id) {
  const goodreadUrl = `https://www.goodreads.com/book/show/${id}`;
  const goodreadResponse = await axiosInstance.get(goodreadUrl);
  const imageUrl = getUrl(
    goodreadResponse.data,
    START_PATTERN_GOODREADS_IMAGE_SEARCH,
    END_PATTERN_IMAGE_SEARCH,
  );
  return {
    small: getSmallImage(imageUrl),
    large: imageUrl,
  };
}
