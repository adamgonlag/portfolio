import React, { useState, useEffect } from "react";

import styles from "../styles/Layout.module.scss";
import Navbar from "./Navbar";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

import Meta from "./Meta";

const Layout = ({ children }) => {
  const [lastYPos, setLastYPos] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShowNav(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <div className={styles.layout}>
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
