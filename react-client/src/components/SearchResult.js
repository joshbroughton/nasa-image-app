import { NavLink } from "react-router-dom";

export default function SearchResult({ data }) {
  return(
    <NavLink to={`/image/${data.data[0].nasa_id}`} className="search-result">
      <p>{data.data[0].title}</p>
      <img className="thumbnail-image" src={data.links[0].href} alt={data.data[0].title}></img>
    </NavLink>
  )
}
