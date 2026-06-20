export function SelectedMovieDetails({ movie, onAddToWatched }) {
  return (
    <div className="right-box">
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <p>{movie.Runtime}</p>
      <p>⭐ {movie.imdbRating}</p>
      <p>{movie.Genre}</p>
      <button onClick={onAddToWatched}>Add to Watched</button>
    </div>
  );
}
