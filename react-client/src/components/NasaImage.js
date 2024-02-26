import { useGetApodQuery } from "../features/nasa/nasaApi";

export default function NasaImage({ imageUrl, imageAlt }) {
  const { data, isError, isLoading, isSuccess, error } = useGetApodQuery();

  return(
    <div>
      {isSuccess ? <a href={data.hdurl}>
        <img className="full-image" src={data.hdurl} alt={data.explanation}/>
      </a>
    : <p>Image is loading...</p>}
    </div>
  )
}
