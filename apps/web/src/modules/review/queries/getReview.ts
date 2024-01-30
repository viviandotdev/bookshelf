import { BookReviewQuery, BookReviewDocument } from "@/graphql/graphql";
import { getApolloClient, setAuthToken, httpLink } from "@/lib/apollo";
import { getCurrentUser } from "@/lib/auth";

export async function getReview(reviewId: string) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));

  const { data } = await client.query<BookReviewQuery>({
    query: BookReviewDocument,
    variables: {
      where: {
        id: reviewId,
      },
    },
  });
  return data.bookReview;
}
