import styles from './MovieDetails.module.css';
import { getYearFromDate } from '../../../utils/date.tsx';
import StarIcon from '../../../shared/StarIcon.tsx';


function ratingFormat(value: number) {
  return value.toFixed(1);
}

interface MovieDetailsProps {
  movie: any;
}

export default function MovieDetails({movie}: MovieDetailsProps) {
  return (
    <div className={styles.movieDetailsContainer}>
      <div className={styles.title}>
        {movie.title}
      </div>

      <div className={styles.metadata}>
        <div className={styles.yearTime}>
          <div>
            {getYearFromDate(movie.release_date)}
          </div>

          <div>
            {movie.runtime} min
          </div>
        </div>

        <div className={styles.ratingContainer}>
          <StarIcon size={20} />
          <span className={styles.ratingValue}>
            {ratingFormat(movie.vote_average)}
          </span>
          <span>
            ({movie.vote_count} votes)
          </span>
        </div>
      </div>

      <div className={styles.overview}>
        {movie.overview}
      </div>
    </div>
  )
}