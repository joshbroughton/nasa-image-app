import { motion, AnimatePresence } from "framer-motion";
import  { orbit } from "ldrs";

import { useGetApodQuery } from "../slices/nasaApi";

export default function NasaImage() {
  orbit.register();
  const { data, isLoading, isSuccess } = useGetApodQuery();

    return(
      <AnimatePresence mode="wait">
          {isLoading && <motion.div
            key="loader"
            className="image-container"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{y: -300,
              opacity: 0,
              transition: {
                duration: 1,
                ease: "easeInOut",}}}
            >
            <l-orbit size="100" color="white"></l-orbit>
          </motion.div>}
        {isSuccess && <motion.div
          key="image"
          className="image-container"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
          }}
          >
          <h2>{data.title}</h2>
          <a className="image-anchor" href={data.hdurl}>
            <img className="full-image" src={data.hdurl} alt={data.explanation}/>
          </a>
          <p className="explanation">{data.explanation}</p>
          <p className="explanation">Image copyright: {data.copyright}</p>
        </motion.div>}
      </AnimatePresence>
    )
}
