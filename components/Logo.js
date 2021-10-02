import React from "react";
import styles from "../styles/Navbar.module.scss";

import { motion } from "framer-motion";

export default function Logo() {
  const svgVariants = {
    visible: {
      transition: {},
    },
  };

  const svgText = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const svgPath = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className={styles.logoContainer}>
      <motion.svg
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        className={styles.logo}
        version="1.1"
        viewBox="0 0 150 165"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={svgText}
          d="m111.69 116.72q0.5308 1.3379 0.5308 2.1893 0.0663 0.79056-0.46444 1.2163-0.5308 0.42569-1.7914 0.54732-1.1943 0.12162-3.2511 0.12162-2.0568 0-3.3175-0.12162-1.1943-0.0608-1.8578-0.24325-0.59714-0.24326-0.92889-0.60813-0.26539-0.36489-0.53079-0.9122l-7.3648-19.156h-35.696l-7.033 18.913q-0.19905 0.54732-0.5308 0.973-0.33175 0.36488-0.99524 0.66895-0.59714 0.24325-1.7914 0.36488-1.1279 0.12162-2.9857 0.12162-1.9241 0-3.1848-0.18243-1.1943-0.12163-1.7251-0.54732-0.46444-0.4257-0.46444-1.2163 0.06635-0.85138 0.59714-2.1893l28.796-73.097q0.2654-0.66894 0.66349-1.0946 0.46445-0.42569 1.2606-0.66894 0.86254-0.24325 2.1232-0.30407 1.327-0.12163 3.3175-0.12163 2.1232 0 3.5165 0.12163 1.3933 0.06081 2.2559 0.30407 0.86254 0.24325 1.327 0.72976 0.46445 0.42569 0.72984 1.0946zm-36.957-64.523h-0.06635l-14.796 39.225h29.857z"
          strokeWidth="3.2522"
        />
        <motion.path
          variants={svgPath}
          d="m75 6.0924-68.908 36.886v84.312l68.908 31.617 68.908-31.617v-84.312l-68.908-36.886"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="12.185"
        />
      </motion.svg>
    </div>
  );
}
