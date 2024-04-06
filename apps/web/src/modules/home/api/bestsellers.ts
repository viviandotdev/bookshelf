'use server';
// combined-print-and-e-book-nonfiction
// combined-print-and-e-book-fiction
export default async function bestsellers(list: string) {
  const API_KEY = process.env.NYT_API_KEY; // Ensure you have set your API key in your environment variables
  const url = `https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch NYT bestsellers, status: ${response.status}`
      );
    }
    const data = await response.json();
    return { data: data.results.books };
  } catch (error) {
    console.log(error);
    return { error: 'There was an error fetching' };
  }
}
