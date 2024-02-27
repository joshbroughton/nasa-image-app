export default function SearchResult({ data }) {
  return(
    <div className="search-result">
      <h1>{data.data[0].title}</h1>
      <img className="thumbnail-image" src={data.links[0].href} alt={data.data[0].title}></img>
    </div>
  )
}
