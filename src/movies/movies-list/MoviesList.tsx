import styles from './MoviesList.module.css';

export default function MoviesList() {
  return (
    <div className={styles.movieListContent}>
      <div className={styles.navigationContainer}>
        <button className={styles.pageButton} disabled={false}>
          Previous
        </button>

        <div>
          Page: <b>{ 1 }</b> of { 1000 }
        </div>

        <button className={styles.pageButton} disabled={true}>
          Next
        </button>
      </div>
    </div>
  )
}
