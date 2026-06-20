import { Search } from "./Search";

export function Navbar({ search, setQuery }) {
  return (
    <nav className="navbar">
      <h1>🎬 MovieVault</h1>
      <Search search={search} setQuery={setQuery} />
    </nav>
  );
}
