import { Stack } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { StatesContext } from "../../pages/_app";
import Styles from "./loading.module.scss";
import gsap from "gsap";

function Loading() {
  const [loadper, setLoadper] = useState(0);

  const h1 = useRef();
  const h1bg = useRef();
  const loading = useRef();
  const per = useRef();
  const wrapper = useRef();

  const tl = useRef();

  const { states, setStates } = useContext(StatesContext);

  function byeAnimation() {
    tl.current = gsap
      .timeline()
      .to(h1bg.current, 0.5, {
        transform: "translate(-100%, -50%) rotate(90deg)",
      })
      .to(h1bg.current, 0.5, { left: "100%" }, "+=0.3")
      .to(
        h1bg.current,
        0.5,
        {
          left: "00%",
        },
        "+=0.3"
      )
      .to(h1.current, { width: "0%" }, "-=0.5")
      .to(loading.current, 0.5, {
        opacity: "0",
        transform: "translateX(-20px)",
      })
      .to(
        h1bg.current,
        0.5,
        { opacity: "0", transform: "translate(-125%, -50%) rotate(90deg)" },
        "-=0.5"
      )
      .to(
        per.current,
        0.5,
        { opacity: "0", transform: "translate(-75%, -50%)" },
        "-=0.5"
      );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadper((prev) => (prev += 1));
    }, 10);
    setTimeout(() => {
      clearInterval(interval);
      byeAnimation();
    }, 1000);
    setTimeout(() => {
      setStates((prev) => ({ ...prev, loading: false }));
    }, 3600);
  }, []);

  return (
    <main className={Styles.loading}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <p ref={loading}>Loading...</p>
        <div className={Styles.antidote} ref={wrapper}>
          <div className={Styles.bg} ref={h1bg}></div>
          <h1 ref={h1}>Antidote</h1>
        </div>
        <p ref={per} className={Styles.loading_per}>
          {loadper}%
        </p>
      </Stack>
    </main>
  );
}

export default Loading;
