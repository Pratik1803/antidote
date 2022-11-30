import { useContext, useState } from "react";
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
                <p>Do some &quot;We shouldn&apos;t be doing this&quot; shit!</p>
              </span>
              {data.map((ele, index) => (
                <Link href={ele.endpoint} key={index} passHref>
                  <motion.figure
                    className={Styles.card}
                    layoutId={`por_${ele.endpoint.slice(1)}`}
                    transition={{ duration: 0.5 }}
                  >
                    <Image src={ele.portrait} height={400} width={300} alt="" />
                  </motion.figure>
                </Link>
              ))}
            </motion.div>
          </main>
        </Wrapper>
      )}
    </>
  );
}
