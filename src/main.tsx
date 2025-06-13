import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import MoviesList from './movies/movies-list/MoviesList.tsx';
import { Movie } from './movies/movie/Movie.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
