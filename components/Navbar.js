import navStyles from "../styles/Navbar.module.scss";
import React from "react";
import NavItem from "./NavItem";
import Button from "./Button";
import pageLinks from "../pageLinks";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const Navbar = ({ showNav, setShowNav, lastYPos }) => {
  let startAnim;
  let staggerChildren;

  let inHeroSection;
  let bgClass = navStyles.navbar;
  if (lastYPos < 600) {
    inHeroSection = true;
    startAnim = 1;
    staggerChildren = 0.3;
  } else {
    bgClass += ` ${navStyles.outHero}`;
    inHeroSection = false;
    startAnim = 0;
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

  const navBar = (
    <motion.nav
      className={bgClass}
      variants={navBarVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className={navStyles.navItems}>
        <Logo />
        <motion.ul
          className={navStyles.list}
          variants={ulAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
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
    </motion.nav>
  );

  return (
    <>
      <AnimatePresence>{showNav && navBar}</AnimatePresence>
    </>
  );
};

export default Navbar;
