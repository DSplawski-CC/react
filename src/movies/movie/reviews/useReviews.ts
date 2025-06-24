import { useCallback, useEffect, useState } from 'react';
import type { ReviewDto } from '../../../types.ts';
import { getMovieReviews } from './ReviewsApi.ts';


interface UseReviewsProps {
  movieId: number;
}

export function useReviews({ movieId }: UseReviewsProps) {
  const [reviews, setReviews] = useState<ReviewDto[]>([]);
  const loadData = useCallback(() => {
    getMovieReviews(movieId).then((reviews) => {
      setReviews(reviews);
    });
  }, [movieId]);

  useEffect(() => {
    loadData();
  }, [loadData]);



  return [reviews, loadData] as const;
}