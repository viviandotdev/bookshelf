import axiosInstance from 'src/config/axios.config';
export async function findBookByOpenLibraryQuery(query) {
  try {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
      query,
    )}`;
    const response = await axiosInstance.get(url);
    if (response.status >= 200 && response.status < 300) {
      // Assuming response.data contains the books data array
      const books = response.data.docs.map((doc) => ({
        title: doc.title,
        author_name: doc.author_name,
        publish_year: doc.publish_year,
      }));
      console.log('Books found:', books);
      return books;
    } else {
      // Handle non-successful response status codes
      console.error('Non-successful response status:', response.status);
      return null;
    }
  } catch (error) {
    // Handle errors here
    console.error('Error searching for books:', error);
    return null;
  }
}
