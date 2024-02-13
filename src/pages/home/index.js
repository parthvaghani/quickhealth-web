import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Hero from "../../../components/sections/Hero";
import FeaturesTiles from "../../../components/sections/FeaturesTiles";
import Expertise from "../../../components/sections/Expertise";
import Webtechnologies from "../../../components/sections/Webtechnologies";
import Cta from "../../../components/sections/Cta";
import InquiryModal from "../../../components/third-party-components/InquiryModal";
import Button from "@mui/material/Button";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import "aos/dist/aos.css";
import AOS from "aos";
import style from "../../styles/module/common.module.css";
import Head from "next/head";

const Home = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const setClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <>
      <Head>
        <title>
          RIPPLESTACKS :: We turn your digital dreams into a reality
        </title>
        <meta
          name="title"
          content="RIPPLESTACKS :: We turn your digital dreams into a reality"
        />
        <meta
          name="description"
          content="RIPPLESTACKS :: We turn your digital dreams into a reality"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ripplestacks.com" />
        <meta
          property="og:title"
          content="RIPPLESTACKS :: We turn your digital dreams into a reality"
        />
        <meta
          property="og:description"
          content="RIPPLESTACKS :: We turn your digital dreams into a reality"
        />
        <meta
          property="og:image"
          content="https://ripplestacks-next.vercel.app/home.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Ripplestacks",
          "url": "https://ripplestacks.com",
          "logo": "https://ripplestacks-next.vercel.app/logo.png",
        }
      `,
          }}
        />
      </Head>
      <section {...props} className={outerClasses}>
        <div>
          <div
            className={innerClasses}
            style={{ paddingBottom: "0px", backgroundColor: "white" }}
          >
            <section className={`${style.displayed}`}>
              {/* <Image src={homeImg} alt="banner" width={1000} height={1000} /> */}
              <div className="w-full h-full flex justify-center items-center overflow-hidden">
                <div
                  className={`flex w-[70%] items-center justify-center rounded-full relative max-sm:flex-col max-sm:h-[50%] ${style.rotate_animation}`}
                >
                  <div className={`${style.first_box}`}></div>
                  <div className={`${style.second_box}`}></div>
                  <div className={`${style.third_box}`}></div>
                </div>
              </div>
              <div className={`${style.overlay}`}>
                <h6
                  style={{
                    color: "black",
                    fontWeight: "500",
                    marginTop: "50px",
                  }}
                >
                  <span
                    style={{ fontWeight: "bold", fontSize: "24px" }}
                    // data-aos="zoom-in-up"
                    // data-aos-duration="100"
                    // data-aos-once="true"
                  >
                    Software Development
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#ff851b",
                    }}
                  >
                    <Typewriter
                      options={{
                        strings: ["Mentoring", "Consulting", "Services"],
                        autoStart: true,
                        loop: true,
                        delay: 55,
                        deleteSpeed: 20,
                      }}
                    />
                  </span>
                </h6>
                <h1
                  style={{
                    color: "black",
                    fontWeight: "700",
                    marginBottom: "30px",
                    fontSize: "80px",
                    width: "80%",
                    lineHeight: "115%",
                  }}
                  className={`${style.max_width_70} max-sm:text-lg`}
                  // data-aos="zoom-in-right"
                  // data-aos-duration="110"
                  // data-aos-once="true"
                >
                  <span className={style.other_word}>We turn your</span>{" "}
                  <span className={style.highlight_1}>
                    <span className={style.highlight_word_1}>digital</span>
                  </span>{" "}
                  <span className={style.highlight_2}>
                    <span className={style.highlight_word_2}>dreams</span>
                  </span>{" "}
                  <br />
                  <span className={style.other_word}>into a</span>{" "}
                  <span className={style.highlight_3}>
                    <span className={style.highlight_word_3}>reality</span>
                  </span>
                </h1>
                <p
                  style={{
                    color: "black",
                    fontWeight: "lighter",
                    marginBottom: "30px",
                    fontSize: "18px",
                  }}
                  className={`${style.max_width_70} max-sm:text-xs`}
                  // data-aos="zoom-in-left"
                  // data-aos-duration="110"
                  // data-aos-once="true"
                >
                  We provide web and mobile app development solutions to
                  companies worldwide. We have extremely skilled Javascript
                  developers ready for hire for your next <b>NextJs</b>,{" "}
                  <b>ReactJs</b>, <b>React Native</b> & <b>NodeJs</b> projects.
                </p>
                <div className="flex gap-2 items-center max-sm:flex-col max-sm:gap-0">
                  <Link href="/contact" className="w-[100%]">
                    <Button
                      style={{
                        backgroundImage:
                          "linear-gradient(270deg, rgb(0, 147, 237), rgb(116, 182, 227), rgb(0, 147, 237))",
                        background:
                          "linear-gradient(270deg, rgb(0, 147, 237), rgb(116, 182, 227), rgb(0, 147, 237))",
                        transition: "background-position 0.2s ease-out",
                        // backgroundSize: "200% auto",
                        // border: "1px solid transparent",
                        padding: "8px 40px",
                        borderRadius: "50px",
                        color: "white",
                        textTransform: "none",
                        fontWeight: "500",
                        marginTop: "10px",
                        marginBottom: "10px",
                        width: "max-content",
                      }}
                    >
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/career" className="w-[100%]">
                    <Button
                      style={{
                        backgroundImage:
                          "linear-gradient(270deg, #fc4a1a, #f7b733)",
                        background: "linear-gradient(270deg, #fc4a1a, #f7b733)",
                        transition: "background-position 0.2s ease-out",
                        // backgroundSize: "200% auto",
                        // border: "1px solid transparent",
                        padding: "8px 40px",
                        borderRadius: "50px",
                        color: "white",
                        textTransform: "none",
                        fontWeight: "500",
                        marginTop: "10px",
                        marginBottom: "10px",
                        width: "max-content",
                      }}
                    >
                      <span>We’re hiring 🚀</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Hero />
      <Expertise />
      <FeaturesTiles />
      <Webtechnologies />
      <Cta split />
      <InquiryModal open={open} setClose={setClose} />
    </>
  );
};

export default Home;
