import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

import heroStyles from "../styles/Hero.module.scss";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const startAnim = 1.3;
  const h1Animation = {
    hidden: { opacity: 0, y: "50px" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: startAnim,
        duration: 0.5,
      },
    },
  };

  const h2Animation = {
    hidden: { opacity: 0, y: "50px" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: startAnim + 0.2,
        duration: 0.5,
      },
    },
  };

  const pAnimation = {
    hidden: { opacity: 0, y: "50px" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: startAnim + 0.4,
        duration: 0.5,
      },
    },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, y: "50px" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: startAnim + 0.6,
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <ParticleBackground />
      <section id="hero" className={heroStyles.hero}>
        <motion.h1
          className={heroStyles.title}
          variants={h1Animation}
          initial="hidden"
          animate="show"
        >
          Adam Gonlag
        </motion.h1>
        <motion.h2
          className={heroStyles.tagline}
          variants={h2Animation}
          initial="hidden"
          animate="show"
        >
          Software Developer based in Sydney, Australia
        </motion.h2>
        <motion.p
          className={heroStyles.description}
          variants={pAnimation}
          initial="hidden"
          animate="show"
        >
          Civil Engineer turned software developer who is excited to begin a
          career building awesome things for the web.
        </motion.p>
        <motion.div variants={buttonAnimation} initial="hidden" animate="show">
          <Button text="View my work" slug="/#projects" />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
