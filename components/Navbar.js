import navStyles from "../styles/Navbar.module.css";
import React from "react";
import NavItem from "./NavItem";

const menuItems = [
  { id: 1, name: "Home", slug: "/" },
  { id: 2, name: "About", slug: "/about" },
  { id: 3, name: "Experience", slug: "/experience" },
  { id: 4, name: "Projects", slug: "/projects" },
  { id: 5, name: "Contact", slug: "/contact" },
];

const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
      <ul className={navStyles.navbar__list}>
        {menuItems.map((item) => {
          return <NavItem key={item.id} item={item} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
