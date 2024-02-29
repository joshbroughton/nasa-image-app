import { useParams, useLocation } from "react-router-dom"
import { useGetImageQuery } from "../slices/nasaApi";

export default function Details() {
  const { nasaID } = useParams();
  const { state } = useLocation();
  const { data, isError, isLoading, isSuccess, error } = useGetImageQuery({nasaID: nasaID});

  console.log(state);
  if (isLoading) {
    return(<p>Loading...</p>)
  } else if (isSuccess) {
    console.log(data);
    return(
      <div className="image-container">
        <h2>{state.title}</h2>
        <a className="image-anchor" href={data.collection.items[0].href}>
          <img className="full-image" src={data.collection.items[0].href} alt="space"/>
        </a>
      </div>
    )
  }
}
