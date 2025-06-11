import styles from  './App.module.css'
import Header from './components/Header.tsx';

function App() {
  const title = 'Movie DB';

  return (
    <div className={styles.main}>
      <Header text={title} />

      <nav>
        <a
          data-testid="movies-link"
          className={styles.nav}
          // routerLink="/movies"
          // routerLinkActive="underline font-extrabold"
        >Movies</a>
      </nav>

      <div
        className={styles.separator}
        role="separator"
        aria-label="Divider"
      ></div>
    </div>
  )
}

export default App
