import React, { useRef } from "react";
import Styles from "./header.module.scss";
import { Stack } from "@mui/material";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import Link from "next/link";

function Header() {
  const tl = useRef();
  const menuRef = useRef();
  const contactRef = useRef();
  const socialsRef = useRef();

  let open = false;

  const toggleMenu = () => {
    if (!open) {
      tl.current = gsap
        .timeline()
        .to(menuRef.current, { height: "50vh" })
        .to(contactRef.current, { y: 0, opacity: 1 }, "-=0.2")
        .to(socialsRef.current, { y: 0, opacity: 1 }, "-=0.5");
    } else {
      tl.current?.reverse(true);
    }
    open = !open;
  };

  return (
    <header className={Styles.header}>
      <Stack>
        <p>Professional Landscape Photographer.</p>
        <p>Quebec, Fr</p>
      </Stack>
      <h1 className={Styles.name}>Antidote</h1>
      <p>
        <strong onClick={toggleMenu}>Menu</strong>
      </p>
      <section className={Styles.menu} ref={menuRef}>
        <a href="tel:+917058577538">
          <div className={Styles.contact} ref={contactRef}>
            <span>
              <h1>Contact</h1>
              <div className={Styles.underline}></div>
            </span>
            <p>+91 70585 77538</p>
          </div>
        </a>
        <div className={Styles.socials} ref={socialsRef}>
          <span>
            <h1>Socials</h1>
            <div className={Styles.underline}></div>
          </span>
          <span className={Styles.logos}>
            <Link href="#" passHref>
              <Icon icon="ph:instagram-logo" />
            </Link>
            <Link href="#" passHref>
              <Icon icon="ph:facebook-logo" />
            </Link>
            <Link href="#" passHref>
              <Icon icon="ri:unsplash-line" />
            </Link>
            <Link href="#" passHref>
              <Icon icon="simple-icons:artstation" />
            </Link>
          </span>
        </div>
      </section>
    </header>
  );
}

export default Header;
