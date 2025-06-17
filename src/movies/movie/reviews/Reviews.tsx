import Review from './Review.tsx';
import { useContext, useEffect, useState } from 'react';
import { MovieIdContext } from '../MovieContext.ts';
import { getMovieReviews } from './ReviewsApi.ts';
import type { ReviewDto } from '../../../types.ts';

interface UseReviewsProps {
  movieId: number;
}

function useReviews({ movieId }: UseReviewsProps) {
  const [reviews, setReviews] = useState<ReviewDto[]>([]);

  useEffect(() => {
    getMovieReviews(movieId).then((reviews) => {
      setReviews(reviews);
    });
  }, [movieId]);

  return reviews;
}


export default function Reviews() {
  const movieId = useContext(MovieIdContext);
  const reviews = useReviews({ movieId });

  const reviewComponents = reviews.map((review) => (
    <Review key={review.id} review={review} />
  ));

  return reviewComponents;
}
