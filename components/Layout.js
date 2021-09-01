import React from "react";

import styles from "../styles/Layout.module.scss";
import Navbar from "./Navbar";

import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />

      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <div className={styles.footer}>Designed and built by Adam Gonlag</div>
    </>
  );
};

export default Layout;
