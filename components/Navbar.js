import navStyles from "../styles/Navbar.module.scss";
import React from "react";
import NavItem from "./NavItem";
import Button from "./Button";
import pageLinks from "../pageLinks";
import { motion } from "framer-motion";

const Navbar = () => {
  const ulAnimation = {
    hidden: { opacity: 0, y: "-50px" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const liAnimation = {
    hidden: { opacity: 0, y: "-50px" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.navItems}>
        <div className={navStyles.logo}>AG</div>
        <motion.ul
          className={navStyles.list}
          variants={ulAnimation}
          initial="hidden"
          animate="show"
        >
          {pageLinks
            .filter((link) => link.type === "menu")
            .map((item) => {
              return <NavItem key={item.id} item={item} />;
            })}
          <motion.li variants={liAnimation}>
            <Button text="Resume" slug="/resume" />
          </motion.li>
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;
