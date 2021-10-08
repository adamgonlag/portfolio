/* eslint-disable @next/next/no-img-element */

import React from "react";

import styles from "../styles/Skills.module.scss";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <h2 className="section__title">Skills</h2>
      <ul className={styles.skillsList}>
        {skills.map((skill, i) => {
          return (
            <li key={i} className={styles.skill}>
              <img src={skill.img} alt={skill.name} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
