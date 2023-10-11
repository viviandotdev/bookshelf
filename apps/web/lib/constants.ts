export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://deplyed-url.com";

export const BOOKS_PAGE_SIZE = 10;
export const REVIEWS_PAGE_SIZE = 20;
export const BOOKS_FETCH_MORE_INTERVAL = 15; // seconds
export const REVIEWS_FETCH_MORE_INTERVAL = 15;
