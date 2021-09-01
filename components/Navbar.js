import navStyles from "../styles/Navbar.module.scss";
import React from "react";
import NavItem from "./NavItem";

const menuItems = [
  { id: 1, name: "About", slug: "/about" },
  { id: 2, name: "Projects", slug: "/projects" },
  { id: 3, name: "Contact", slug: "/contact" },
];

const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.navbar__logo}>AG</div>
      <ul className={navStyles.navbar__list}>
        {menuItems.map((item) => {
          return <NavItem key={item.id} item={item} />;
        })}
        <li>
          <button className={navStyles.navbar__button}>
            <span>
              <span>Resume</span>
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
