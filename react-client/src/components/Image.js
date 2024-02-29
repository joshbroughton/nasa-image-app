import { useParams, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { orbit } from "ldrs";

import { useGetImageQuery } from "../slices/nasaApi";

export default function Details() {
  orbit.register();

  const { nasaID } = useParams();
  const { state } = useLocation();
  const { data, isLoading, isSuccess } = useGetImageQuery({nasaID: nasaID});

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
          duration: 3,
        }}
        >
        <h2>{state.title}</h2>
        <a className="image-anchor" href={data.collection.items[0].href}>
          <img className="full-image" src={data.collection.items[1].href} alt="space" />
        </a>
      </motion.div>}
    </AnimatePresence>
  )
}
