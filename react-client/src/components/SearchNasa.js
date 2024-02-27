import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useLazyGetSearchQuery } from "../slices/nasaApi";
import { add } from "../slices/searchSlice";


export default function SearchNasa() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState();
  const [trigger] = useLazyGetSearchQuery();

  const searchAction = async (e) => {
    e.preventDefault();
    await dispatch(add(await trigger({search: search, page: 1})))
    navigate('/search', { state: { searchTerm: search }})
  }

  return(
    <form className="search-form">
      <input
        className="search-input"
        type="text"
        placeholder="search for more images..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}></input>
      <button className="search-button" onClick={searchAction}></button>
    </form>
  )
}
