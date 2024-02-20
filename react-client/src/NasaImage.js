export default function NasaImage({ imageUrl, imageAlt }) {
  return(
    <div>
      <img src={imageUrl} alt={imageAlt}></img>
    </div>
  )
}
