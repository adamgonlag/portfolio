import { useState } from "react";
import Button from "../components/Button";
import styles from "../styles/ContactForm.module.scss";
const axios = require("axios");

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    const input = event.target.name;
    if (input === "name") {
      setName(value);
    } else if (input === "email") {
      setEmail(value);
    } else if (input === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    axios
      .post("/api/contact", {
        name,
        email,
        message,
      })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setName("");
          setEmail("");
          setMessage("");
          setSubmitted(true);
          document.activeElement.blur();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFocus = () => {
    if (submitted) {
      setSubmitted(false);
    }
  };

  let msg = "Say Hi!";
  if (submitted) {
    msg = "Success!";
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.field}>
        <input
          className={styles.input}
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          required
          onFocus={handleFocus}
        />
        <label className={styles.label} htmlFor="name">
          Name
        </label>
      </div>
      <div className={styles.field}>
        <input
          className={styles.input}
          onChange={handleChange}
          value={email}
          type="text"
          name="email"
          required
          onFocus={handleFocus}
        />
        <label className={styles.label} htmlFor="email">
          Email
        </label>
      </div>
      <div className={styles.field}>
        <textarea
          className={styles.input}
          onChange={handleChange}
          value={message}
          type="text"
          name="message"
          rows="10"
          cols="50"
          required
          onFocus={handleFocus}
        />
        <label className={styles.label} htmlFor="message">
          Message
        </label>
      </div>

      <Button type="submit" text={msg}></Button>
    </form>
  );
}
