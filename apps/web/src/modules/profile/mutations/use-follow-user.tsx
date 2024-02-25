import { useFollowMutation } from '@/graphql/graphql'; // Import your follow mutation hook
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

export const useFollowUser = () => {
  const [followMutation] = useFollowMutation(); // Replace with your actual follow mutation hook
  const [loading, setLoading] = useState(false);

  const followUser = async (userId: string, value: boolean) => {
    setLoading(true); // Set loading state to true when starting the mutation
    try {
      const { data, errors } = await followMutation({
        variables: {
          where: {
            id: userId,
          },
          value,
        },
        errorPolicy: 'all',
      });

      if (errors) {
        console.log(errors);
        return null;
      }

      if (data && !errors) {
        toast({
          title: value ? 'Followed User' : 'Unfollowed User',
        });
        // Modify this return statement based on the structure of your data and mutation response
        return data.follow;
      }
      return null;
    } catch (error) {
      console.error('Error following user:', error);
      return null;
    } finally {
      setLoading(false); // Set loading state to false when the mutation finishes (success or failure)
    }
  };

  return {
    followUser,
    loading, // Include the loading state in the returned object
  };
};
