import styles from './MoviesView.module.css';
import PageNavigation from './PageNavigation.tsx';
import { useEffect, useState } from 'react';
import MoviesList from './MoviesList.tsx';
import { getMoviesPopular, type MoviesResponse } from './MovieApi.ts';



export default function MoviesView() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined);
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse | undefined>(undefined);

  useEffect(() => {
    let ignore = false;
    setMoviesResponse(undefined);
    setTotalPages(undefined);
    getMoviesPopular(page).then(result => {
      if (!ignore) {
        setMoviesResponse(result);
        setTotalPages(result.total_pages);
      }
    });

    return () => {
      ignore = true;
    };
  }, [page]);

  const onPageChange = (page: number) => { setPage(page); };

  return (
    <div className={styles.movieListContent}>
      <PageNavigation
        currentPage={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <div className={styles.movieList}>
        <MoviesList movies={moviesResponse?.results} />
      </div>
    </div>
  )
}
