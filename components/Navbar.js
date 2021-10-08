import navStyles from "../styles/Navbar.module.scss";
import React, { useState } from "react";
import NavItem from "./NavItem";
import Button from "./Button";
import pageLinks from "../pageLinks";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ showNav, setShowNav, lastYPos }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  let startAnim;
  let staggerChildren;

  let inHeroSection;
  let navbarClass = navStyles.navbar;
  if (lastYPos < 600) {
    inHeroSection = true;
    startAnim = 1;
    staggerChildren = 0.3;
  } else {
    navbarClass += ` ${navStyles.outHero}`;
    inHeroSection = false;
    startAnim = 0;
  }

  let ulClass = navStyles.list;
  if (navbarOpen) {
    ulClass += ` ${navStyles.showMenu}`;
  }

  const navBarVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0, y: "-50px", transition: { duration: 0.5 } },
  };

  const ulAnimation = {
    hidden: { opacity: 0, y: "-50px" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: startAnim,
        delayChildren: 0,
        staggerChildren: staggerChildren,
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

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const navBar = (
    <motion.nav
      key="navbar"
      className={navbarClass}
      variants={navBarVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className={navStyles.navItems}>
        <Logo key="logo" />
        <motion.ul
          key="nav-list"
          className={ulClass}
          variants={ulAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {pageLinks
            .filter((link) => link.type === "menu")
            .map((item) => {
              return (
                <NavItem
                  setNavbarOpen={setNavbarOpen}
                  key={item.id}
                  item={item}
                />
              );
            })}
          <motion.li key="resume-button" variants={liAnimation}>
            <Button text="Resume" />
          </motion.li>
        </motion.ul>
      </div>
      <button
        key="hamburger"
        className={navStyles.hamburger}
        onClick={handleToggle}
      >
        {navbarOpen ? (
          <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
        ) : (
          <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
        )}
      </button>
    </motion.nav>
  );

  return (
    <>
      <AnimatePresence>{showNav && navBar}</AnimatePresence>
    </>
  );
};

export default Navbar;
