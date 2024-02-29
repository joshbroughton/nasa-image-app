import { Link } from "react-router-dom";

export default function SearchResult({ data }) {
  return(
    <Link to={`/image/${data.data[0].nasa_id}`} state={{ title: data.data[0].title }} className="search-result">
      <p>{data.data[0].title}</p>
      <img className="thumbnail-image" src={data.links[0].href} alt={data.data[0].title}></img>
    </Link>
  )
}
