import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import  { orbit } from "ldrs";

import { useGetApodQuery } from "../slices/nasaApi";

export default function NasaImage() {


  orbit.register();
  const { data, isLoading, isSuccess } = useGetApodQuery();

  const cacheImage = async (src) => {
    const promise = new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => reject();
    });

    await Promise.all([promise])
  };

  useEffect(() => {
    if (data) {
      cacheImage(data.hdurl)
    }
  }, [isSuccess])

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
          {data.copyright && <p className="explanation">Image copyright: {data.copyright}</p>}
        </motion.div>}
      </AnimatePresence>
  )
}
