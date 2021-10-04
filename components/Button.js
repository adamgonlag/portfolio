import React from "react";
import buttonStyles from "../styles/Button.module.scss";
import pageLinks from "../pageLinks";
import Link from "next/link";

export default function Button({ text, slug, type }) {
  let button;
  if (slug) {
    button = (
      <Link href={slug} passHref>
        <button type={type} className={buttonStyles.button}>
          <a>
            <span>
              <span>{text}</span>
            </span>
          </a>
        </button>
      </Link>
    );
  } else if (text === "Resume") {
    button = (
      <button type={type} className={buttonStyles.button}>
        <a
          href="https://drive.google.com/file/d/1dCLmS3m6Z9u7iQur4slfDcbGOBMwXhed/view"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <span>{text}</span>
          </span>
        </a>
      </button>
    );
  } else if (text === "Say Hi!") {
    button = (
      <button type={type} className={buttonStyles.button}>
        <a>
          <span>
            <span>{text}</span>
          </span>
        </a>
      </button>
    );
  } else if (text === "Success!") {
    button = (
      <button
        type={type}
        className={`${buttonStyles.button} ${buttonStyles.success}`}
      >
        <a>
          <span>
            <span>{text}</span>
          </span>
        </a>
      </button>
    );
  }

  return button;
}
