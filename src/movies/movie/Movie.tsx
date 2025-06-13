import MovieDetails from './movie-details/MovieDetails.tsx';


export function Movie() {
  return (
    <MovieDetails movie={{
      id: 1,
      title: 'Inception',
      release_date: '2010-07-16',
      runtime: 148,
      vote_average: 8.8,
      vote_count: 2000000,
      overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.'
    }}
    />
  )
}