import React from 'react';
import { getShelves } from '@/modules/shelf/queries/getShelves';
import { getCurrentUser } from '@/lib/auth';
import ReviewTemplate from '@/modules/review/templates';
import { notFound } from 'next/navigation';
import { getReview } from '@/modules/review/queries/getReview';

interface ReviewPageProps {
  params: { reviewId: string };
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { shelves } = await getShelves();
  const review = await getReview(params.reviewId);
  console.log(review);
  if (!review || !review.book) {
    return notFound();
  }
  const user = await getCurrentUser();
  return (
    <>
      <ReviewTemplate
        reviewId={params.reviewId}
        book={review.book}
        shelves={shelves}
        user={user}
      />
    </>
  );
}
