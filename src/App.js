import "./App.css";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { MovieList } from "./components/MovieList";
import { SelectedMovieDetails } from "./components/SelectedMovieDetails";
import { WatchedMovies } from "./components/WatchedMovies";

const KEY = process.env.REACT_APP_OMDB_API_KEY;

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Runtime: "148 min",
    imdbRating: "8.8",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Runtime: "136 min",
    imdbRating: "8.7",
  },
];

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0816692",
    Title: "Interstellar",
    Year: "2014",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNzM5Ml5BMl5BanBnXkFtZTgwNzUxNjY3MjE@._V1_SX300.jpg",
  },
];

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [error, setError] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watched, setWatched] = useState(tempWatchedData);

  function handleAddToWatched() {
    const alreadyWatched = watched.some(
      (movie) => movie.imdbID === selectedMovie.imdbID
    );

    if (alreadyWatched) return;

    setWatched((watched) => [...watched, selectedMovie]);
    setSelectedMovie(null);
    setSelectedMovieId(null);
  }

  useEffect(() => {
    const controller = new AbortController();

    if (!query) {
      setMovies(tempMovieData);
      setError("");
      setSelectedMovie(null);
      setSelectedMovieId(null);
      return;
    }

    async function fetchData() {
      try {
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        if (data.Response === "False") throw new Error(data.Error);
        setMovies(data.Search);
      } catch (err) {
        if (err.name !== "AbortError") {
          setMovies([]);
          setError(err.message);
        }
      }
    }

    fetchData();
    return () => controller.abort();
  }, [query]);

  useEffect(() => {
    if (!selectedMovieId) return;

    async function fetchMovie() {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovieId}`
      );
      const data = await res.json();
      setSelectedMovie(data);
    }

    fetchMovie();
  }, [selectedMovieId]);

  return (
    <>
      <Navbar search={query} setQuery={setQuery} />
      <div className="container">
        <MovieList movies={movies} onSelect={setSelectedMovieId} />
        {selectedMovie ? (
          <SelectedMovieDetails
            movie={selectedMovie}
            onAddToWatched={handleAddToWatched}
          />
        ) : (
          <WatchedMovies watched={watched} />
        )}
      </div>
      {error && <p>{error}</p>}
    </>
  );
}

export default App;
