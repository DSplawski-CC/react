export interface MovieDto {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
}

export interface MoviesDto {
  page: number;
  results: MovieDto[];
  total_pages: number;
  total_results: number;
}

export async function getMoviesPopular(page = 1) {
  const result = await fetch(`${import.meta.env.VITE_API_URL}/movies/popular?page=${page}`, {
    credentials: 'include',
  });

  return result.json() as MoviesDto;
}

export async function getMovieDetails(movieId: number) {
  const result = await fetch(`${import.meta.env.VITE_API_URL}/movies/${movieId}`, {
    credentials: 'include',
  });

  return result.json() as MovieDto;
}