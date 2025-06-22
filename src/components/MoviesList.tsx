import { Movie } from "../models/Movies";
import MovieCard from "./MovieCard";


type MoviesListProps = {
  results: Movie[];
};


export default function MoviesList({ results} : MoviesListProps) {
  return (
    <div className=' bg-grey-500 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-4 mx-auto py-4 '>
      {results.map((movie) => (
        <MovieCard
          key={movie.id}
          {...movie}/>
      ))}
    </div>
  );
}