import { Icons } from "@/components/icons";

export const DEFAULT_BOOKCOVER_PLACEHOLDER =
  "https://m.media-amazon.com/images/I/118BLwxozkL.jpg";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://deplyed-url.com";

export const BOOK_STATUSES = [
  {
    name: "Want to Read",
    icon: Icons.bookPlus,
  },
  {
    name: "Currently Reading",
    icon: Icons.bookPlus,
  },
  {
    name: "Read",
    icon: Icons.bookOpen,
  },
  {
    name: "Abandoned",
    icon: Icons.abondoned,
  },
];
export const BOOKS_PAGE_SIZE = 15;
export const REVIEWS_PAGE_SIZE = 20;
export const RESULTS_PAGE_SIZE = 20;
export const BOOKS_FETCH_MORE_INTERVAL = 15; // seconds
export const RESULTS_FETCH_MORE_INTERVAL = 20;
export const REVIEWS_FETCH_MORE_INTERVAL = 15;

export const MONTH = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
