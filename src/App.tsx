import styles from  './App.module.css'
import Header from './components/Header.tsx';
import { NavLink, Outlet } from 'react-router';

function App() {
  const title = 'Movie DB';

  return (
    <div className={styles.main}>
      <Header text={title} />

      <nav>
        <NavLink
          to="/movies"
          end
          className={({isActive}) => `${styles.nav} ${isActive ? styles.active : ''}`}
          data-testid="movies-link"
        >
          Movies
        </NavLink>
      </nav>

      <div
        className={styles.separator}
        role="separator"
        aria-label="Divider"
      />

      <Outlet />
    </div>
  )
}

export default App
