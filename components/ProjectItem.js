/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "../styles/Project.module.scss";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectItem({ project }) {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  let imgSource;
  let imageAlt;
  if (hover) {
    imgSource = project.gif.src;
    imageAlt = project.gif.src;
  } else {
    imgSource = project.image.src;
    imageAlt = project.image.src;
  }

  const projectVariants = {
    initial: {},
  };

  const imageVariants = {
    initial: { opacity: 0, y: "-50px" },
    animate: { opacity: 1, y: 0 },
  };

  const contentVariants = {
    initial: { opacity: 0, x: "-50px" },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <motion.li
      className={styles.project}
      variants={projectVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div className={styles.content} variants={contentVariants}>
        <h1 className={styles.heading}>{project.title}</h1>
        <div className={styles.description}>
          <p>{project.description}</p>
        </div>
        <div className={styles.techList}>
          <ul>
            {project.tech.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <a href={project.links.github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href={project.links.demo} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        className={styles.image}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        variants={imageVariants}
      >
        <a href={project.links.demo} target="_blank" rel="noreferrer">
          <img src={imgSource} alt={project.image.alt} />
        </a>
      </motion.div>
    </motion.li>
  );
}
