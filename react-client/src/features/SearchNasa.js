import { useState } from "react";

import { useLazyGetSearchQuery } from "./nasa/nasaApi";

export default function SearchNasa() {
  const [search, setSearch] = useState("Search images");
  const [results, setResults] = useState();
  const [trigger] = useLazyGetSearchQuery();

  if (results) {
    return(<></>)
  } else {
    return(
      <form>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder=""></input>
        <button onClick={async (e) => {
          e.preventDefault();
          setResults(await trigger({search: search, page: 1}))
        }}
          ></button>
      </form>
    )
  }
}
