import React from "react";
import buttonStyles from "../styles/Button.module.scss";
import pageLinks from "../pageLinks";
import Link from "next/link";

export default function Button({ text, slug }) {
  return (
    <Link href={slug} passHref>
      <button className={buttonStyles.button}>
        <a>
          <span>
            <span>{text}</span>
          </span>
        </a>
      </button>
    </Link>
  );
}
