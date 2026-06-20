export function Search({ search, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={search}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
