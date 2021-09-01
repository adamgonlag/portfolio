import React from "react";

import styles from "../styles/Layout.module.scss";
import Navbar from "./Navbar";
import Meta from "./Meta";
import Hero from "./Hero";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />

      <div className={styles.container}>
        <Hero />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
