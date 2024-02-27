import { useGetApodQuery } from "../slices/nasaApi";

export default function NasaImage({ imageUrl, imageAlt }) {
  const { data, isError, isLoading, isSuccess, error } = useGetApodQuery();

  if (isLoading) {
    return(<p>Image is loading...</p>)
  } else if (isSuccess) {
    return(
      <div className="image-container">
        <h2>{data.title}</h2>
        <a className="image-anchor" href={data.hdurl}>
          <img className="full-image" src={data.hdurl} alt={data.explanation}/>
        </a>
        <p className="explanation">{data.explanation}</p>
      </div>
    )
  }
}
