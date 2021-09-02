import navStyles from "../styles/Navbar.module.scss";
import React from "react";
import NavItem from "./NavItem";
import Button from "./Button";
import pageLinks from "../pageLinks";

const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.navItems}>
        <div className={navStyles.logo}>AG</div>
        <ul className={navStyles.list}>
          {pageLinks
            .filter((link) => link.type === "menu")
            .map((item) => {
              return <NavItem key={item.id} item={item} />;
            })}
          <li>
            <Button text="Resume" slug="/resume" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
