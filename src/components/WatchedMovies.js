import { WatchedMovie } from "./WatchedMovie";

export function WatchedMovies({ watched }) {
  return (
    <div className="right-box">
      <h2>Watched Movies</h2>
      {watched.length === 0 ? (
        <p>No watched movies yet</p>
      ) : (
        watched.map((movie) => (
          <WatchedMovie key={movie.imdbID} movie={movie} />
        ))
      )}
    </div>
  );
}
