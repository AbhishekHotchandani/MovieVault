export function WatchedMovie({ movie }) {
  return (
    <div className="watched-movie">
      <img src={movie.Poster} alt={movie.Title} width="50" />
      <div>
        <h4>{movie.Title}</h4>
        <p>⭐ {movie.imdbRating}</p>
      </div>
    </div>
  );
}
