import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import MoviesView from './movies/movies/MoviesView.tsx';
import { MovieView } from './movies/movie/MovieView.tsx';
import LoginView from './login/LoginView.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/movies" element={<MoviesView />} />
          <Route path="/sign-in" element={<LoginView />} />
          <Route path="/movie/:movieId" element={<MovieView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
