import React from "react";
import buttonStyles from "../styles/Button.module.scss";

export default function Button({ text }) {
  return (
    <button className={buttonStyles.button}>
      <span>
        <span>{text}</span>
      </span>
    </button>
  );
}
