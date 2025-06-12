import styles from './MoviesList.module.css';
import PageNavigation from './PageNavigation.tsx';
import { useState } from 'react';

export default function MoviesList() {
  const [page, setPage] = useState(1);
  const [totalPage] = useState(5);

  const onPageChange = (page: number) => { setPage(page); };

  return (
    <div className={styles.movieListContent}>
      <PageNavigation
        currentPage={page}
        totalPages={totalPage}
        onPageChange={onPageChange}
      />
    </div>
  )
}
