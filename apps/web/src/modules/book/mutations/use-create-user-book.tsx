import { useCreateBookMutation } from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';
import { BookData } from '@/types/interfaces';
import { useState } from 'react';

// This is a custom hook named useCreateBook
const useCreateUserBook = () => {
  const [loading, setLoading] = useState(false);
  const [CreateBook] = useCreateBookMutation();
  const createUserBook = async (book: BookData) => {
    setLoading(true);
    try {
      // Your logic for creating a book goes here
      // For example, the code you had before
      const { data } = await CreateBook({
        variables: {
          data: {
            id: book.id,
            title: book.title,
            pageCount: parseInt(book.pageCount),
            author: book.author,
            publisher: book.publisher,
            coverImage: book.coverImage,
          },
        },
      });

      if (data) {
        toast({
          title: 'Successfully saved book!',
        });
        return data.createBook;
      } else {
        toast({
          title: 'Error saving book!',
        });
        return null;
      }
    } catch (error) {
      // Handle error appropriately, such as logging or displaying an error message
      console.error('Error creating book:', error);
      toast({
        title: 'Error saving book!',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, createUserBook };
};

export default useCreateUserBook;
