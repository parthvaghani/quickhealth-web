/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Banner from "../../../components/sections/Banner";
import Webtechnologies from "../../../components/sections/Webtechnologies";
import Cta from "../../../components/sections/Cta";
import Header from "../../../components/layout/Header";
import style from "../../styles/module/common.module.css";
import Footer from "../../../components/layout/Footer";
import Image from "next/image";
import Head from "next/head";
import adaptibilityImage from '../../assets/images/adaptability.png'
import collabrationImage from '../../assets/images/collaboration.png'
import devImage from '../../assets/images/development.png'
import persistanceImage from '../../assets/images/persistance.png'
import technologyImage from '../../assets/images/technology.png'
import uxImage from '../../assets/images/ux.png'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Head>
        <title>
          About | RIPPLESTACKS :: Our Vision, Our mission, Who We Are, To sum
          up!, Our Pillars Of Strength, Technologies We Work With
        </title>
        <meta
          name="title"
          content="About | RIPPLESTACKS :: Our Vision, Our mission, Who We Are, To sum up!, Our Pillars Of Strength, Technologies We Work With"
        />
        <meta
          name="description"
          content="About | RIPPLESTACKS :: Our Vision, Our mission, Who We Are, To sum up!, Our Pillars Of Strength, Technologies We Work With"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ripplestacks.com" />
        <meta
          property="og:title"
          content="About | RIPPLESTACKS :: Our Vision, Our mission, Who We Are, To sum up!, Our Pillars Of Strength, Technologies We Work With"
        />
        <meta
          property="og:description"
          content="About | RIPPLESTACKS :: Our Vision, Our mission, Who We Are, To sum up!, Our Pillars Of Strength, Technologies We Work With"
        />
        <meta
          property="og:image"
          content="https://ripplestacks-next.vercel.app/about.png"
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
      <Header />
      <Banner
        imgName="about.jpg"
        text1="About RIPPLESTACKS"
        text2="We provide our customers with the most advanced and tech-savvy software
               solutions available. We are not only recognized for our expertise but also for our family-like
               atmosphere where talented experts work together to provide innovative solutions."
      />
      <section
        className={`pt-16 ${style.baloo_paaji}`}
        style={{ width: "90%", margin: "auto" }}
      >
        <div className="md:container md:mx-auto m-container">
          <div className="md:flex" style={{ marginBottom: "20px" }}>
            <div
              className="md:w-1/2 pl-3 pr-3"
              data-aos="fade-up"
              data-aos-duration="110"
              data-aos-once="true"
            >
              <div style={{ marginBottom: "20px" }}>
                <div className="main-title1">
                  {/* <i class="brush-stroke-shap"></i> */}
                  <h2
                    style={{ margin: "0px", fontSize: "38px" }}
                    className={`text-[35px] tracking-normal ${style.black_colour_text} font-bold cursor-pointer`}
                  >
                    Our Vision
                  </h2>
                </div>
                <p
                  style={{ marginBottom: "0px", fontSize: "18px" }}
                  className={`text-[18px] font-normal tracking-normal ${style.black_colour_text} mt-4`}
                >
                  To empower our customers to achieve their goals by providing
                  reliable and quality solutions with technology and innovation.
                </p>
              </div>
            </div>

            <div
              className="md:w-1/2 pl-3 pr-3"
              data-aos="fade-up"
              data-aos-duration="115"
              data-aos-once="true"
            >
              <div>
                <div className="main-title1">
                  {/* <i class="brush-stroke-shap"></i> */}
                  <h2
                    style={{ margin: "0px", fontSize: "38px" }}
                    className={`text-[35px] tracking-normal ${style.black_colour_text} font-bold cursor-pointer`}
                  >
                    Our mission
                  </h2>
                </div>
                <p
                  style={{ marginBottom: "0px", fontSize: "18px" }}
                  className={`text-[18px] font-normal tracking-normal ${style.black_colour_text} mt-4`}
                >
                  To help entrepreneurs and creative thinkers convert their
                  ideas into reality through the power of emotional intelligence
                  by providing world class facilities to our team. To deliver
                  world-class products and services at competitive rates.
                </p>
              </div>
            </div>
          </div>
          <div
            className="md:flex pt-8"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="100"
            data-aos-once="true"
          >
            <div
              className=" pl-3 pr-3"
              data-aos="fade-up"
              data-aos-duration="120"
              data-aos-once="true"
            >
              <div style={{ marginBottom: "20px" }}>
                <div className="main-title1">
                  {/* <i class="brush-stroke-shap"></i> */}
                  <h2
                    style={{ margin: "0px", fontSize: "38px" }}
                    className={`text-[35px] tracking-normal ${style.black_colour_text} font-bold cursor-pointer`}
                  >
                    Who We Are
                  </h2>
                </div>
                <p
                  style={{ marginBottom: "0px", fontSize: "18px" }}
                  className={`text-[18px] font-normal tracking-normal ${style.black_colour_text} mt-4`}
                >
                  As a leading provider of advanced software solutions,
                  RIPPLESTACKS has been delivering exceptional services and
                  cutting-edge technology solutions to its customers since 2020.
                  The goal is to Empowering clients and businesses through
                  innovative technology with quality, satisfaction, and
                  transparency.
                </p>
                <p
                  style={{ marginBottom: "0px", fontSize: "18px" }}
                  className={`text-[18px] ${style.black_colour_text} font-normal tracking-normal mt-4 mb-0`}
                >
                  At RIPPLESTACKS, we are committed to providing our clients
                  with creative solutions, a deep understanding of their needs,
                  and expert knowledge to ensure that the results we deliver
                  align with their vision and goals. For us the definition of
                  success is to transcend innovative ideas of people to reality
                  with the help of our tech expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`pt-16 ${style.baloo_paaji}`}
        style={{ width: "70%", margin: "auto" }}
      >
        <div className="md:container md:mx-auto m-container">
          <div
            className="md:flex"
            data-aos="flip-right"
            data-aos-duration="100"
            data-aos-once="true"
          >
            <div className="md:w-full">
              <div className="mian-title1">
                <h1
                  style={{ fontSize: "38px" }}
                  className={`text-center cursor-pointer text-[35px] ${style.black_colour_text} font-bold tracking-normal`}
                >
                  {/* <i class="brush-stroke-shap"></i> */}
                  To sum up!
                </h1>
              </div>
            </div>
          </div>

          <div
            className="md:flex pt-6"
            data-aos="fade-up"
            data-aos-duration="110"
            data-aos-once="true"
          >
            <div
              className="md:w-1/4 pl-3 pr-3 flex items-center justify-center mt-5"
              data-aos="fade-up"
              data-aos-duration="112"
              data-aos-once="true"
            >
              <div>
                <h1
                  className="text-[52px] cursor-pointer font-bold tracking-normal text-center"
                  style={{ color: "#f48220" }}
                >
                  3+
                </h1>
                <p
                  className="text-[16px] font-normal tracking-normal text-center cursor-pointer"
                  style={{ color: "black", marginBottom: "0px" }}
                >
                  Years of experience
                </p>
              </div>
            </div>
            <div
              className="md:w-1/4 pl-3 pr-3 flex items-center justify-center mt-5"
              data-aos="fade-up"
              data-aos-duration="114"
              data-aos-once="true"
            >
              <div>
                <h1
                  className="text-[52px] cursor-pointer font-bold tracking-normal text-center"
                  style={{ color: "#f48220" }}
                >
                  10+
                </h1>
                <p
                  className="text-[16px] font-normal tracking-normal text-center cursor-pointer"
                  style={{ color: "black", marginBottom: "0px" }}
                >
                  Talented IT Professionals
                </p>
              </div>
            </div>

            <div
              className="md:w-1/4 pl-3 pr-3 flex items-center justify-center mt-5"
              data-aos="fade-up"
              data-aos-duration="116"
              data-aos-once="true"
            >
              <div>
                <h1
                  className="text-[52px] cursor-pointer font-bold tracking-normal text-center"
                  style={{ color: "#f48220" }}
                >
                  10+
                </h1>
                <p
                  className="text-[16px] font-normal tracking-normal text-center cursor-pointer"
                  style={{ color: "black", marginBottom: "0px" }}
                >
                  Countries served
                </p>
              </div>
            </div>

            <div
              className="md:w-1/4 pl-3 pr-3 flex items-center justify-center mt-5"
              data-aos="fade-up"
              data-aos-duration="118"
              data-aos-once="true"
            >
              <div>
                <h1
                  className="text-[52px] cursor-pointer font-bold tracking-normal text-center"
                  style={{ color: "#f48220" }}
                >
                  50+
                </h1>
                <p
                  className="text-[16px] font-normal tracking-normal text-center cursor-pointer"
                  style={{ color: "black", marginBottom: "0px" }}
                >
                  Projects Delivered
                </p>
              </div>
            </div>
          </div>
          <div
            className="md:flex"
            data-aos="fade-up"
            data-aos-duration="110"
            data-aos-once="true"
          >
            <div
              className="md:w-1/4 pl-3 pr-3 flex items-center justify-center mt-5"
              data-aos="fade-up"
              data-aos-duration="120"
              data-aos-once="true"
            >
              <div>
                <h1
                  className="text-[52px] cursor-pointer font-bold tracking-normal text-center"
                  style={{ color: "#f48220" }}
                >
                  20+
                </h1>
                <p
                  className="text-[16px] font-normal tracking-normal text-center cursor-pointer"
                  style={{ color: "black", marginBottom: "0px" }}
                >
                  Satisfied Clients
                </p>
              </div>
            </div>

            <div
              className="md:w-1/4 pl-3 pr-3 flex items-center justify-center mt-5"
              data-aos="fade-up"
              data-aos-duration="122"
              data-aos-once="true"
            >
              <div>
                <h1
                  className="text-[52px] cursor-pointer font-bold tracking-normal text-center"
                  style={{ color: "#f48220" }}
                >
                  100%
                </h1>
                <p
                  className="text-[16px] font-normal tracking-normal text-center cursor-pointer"
                  style={{ color: "black", marginBottom: "0px" }}
                >
                  Project Delivery Success Ratio
                </p>
              </div>
            </div>

            <div
              className="md:w-1/4 pl-3 pr-3 flex items-center justify-center mt-5"
              data-aos="fade-up"
              data-aos-duration="124"
              data-aos-once="true"
            >
              <div>
                <h1
                  className="text-[52px] cursor-pointer font-bold tracking-normal text-center"
                  style={{ color: "#f48220" }}
                >
                  95%
                </h1>
                <p
                  className="text-[16px] font-normal tracking-normal text-center cursor-pointer"
                  style={{ color: "black", marginBottom: "0px" }}
                >
                  Client Retention Ratio
                </p>
              </div>
            </div>

            <div
              className="md:w-1/4 pl-3 pr-3 flex items-center justify-center mt-5"
              data-aos="fade-up"
              data-aos-duration="126"
              data-aos-once="true"
            >
              <div>
                <h1
                  className="text-[52px] cursor-pointer font-bold tracking-normal text-center"
                  style={{ color: "#f48220" }}
                >
                  2+
                </h1>
                <p
                  className="text-[16px] font-normal tracking-normal text-center cursor-pointer"
                  style={{ color: "black", marginBottom: "0px" }}
                >
                  Country Footprint
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`mt-16 ${style.baloo_paaji} ${style.demo_website_show}`}
      >
        <div
          className="md:container md:mx-auto m-container"
          data-aos="zoom-in"
          data-aos-delay="150"
          data-aos-once="true"
        >
          <div className="md:flex">
            <div className="md:w-full">
              <div className="mian-title1">
                <h1
                  style={{ fontSize: "38px" }}
                  className={`text-center cursor-pointer text-[35px] ${style.black_colour_text} font-bold tracking-normal`}
                >
                  {/* <i class="brush-stroke-shap"></i> */}
                  Our Pillars Of Strength
                </h1>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:flex-wrap md:flex md:flex-wrap pt-12 mb-6">
            <div className="lg:w-1/6 md:w-1/3 pl-3 pr-3 mb-5 m-pl-0 m-pr-0">
              {/* <Link to="/project"> */}
              <div
                className={`${style.pillar_box} ${style.service_white} d-flex`}
              >
                <Image
                  src={adaptibilityImage}
                  width={94}
                  height={94}
                />
                <span className="mt-3 text-[18px] font-bold tracking-normal">
                  Adaptability
                </span>
              </div>
              {/* </Link> */}
            </div>
            <div className="lg:w-1/6 md:w-1/3 pl-3 pr-3 mb-5 m-pl-0 m-pr-0">
              <div className={`${style.pillar_box} ${style.service_white}`}>
                <Image
                  src={collabrationImage}
                  width={94}
                  height={94}
                />
                <span className="mt-3 text-[18px] font-bold tracking-normal">
                  Collaboration
                </span>
              </div>
            </div>
            <div className="lg:w-1/6 md:w-1/3 pl-3 pr-3 mb-5 m-pl-0 m-pr-0">
              {/* <Link to="/backend"> */}
              <div className={`${style.pillar_box} ${style.service_white}`}>
                <Image
                  src={devImage}
                  width={94}
                  height={94}
                />
                <span className="mt-3 text-[18px] font-bold tracking-normal">
                  Development
                </span>
              </div>
              {/* </Link> */}
            </div>
            <div className="lg:w-1/6 md:w-1/3 pl-3 pr-3 mb-5 m-pl-0 m-pr-0">
              <div className={`${style.pillar_box} ${style.service_white}`}>
                <Image
                  src={persistanceImage}
                  width={94}
                  height={94}
                />
                <span className="mt-3 text-[18px] font-bold tracking-normal">
                  Persistence
                </span>
              </div>
            </div>
            <div className="lg:w-1/6 md:w-1/3 pl-3 pr-3 mb-5 m-pl-0 m-pr-0">
              {/* <Link to="/infradev"> */}
              <div className={`${style.pillar_box} ${style.service_white}`}>
                <Image
                  src={technologyImage}
                  width={94}
                  height={94}
                />
                <span className="mt-3 text-[18px] font-bold tracking-normal">
                  Technology
                </span>
              </div>
              {/* </Link> */}
            </div>
            <div className="lg:w-1/6 md:w-1/3 pl-3 pr-3 mb-5 m-pl-0 m-pr-0">
              <div className={`${style.pillar_box} ${style.service_white}`}>
                <Image
                  src={uxImage}
                  width={94}
                  height={94}
                />
                <span className="mt-3 text-[18px] font-bold tracking-normal">
                  UX
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-16">
        <Webtechnologies />
      </div>

      <Cta split />
      <Footer />
    </>
  );
}
