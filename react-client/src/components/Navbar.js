import SearchNasa from "./SearchNasa";

export default function Navbar() {
  return(
    <header className="header">
      <h1 className="page-title">Nasa Astronomy Picture of the Day</h1>
      <SearchNasa />
    </header>
  )
}
