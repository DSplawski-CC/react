import MovieDetails from './movie-details/MovieDetails.tsx';
import { useEffect, useState } from 'react';
import { getMovieDetails, type Movie } from '../movies/MovieApi.ts';
import { useParams } from 'react-router';


export function MovieView() {
  const movieId = useParams()['movieId'];
  const [movie, setMovie] = useState<Movie | undefined>(undefined);

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
    <MovieDetails movie={movie}/>
  )
}