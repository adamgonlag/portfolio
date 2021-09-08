import React from "react";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <h1 className="section__title">About</h1>
      <div className={styles.about}>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo
            corrupti sunt placeat voluptate deleniti, ea iusto repudiandae aut
            consequatur.
          </p>
          <p>
            Nihil, maxime labore cumque fugit delectus architecto distinctio
            nulla? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusamus odio, ducimus quaerat natus ut dicta. Quisquam aspernatur
            atque porro vitae.
          </p>
          <p>
            Quam odit ducimus voluptatem sunt alias impedit numquam autem
            incidunt, iste dolorem repellendus laborum magni maxime sint
            laudantium nulla itaque?
          </p>
        </div>
        <div className={styles.image}>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
}
