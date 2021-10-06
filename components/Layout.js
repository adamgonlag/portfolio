import React, { useState, useEffect } from "react";

import styles from "../styles/Layout.module.scss";
import Navbar from "./Navbar";
import Link from "next/link";

import { FaGithub, FaArrowAltCircleUp } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

import Meta from "./Meta";

const Layout = ({ children }) => {
  const [lastYPos, setLastYPos] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShowNav(isScrollingUp);
      setLastYPos(yPos);
    };

    if (lastYPos > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  const scrollAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={styles.layout}>
      <AnimatePresence>
        {showScrollToTop && (
          <motion.div
            key="scrollToTop"
            className={styles.toTopIcon}
            variants={scrollAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <Link href="/#hero" passHref>
              <FaArrowAltCircleUp />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <Meta />
      <Navbar lastYPos={lastYPos} showNav={showNav} setShowNav={setShowNav} />

      <div id="content" className={styles.content}>
        <ParticleBackground />
        {/* Load page content into main tag with children props*/}
        <div className={styles.container}>
          <main className={styles.main}>{children}</main>
        </div>
      </div>
      <footer id="footer" className={styles.footer}>
        <div className={styles.social}>
          <ul>
            <li>
              <a
                href="https://www.github.com/adamgonlag"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/adamgonlag"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.content}>Designed and built by Adam Gonlag</div>
      </footer>
    </div>
  );
};

export default Layout;
