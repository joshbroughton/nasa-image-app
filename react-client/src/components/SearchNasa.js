import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useLazyGetSearchQuery } from "../slices/nasaApi";
import { add } from "../slices/searchSlice";

export default function SearchNasa() {
  const dispatch = useDispatch();
  // const searchResults = useSelector((state) => state.search);

  const [search, setSearch] = useState("Search images");
  const [trigger] = useLazyGetSearchQuery();

  return(
    <form>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder=""></input>
      <button onClick={async (e) => {
        e.preventDefault();
        dispatch(add(await trigger({search: search, page: 1})))
      }}
        ></button>
    </form>
  )
}
