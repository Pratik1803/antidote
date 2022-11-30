import React, { useRef } from "react";
import { useRouter } from "next/router";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import Styles from "../styles/details.module.scss";
import Wrapper from "../components/wrapper/Wrapper";
import Link from "next/link";
import { data } from "../utils/data/data";

function Index() {
  const router = useRouter();
  const mainSliderRef = useRef();
  const smallSliderRef = useRef();
  const leftBtnRef = useRef();
  const rightBtnRef = useRef();

  let activeImg = 0;

  const gallery = data.filter(
    (ele) => ele.endpoint.slice(1) === router.query.name
  )[0].gallery;

  function forward() {
    activeImg++;
    if (activeImg >= gallery.length) {
      activeImg = 0;
    }
    mainSliderRef.current.style.transform = `translateX(-${100 * activeImg}vw)`;
    smallSliderRef.current.style.transform = `translate(${
      110 * activeImg - 5
    }px, -5px)`;
    rightBtnRef.current.style.transform = `rotate(${activeImg * 90}deg)`;
  }

  function backward() {
    activeImg--;
    if (activeImg < 0) {
      activeImg = gallery.length - 1;
    }
    mainSliderRef.current.style.transform = `translateX(-${100 * activeImg}vw)`;
    smallSliderRef.current.style.transform = `translate(${
      110 * activeImg - 5
    }px, -5px)`;
    leftBtnRef.current.style.transform = `rotate(${activeImg * 90}deg)`;
  }

  function navigate(index) {
    activeImg = index;
    mainSliderRef.current.style.transform = `translateX(-${100 * activeImg}vw)`;
    smallSliderRef.current.style.transform = `translate(${
      110 * activeImg - 5
    }px, -5px)`;
  }
  return (
    <div className={Styles.page2}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={Styles.left_top}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={Styles.left_btm}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={Styles.right_top}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={Styles.right_btm}
        data-margin="20px"
      ></motion.div>
      <Link href={"/"} passHref>
        <motion.h1
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: -30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={Styles.heading}
          layoutId="heading"
        >
          Antidote
        </motion.h1>
      </Link>

      {/* <motion.h1
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {router.query.name}
      </motion.h1> */}
      <section className={Styles.slider} ref={mainSliderRef}>
        <motion.figure
          layoutId={`por_${router.query.name}`}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={`/${router.query.name}/${router.query.name}_por.png`}
            height={400}
            width={300}
            alt=""
          />
        </motion.figure>
        {gallery?.map((ele, index) => {
          if (index == 0) return;
          return (
            <div className={Styles.sliderImgWrapper} key={index}>
              <Image src={ele} width={200} height={400} alt="" />
            </div>
          );
        })}
      </section>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={Styles.smallSlider}
      >
        <section className={Styles.images}>
          <div className={Styles.activeImage} ref={smallSliderRef}></div>
          {gallery?.map((ele, index) => {
            return (
              <div
                className={Styles.smallSliderImage}
                key={index}
                onClick={() => {
                  navigate(index);
                }}
              >
                <Image
                  src={ele}
                  width={100}
                  height={80}
                  alt=""
                  className="galleryImgs"
                />
              </div>
            );
          })}
        </section>
      </motion.div>
      <motion.button
        className={Styles.left}
        initial={{ opacity: 0, rotate: "-90deg" }}
        animate={{ opacity: 1, rotate: "0deg" }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={backward}
        ref={leftBtnRef}
      >
        <div className={Styles.linev}></div>
        <div className={Styles.lineh}></div>
      </motion.button>
      <motion.button
        className={Styles.right}
        initial={{ opacity: 0, rotate: "90deg" }}
        animate={{ opacity: 1, rotate: "0deg" }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={forward}
        ref={rightBtnRef}
      >
        <div className={Styles.linev}></div>
        <div className={Styles.lineh}></div>
      </motion.button>
    </div>
  );
}

export default Index;
