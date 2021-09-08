import { useState } from "react";
import Button from "../components/Button";
import styles from "../styles/ContactForm.module.scss";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    console.log(name, email, message);
  };

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
        />
        <label className={styles.label} htmlFor="name">
          Name
        </label>
      </div>
      <div className={styles.field}>
        <input
          className={styles.input}
          onChange={handleChange}
          type="text"
          name="email"
          required
        />
        <label className={styles.label} htmlFor="email">
          Email
        </label>
      </div>
      <div className={styles.field}>
        <textarea
          className={styles.input}
          onChange={handleChange}
          type="text"
          name="message"
          required
        />
        <label className={styles.label} htmlFor="message">
          Message
        </label>
      </div>

      <Button type="submit" text="Submit" slug="#"></Button>
    </form>
  );
}
