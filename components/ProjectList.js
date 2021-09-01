import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectList({ projects }) {
  return (
    <div className="dummy">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  return { props: { projects } };
};
