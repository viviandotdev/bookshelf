import { readingStatuses } from '@/config/books';
import { Reading_Status } from '@/graphql/graphql';

export const DEFAULT_BOOKCOVER_PLACEHOLDER =
  'https://m.media-amazon.com/images/I/118BLwxozkL.jpg';

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://deplyed-url.com';

export const BOOKS_PAGE_SIZE = 24;
export const REVIEWS_PAGE_SIZE = 20;
export const RESULTS_PAGE_SIZE = 20;
export const BOOKS_FETCH_MORE_INTERVAL = 15; // seconds
export const RESULTS_FETCH_MORE_INTERVAL = 20;
export const REVIEWS_FETCH_MORE_INTERVAL = 15;

export const MONTH = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const STATUS = {
  WantToRead: Reading_Status.WantToRead,
  UpNext: Reading_Status.UpNext,
  CurrentlyReading: Reading_Status.Reading,
  Finished: Reading_Status.Finished,
};
