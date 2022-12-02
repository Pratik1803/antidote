import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Styles from "../styles/Home.module.scss";
import Wrapper from "../components/wrapper/Wrapper";
import Loading from "../components/loadingScreen/Loading";
import Link from "next/link";
import { motion } from "framer-motion";
import { StatesContext } from "./_app";
import { data } from "../utils/data/data";

export default function Home() {
  const { states, setStates } = useContext(StatesContext);

  return (
    <>
      {states.loading ? (
        <Loading />
      ) : (
        <Wrapper>
          <main className={Styles.main}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={Styles.wrapper}
            >
              <span>
                <h1>Shift + </h1>
                <div className={Styles.scrollerAnimation}>
                  <div className={Styles.wheel}></div>
                </div>
              </span>
              {data.map((ele, index) => (
                <Link href={`/${ele.endpoint}`} key={index} passHref>
                  <motion.figure
                    className={Styles.card}
                    layoutId={`por_${ele.endpoint}`}
                    transition={{ duration: 0.5 }}
                  >
                    <Image src={ele.portrait} height={400} width={300} alt="" />
                  </motion.figure>
                </Link>
              ))}
            </motion.div>
            <a
              href="mailto:pratikvaidya1803@gmail.com"
              className={Styles.email}
            >
              <strong>Email</strong>: pratikvaidya1803@gmail.com
              <br />
              EN
            </a>
          </main>
        </Wrapper>
      )}
    </>
  );
}
