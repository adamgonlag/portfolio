import React from "react";
import { motion } from "framer-motion";

export default function HomeTransitionOnLoad() {
  return (
    <motion.div
      className={styles.loader}
      variants={container}
      animate="animate"
      exit="exit"
      onAnimationComplete={() => setPageLoading(false)}
    ></motion.div>
  );
}
