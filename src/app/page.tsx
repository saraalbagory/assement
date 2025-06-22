import MoviesList from "../components/MoviesList";

const API_KEY = process.env.API_KEY;

const query = 'JUNGLE';
const searchURl = `/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;

export default async function Home() {
  const res = await fetch(`https://api.themoviedb.org/3${searchURl}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const movies = await res.json();
  // if (movies?.results) {
  //   return <div>No movies found</div>;
  // }
  return (
    
    <MoviesList results={movies.results} />
    
  );
}
