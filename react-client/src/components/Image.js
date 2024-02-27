import { useParams } from "react-router-dom"
import { useGetImageQuery } from "../slices/nasaApi";

export default function Details() {
  let { nasaID } = useParams();
  const { data, isError, isLoading, isSuccess, error } = useGetImageQuery({nasaID: nasaID});

  if (isLoading) {
    return(<p>Loading...</p>)
  } else if (isSuccess) {
    console.log(data);
    return(
      <div className="image-container">
        <h2>{data.title}</h2>
        <a className="image-anchor" href={data.collection.items[0].href}>
          <img className="full-image" src={data.collection.items[0].href} alt="space"/>
        </a>
      </div>
    )
  }
}
