import React from "react";
import Styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";

function Hello() {
  return (
    <main className={Styles.main2}>
      <motion.h1 layoutId="title">Hello</motion.h1>
    </main>
  );
}

export default Hello;
