import { useGetApodQuery } from "../slices/nasaApi";

export default function NasaImage({ imageUrl, imageAlt }) {
  const { data, isError, isLoading, isSuccess, error } = useGetApodQuery();

  return(
    <div className="image-container">
      {isSuccess ? <a className="image-anchor" href={data.hdurl}>
        <img className="full-image" src={data.hdurl} alt={data.explanation}/>
      </a>
    : <p>Image is loading...</p>}
    </div>
  )
}
