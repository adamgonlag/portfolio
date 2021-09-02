import React from "react";
import contactStyles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <section id={contactStyles.contact}>
      <h1 className="section__title">Contact</h1>
      <div className={contactStyles.form}>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
