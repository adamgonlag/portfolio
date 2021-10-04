import React, { useState, useEffect } from "react";

import styles from "../styles/Layout.module.scss";
import Navbar from "./Navbar";
import Link from "next/link";

import { FaGithub, FaArrowAltCircleUp } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

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

  const handleClick = () => {};

  return (
    <div className={styles.layout}>
      {showScrollToTop && (
        <div className={styles.toTopIcon} onClick={handleClick}>
          <Link href="/#hero" passHref>
            <FaArrowAltCircleUp />
          </Link>
        </div>
      )}
      <Meta />
      <Navbar lastYPos={lastYPos} showNav={showNav} setShowNav={setShowNav} />
      <div id="content" className={styles.content}>
        {/* Load page content into main tag with children props*/}
        <main className={styles.main}>{children}</main>
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
