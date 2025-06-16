export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function getMoviesPopular(page = 1) {
  return await (await fetch(`${import.meta.env.VITE_API_URL}/movies/popular?page=${page}`, {
    credentials: 'include',
  })).json() as MoviesResponse;
}

export async function getMovieDetails(movieId: number) {
  if (!movieId) {
    return null;
  }

  return await (await fetch(`${import.meta.env.VITE_API_URL}/movies/${movieId}`, {
    credentials: 'include',
  })).json() as Movie;
}