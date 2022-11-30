import React from "react";
import Styles from "./header.module.scss";
import { Stack } from "@mui/material";

function Header() {
  return (
    <header className={Styles.header}>
      <Stack>
        <p>Professional Landscape Photographer.</p>
        <p>Quebec, Fr</p>
      </Stack>
      <h1>Antidote</h1>
      <p>
        <strong>Menu</strong>
      </p>
    </header>
  );
}

export default Header;
