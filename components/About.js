import React from "react";
import styles from "../styles/About.module.scss";

export default function About() {
  const p1 = `Civil Engineer/Project Manager turned Software Developer, I have a passion for solving complex technical problems and working with great people to achieve awesome things.`;
  const p2 = `I’m excited for the next stage in my career where I can continue to learn and use my engineering and project management skills to add value from day 1`;
  const p3 = `When I'm not behind a screen, you'll find me playing music, taking care of the lawn or hitting the trails on a mountain bike.`;
  return (
    <section id="about" className={styles.section}>
      <h1 className="section__title">About</h1>
      <div className={styles.about}>
        <div className={styles.content}>
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
        </div>
      </div>
    </section>
  );
}
