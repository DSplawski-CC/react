import MovieDetails from './movie-details/MovieDetails.tsx';
import { useEffect, useState } from 'react';
import { getMovieDetails, type MovieDto } from '../movies/MovieApi.ts';
import { useParams } from 'react-router';
import Reviews from './reviews/Reviews.tsx';
import { MovieIdContext } from './MovieContext.ts';

export function MovieView() {
  const movieId = useParams()['movieId'] as number;

  const [movie, setMovie] = useState<MovieDto | undefined>(undefined);

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

  return movie && (
    <MovieIdContext value={movieId}>
      <MovieDetails movie={movie}/>

      <Reviews />
    </MovieIdContext>
  )
}