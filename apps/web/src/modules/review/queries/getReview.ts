"use server";
import { BookReviewQuery, BookReviewDocument } from "@/graphql/graphql";
import { getApolloClient, setAuthToken, httpLink } from "@/lib/apollo";
import { getCurrentUser } from "@/lib/auth";

export async function getReview(reviewId: string, bookId: string) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));
  try {
    const { data } = await client.query<BookReviewQuery>({
      query: BookReviewDocument,
      variables: {
        where: {
          id: reviewId,
          bookId: bookId,
        },
      },
    });

    return data.bookReview;
  } catch (error) {
    return null;
  }
}
