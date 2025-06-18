import type { ReviewDataDto, ReviewDto } from '../../../types.ts';


export async function getMovieReviews(movieId: number) {
  const result = await fetch(`${import.meta.env.VITE_API_URL}/movies/${movieId}/reviews`, {
    credentials: 'include',
  });

  return result.json() as ReviewDto[];
}

export async function postMovieReview(movieId: number, review: ReviewDataDto) {
  const result = await fetch(`${import.meta.env.VITE_API_URL}/movies/${movieId}/reviews`, {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(review),
  });

  return result.json() as ReviewDto;
}