import navStyles from "../styles/Navbar.module.scss";
import React from "react";
import NavItem from "./NavItem";
import Button from "./Button";

const menuItems = [
  { id: 1, name: "Projects", slug: "/#projects" },
  { id: 2, name: "About", slug: "/#about" },
  { id: 3, name: "Contact", slug: "/#contact" },
];

const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.navItems}>
        <div className={navStyles.logo}>AG</div>
        <ul className={navStyles.list}>
          {menuItems.map((item) => {
            return <NavItem key={item.id} item={item} />;
          })}
          <li>
            <Button text="Resume" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
