import React from "react";
import buttonStyles from "../styles/Button.module.scss";
import pageLinks from "../pageLinks";
import Link from "next/link";

export default function Button({ text, slug, type }) {
  let button = (
    <button type={type} className={buttonStyles.button}>
      <a>
        <span>
          <span>{text}</span>
        </span>
      </a>
    </button>
  );

  if (!type) {
    button = (
      <Link href={slug} passHref>
        {button}
      </Link>
    );
  }

  return button;
}
