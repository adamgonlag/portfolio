import React from "react";
import projectStyles from "../styles/Project.module.scss";

export default function ProjectItem({ project }) {
  return (
    <div className={projectStyles.project}>
      <h1>{project.title}</h1>
      <p>{project.body}</p>
    </div>
  );
}
