/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "../styles/Project.module.scss";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectItem({ project, i }) {
  const [hover, setHover] = useState(false);

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      console.log("animate");
      controls.start("animate");
    }
    if (!inView) {
      // console.log("back to initial ");
      // controls.start("initial");
    }
  }, [controls, inView]);

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
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const contentVariants = {
    initial: (i) => {
      if (i % 2 === 0) {
        return { opacity: 0, x: 40 };
      } else {
        return { opacity: 0, x: -40 };
      }
    },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.li
      className={styles.project}
      variants={projectVariants}
      initial="initial"
      animate={controls}
      ref={ref}
    >
      <motion.div
        className={styles.content}
        variants={contentVariants}
        custom={i}
      >
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
