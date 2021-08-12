import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Adam</span> Gonlag
      </h1>
      <p className={headerStyles.description}>
        Software Developer based in Sydney, Australia
      </p>
    </div>
  );
};

export default Header;
