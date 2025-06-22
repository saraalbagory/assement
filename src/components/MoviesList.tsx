import { Movie } from "../models/Movies";


type MoviesListProps = {
  results: Movie[];
};


export default function MoviesList({ results }: MoviesListProps) {
  return (
    <div>
      {results.map((movie) => (
        <div key={movie.id}>{movie.original_title}</div>
      ))}
    </div>
  );
}