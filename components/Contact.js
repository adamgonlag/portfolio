import React from "react";
import styles from "../styles/Contact.module.scss";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h1 className="section__title">Get in touch</h1>
      <div className={styles.content}>
        <ContactForm />
      </div>
    </section>
  );
}
