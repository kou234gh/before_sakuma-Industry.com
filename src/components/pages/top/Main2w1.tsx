import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { work1Images } from "../../../img/working/working1/index"

export default function Main2w1() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);


  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="w-[100%] h-[80vw] lg:h-[30vw]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3 } }}
        exit={{ opacity: 0 }}
        key={seconds}
      >
        <img
          // src={work1Images[seconds % work1Images.length]}
          src={work1Images[seconds % work1Images.length]}
          alt="A London skyscraper"
          className="w-[100%] h-[100%]" />
      </motion.div>
    </AnimatePresence>
  );
}