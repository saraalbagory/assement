import { Movie } from "../../models/Movies";
import MovieCard from "../MoviesCard/MovieCard";


type MoviesListProps = {
  results: Movie[];
};


export default function MoviesList({ results }: Readonly<MoviesListProps>) {
  return (
    <div className='list-grid'>
      {results.map((movie:Movie) => (
        <MovieCard
          key={movie.id}
          {...movie} />
      ))}
    </div>
  );
}