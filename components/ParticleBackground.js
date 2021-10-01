import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../config/particles-config1";
import styles from "../styles/HomeTransitionOnLoad.module.scss";
import { AnimatePresence, motion } from "framer-motion";

export default function ParticleBackground() {
  const variants = {
    initial: { opacity: 1 },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <motion.div
        className={styles.container}
        variants={variants}
        initial="initial"
        animate="animate"
      ></motion.div>
      <Particles params={ParticleConfig}></Particles>
    </>
  );
}
