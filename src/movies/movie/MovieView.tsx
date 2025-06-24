import MovieDetails from './movie-details/MovieDetails.tsx';
import { useEffect, useState } from 'react';
import { getMovieDetails, type MovieDto } from '../movies/MovieApi.ts';
import { useParams } from 'react-router';
import Reviews from './reviews/Reviews.tsx';
import { MovieIdContext } from './MovieContext.ts';
import AddReview, { type AddReviewData } from './reviews/AddReview.tsx';
import { postMovieReview } from './reviews/ReviewsApi.ts';
import type { ReviewDataDto } from '../../types.ts';
import { useReviews } from './reviews/useReviews.ts';

export function MovieView() {
  const movieId = Number(useParams()['movieId']);
  const [movie, setMovie] = useState<MovieDto | undefined>(undefined);
  const [reviews, reloadReviews] = useReviews({ movieId });

  useEffect(() => {
    let ignore = false;
    setMovie(undefined);
    getMovieDetails(movieId).then(result => {
      if (!ignore) {
        setMovie(result);
      }
    });

    return () => {
      ignore = true;
    };
  }, [movieId]);

  async function handleSubmitReview(review: AddReviewData) {
    const addReviewDto: ReviewDataDto = {
      rating: review.rating,
      title: review.title,
      content: review.content,
      author: {
        name: review.author,
        email: review.email,
      }
    }
    await postMovieReview(movieId, addReviewDto);
    reloadReviews();
  }

  return movie && (
    <MovieIdContext value={movieId}>
      <MovieDetails movie={movie}/>
      <Reviews reviews={reviews}/>
      <AddReview onSubmit={handleSubmitReview}/>
    </MovieIdContext>
  )
}