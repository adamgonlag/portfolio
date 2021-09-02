import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectList({ projects }) {
  return (
    <section id="projects">
      <h1 className="section__title">Some things Ive built</h1>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </section>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  return { props: { projects } };
};
