import navStyles from "../styles/Navbar.module.scss";
import React from "react";
import NavItem from "./NavItem";
import Button from "./Button";
import pageLinks from "../pageLinks";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  const startAnim = 1;

  const ulAnimation = {
    hidden: { opacity: 0, y: "-50px" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: startAnim,
        delayChildren: 0,
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
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.navItems}>
        <Logo />
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
