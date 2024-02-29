import { motion } from "framer-motion";

import { useGetApodQuery } from "../slices/nasaApi";

export default function NasaImage() {
  const { data, isError, isLoading, isSuccess, error } = useGetApodQuery();

  if (isLoading) {
    return(<p>Image is loading...</p>)
  } else if (isSuccess) {
    return(
      <motion.div 
        className="image-container"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        >
        <h2>{data.title}</h2>
        <a className="image-anchor" href={data.hdurl}>
          <img className="full-image" src={data.hdurl} alt={data.explanation}/>
        </a>
        <p className="explanation">{data.explanation}</p>
        <p className="explanation">Image copyright: {data.copyright}</p>
      </motion.div>
    )
  }
}
