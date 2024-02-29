import { motion, AnimatePresence } from "framer-motion";
import  { orbit } from "ldrs";

import { useGetApodQuery } from "../slices/nasaApi";

export default function NasaImage() {
  orbit.register();
  const { data, isLoading, isSuccess } = useGetApodQuery();


  if (isLoading) {
    return(
      <AnimatePresence>
        {isLoading && <motion.div
          className="image-container"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, delay: 3 }}
          >
          <l-orbit size="100" color="white"></l-orbit>
        </motion.div>}
      </AnimatePresence>
      )
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
