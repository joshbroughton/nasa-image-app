import { useSelector } from "react-redux";

import SearchResult from "./SearchResult";

export default function SearchResults() {
  const searchResults = useSelector((state) => state.search);
  return(
    <div className="results-container">
      {searchResults[0].map((data) => <SearchResult data={data} />)}
    </div>
  )
}
