import { MovieCard } from "./MovieCard";

export function MovieList({ movies, onSelect }) {
  return (
    <div className="left-box">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onSelect={onSelect} />
      ))}
    </div>
  );
}
