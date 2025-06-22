import MoviesList from "../components/MoviesList";
import SearchBox from "../components/search-box";

const API_KEY = process.env.API_KEY;

export default async function Home() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, {
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

  return (
    <>
    <SearchBox/>
    <MoviesList results={movies.results} />
    </>
  );
}
