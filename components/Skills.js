import React from "react";
import styles from "../styles/Skills.module.scss";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <h2 className="section__title">Skills</h2>
      <ul className={styles.skillsList}>
        <li className={styles.skill}></li>
      </ul>
    </section>
  );
}
