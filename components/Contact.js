import React from "react";
import styles from "../styles/Contact.module.scss";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h1 className="section__title">Contact</h1>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo
          corrupti sunt placeat voluptate deleniti, ea iusto repudiandae aut
          consequatur.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
