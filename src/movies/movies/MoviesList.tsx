import styles from './MoviesList.module.css';
import { Link } from 'react-router';
import { getYearFromDate } from '../../utils/date.tsx';
import type { Movie } from './MovieApi.ts';

interface MoviesListProps {
  movies?: Movie[];
}

export default function MoviesList({movies}: MoviesListProps) {
  const movieComponents = (movies ?? []).map((movie) => (
    <div key={movie.id} className={styles.movieItem}>
      <Link className={styles.movieLink} to={`/movie/${movie.id}`}>
        <div className={styles.movieItem}>
          <div className={styles.movieTitle}>{movie.title}</div>
          <div className={styles.movieReleaseDate}>({getYearFromDate(movie.release_date)})</div>
          <div className={styles.movieRating}>{movie.vote_average.toFixed(1)}</div>
        </div>
      </Link>
    </div>
  ));

  return (
    movieComponents
  )
}