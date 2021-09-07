import React from "react";
import ProjectItem from "./ProjectItem";
import styles from "../styles/ProjectList.module.scss";

export default function ProjectList({ projects }) {
  return (
    <section id="projects" className={styles.section}>
      <h2 className="section__title">Projects</h2>
      <ul className={styles.projectList}>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  return { props: { projects } };
};
