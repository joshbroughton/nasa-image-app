import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import SearchResult from "./SearchResult";

export default function SearchResults() {
  const searchResults = useSelector((state) => state.search);
  const location = useLocation();

  if (Object.keys(searchResults).includes(location.state.searchTerm)) {
    return(
      <div className="App">
        <div className="results-container">
          {searchResults[`${location.state.searchTerm}`].map((data) => <SearchResult data={data} />)}
        </div>
      </div>
    )
  } else {
    return(<p>Loading</p>)
  }
}
