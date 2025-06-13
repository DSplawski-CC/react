import styles from './MoviesList.module.css';
import PageNavigation from './PageNavigation.tsx';
import { useState } from 'react';
import { Link } from 'react-router';
import { getYearFromDate } from '../../utils/date.tsx';

interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
}

export default function MoviesList() {
  const [page, setPage] = useState(1);
  const [totalPage] = useState(5);
  const [moviesList] = useState<Movie[]>([{
    id: 1,
    title: 'Inception',
    release_date: '2010-07-16',
    vote_average: 8.8
  }, {
    id: 2,
    title: 'The Dark Knight',
    release_date: '2008-07-18',
    vote_average: 9.0
  }, {
    id: 3,
    title: 'Interstellar',
    release_date: '2014-11-07',
    vote_average: 8.6
  }, {
    id: 4,
    title: 'Parasite',
    release_date: '2019-05-30',
    vote_average: 8.6
  }, {
    id: 5,
    title: 'The Shawshank Redemption',
    release_date: '1994-09-23',
    vote_average: 9.3
  }]);

  const onPageChange = (page: number) => { setPage(page); };

  const movieComponents = moviesList.map((movie) => (
    <div key={movie.id} className={styles.movieItem}>
      <Link className={styles.movieLink} to={`/movie/${movie.id}`}>
        <div className={styles.movieItem}>
          <div className={styles.movieTitle}>{movie.title}</div>
          <div className={styles.movieReleaseDate}>({getYearFromDate(movie.release_date)})</div>
          <div className={styles.movieRating}>{movie.vote_average}</div>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className={styles.movieListContent}>
      <PageNavigation
        currentPage={page}
        totalPages={totalPage}
        onPageChange={onPageChange}
      />

      <div className={styles.movieList}>
        {movieComponents}
      </div>
    </div>
  )
}
