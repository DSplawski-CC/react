import styles from './PageNavigation.module.css';

interface PageNavigationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export default function PageNavigation({ currentPage, totalPages, onPageChange }: PageNavigationProps) {
  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <div className={styles.navigationContainer}>
      <button
        className={styles.pageButton}
        disabled={isPreviousDisabled || !currentPage || !totalPages}
        onClick={() => onPageChange?.(currentPage! - 1)}
      >
        Previous
      </button>

      <div>
        Page: <b>{ currentPage }</b> of { totalPages }
      </div>

      <button
        className={styles.pageButton}
        disabled={isNextDisabled || !currentPage || !totalPages}
        onClick={() => onPageChange?.(currentPage! + 1)}
      >
        Next
      </button>
    </div>
  )
}