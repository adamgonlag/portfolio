/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Project.module.scss";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectItem({ project }) {
  return (
    <li className={styles.project}>
      <div className={styles.content}>
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
      </div>
      <div className={styles.image}>
        <a href={project.links.demo} target="_blank" rel="noreferrer">
          <img src={project.image.src} alt={project.image.alt} />
        </a>
      </div>
    </li>
  );
}
