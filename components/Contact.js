import React from "react";
import contactStyles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <div className={contactStyles.contact}>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
