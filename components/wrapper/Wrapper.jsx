import React from "react";
import Header from "../header/Header";
import Styles from "./wrapper.module.scss";

function Wrapper({ children }) {
  return (
    <div className={Styles.wrapper}>
      <Header />
      <div className={Styles.container}>{children}</div>
    </div>
  );
}

export default Wrapper;
