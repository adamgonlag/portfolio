import React from "react";

import styles from "../styles/Layout.module.scss";
import Navbar from "./Navbar";

import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Meta />
      <Navbar />
      <div id="content" className={styles.content}>
        {/* Load page content into main tag with children props*/}
        <main className={styles.main}>{children}</main>
      </div>
      <footer id="footer" className={styles.footer}>
        Designed and built by Adam Gonlag
      </footer>
    </div>
  );
};

export default Layout;
