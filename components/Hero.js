import React from "react";
import Button from "./Button";

import heroStyles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <section className={heroStyles.hero}>
      <h1 className={heroStyles.title}>Adam Gonlag</h1>
      <h2 className={heroStyles.tagline}>
        Software Developer based in Sydney, Australia
      </h2>
      <p className={heroStyles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
        consequatur optio aut dicta! Omnis amet neque ut saepe recusandae
        nesciunt.
      </p>
      <Button text="View my work" />
    </section>
  );
};

export default Hero;
