import { NavLink } from "react-router-dom";

import SearchNasa from "./SearchNasa";

export default function Navbar() {
  return(
    <header className="header">
      <NavLink to="/" className="home-link">Home</NavLink>
      <h1 className="page-title">Nasa Astronomy Picture of the Day</h1>
      <SearchNasa />
    </header>
  )
}
