/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Banner from "../../../components/sections/Banner";
import style from "../../styles/module/common.module.css";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import dynamic from 'next/dynamic';
import Head from "next/head";

const MyLazyLoadedComponent = dynamic(() => import("../../../components/elements/MyLazyLoadedComponent"));


export default function Services() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);


  const [LazyLoadedComponent, setLazyLoadedComponent] = useState(null);

  useEffect(() => {
    const loadLazyLoadedComponent = async () => {
      const { default: LazyLoadedComponent } = await import('../../../components/elements/MyLazyLoadedComponent');
      setLazyLoadedComponent(<MyLazyLoadedComponent />);
    };

    loadLazyLoadedComponent();

    // Cleanup function
    return () => {
      setLazyLoadedComponent(null);
    };
  }, [3000]);


  return (
    <>
    <Head>
      <title>
        Service | RIPPLESTACKS :: Mobile App Development, Web Application Development, Custom Software Development  
      </title>
      <meta
          name="title"
          content="Service | RIPPLESTACKS :: Mobile App Development, Web Application Development, Custom Software Development"
        />
        <meta
          name="description"
          content="Service | RIPPLESTACKS :: Mobile App Development, Web Application Development, Custom Software Development"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ripplestacks.com" />
        <meta
          property="og:title"
          content="Service | RIPPLESTACKS :: Mobile App Development, Web Application Development, Custom Software Development"
        />
        <meta
          property="og:description"
          content="Service | RIPPLESTACKS :: Mobile App Development, Web Application Development, Custom Software Development"
        />
        <meta
          property="og:image"
          content="https://ripplestacks-next.vercel.app/services.png"
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
        imgName="service.jpg"
        text1="Agile Software Development Services"
        text2="At RIPPLESTACKS, We provide website and mobile application development, custom software development, gaming solutions, logo design services. We Offering innovative and effective IT services to clients worldwide."
      />

{LazyLoadedComponent}


      <div className="md:container md:mx-auto m-container">
        <div
          className="md:flex pt-16"
          data-aos="zoom-in-right"
          data-aos-duration="100"
          data-aos-once="true"
        >
          <div className="md:w-full">
            <div
              className="main-title1"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h1
                className={ `${style.baloo_paaji} ${style.black_colour_text} tracking-normal font-bold text-center`}
              >
                {/* <i class="brush-stroke-shap"></i> */}
                <span style={{fontSize:"38px"}} > Mobile App Development </span> &nbsp;
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-wrap md:flex md:flex-wrap pt-12 mb-6">
          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0">
            {/* <Link to="/project"> */}
            <div
              className={`${style.part_box} ${style.service_yellow} ${style.baloo_paaji} `}
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="100"
              data-aos-once="true"
            >
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                Technology Consultation
              </span>
            </div>
            {/* </Link> */}
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="110"
            data-aos-once="true"
          >
            <div className={`${style.part_box} ${style.service_purple} ${style.baloo_paaji} `}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                Hybrid App Development
              </span>
            </div>
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="120"
            data-aos-once="true"
          >
            {/* <Link to="/backend"> */}
            <div className={`${style.part_box} ${style.service_orange} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                Native App Development
              </span>
            </div>
            {/* </Link> */}
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="130"
            data-aos-once="true"
          >
            <div className={`${style.part_box} ${style.service_pink} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                Maintenance & Support
              </span>
            </div>
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="140"
            data-aos-once="true"
          >
            {/* <Link to="/infradev"> */}
            <div className={`${style.part_box} ${style.service_green} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                Progressive Web App Development
              </span>
            </div>
            {/* </Link> */}
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="150"
            data-aos-once="true"
          >
            <div className={`${style.part_box} ${style.service_dark_yellow} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                UI & UX Designing
              </span>
            </div>
          </div>

          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="160"
            data-aos-once="true"
          >
            {/* <Link to="/infradev"> */}
            <div className={`${style.part_box} ${style.service_red} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                App Migrations & Integrations
              </span>
            </div>
            {/* </Link> */}
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="170"
            data-aos-once="true"
          >
            <div className={`${style.part_box} ${style.service_blue} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                QA & Testing
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="md:container md:mx-auto m-container"
        data-aos="zoom-in-right"
        data-aos-duration="100"
        data-aos-once="true"
      >
        <div className="md:flex pt-6">
          <div className="md:w-full">
            <div
              className="main-title1"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h1
                className={ ` ${style.baloo_paaji} text-[35px] ${style.black_colour_text} tracking-normal font-bold text-center`}
              >
                {/* <i class="brush-stroke-shap"></i> */}
                <span style={{fontSize:"38px"}} >Web Application Development </span> &nbsp;
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-wrap md:flex md:flex-wrap pt-12 mb-6">
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="110"
            data-aos-once="true"
          >
            {/* <Link to="/project"> */}
            <div className={`${style.part_box} ${style.service_yellow} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                Website Development
              </span>
            </div>
            {/* </Link> */}
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="120"
            data-aos-once="true"
          >
            <div className={`${style.part_box} ${style.service_purple} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                E-Commerce Web App Development
              </span>
            </div>
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="130"
            data-aos-once="true"
          >
            {/* <Link to="/backend"> */}
            <div className={`${style.part_box} ${style.service_orange} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                Web Application Testing
              </span>
            </div>
            {/* </Link> */}
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="140"
            data-aos-once="true"
          >
            <div className={`${style.part_box} ${style.service_pink} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                Web Application Support & Maintenance
              </span>
            </div>
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="150"
            data-aos-once="true"
          >
            {/* <Link to="/infradev"> */}
            <div className={`${style.part_box} ${style.service_green} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                Progressive Web Apps
              </span>
            </div>
            {/* </Link> */}
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="160"
            data-aos-once="true"
          >
            <div className={`${style.part_box} ${style.service_dark_yellow} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                UI & UX Designing
              </span>
            </div>
          </div>

          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="170"
            data-aos-once="true"
          >
            {/* <Link to="/infradev"> */}
            <div className={`${style.part_box} ${style.service_red} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                App Migrations & Integrations
              </span>
            </div>
            {/* </Link> */}
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="170"
            data-aos-once="true"
          >
            <div className={`${style.part_box} ${style.service_blue} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                QA & Testing
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="md:container md:mx-auto m-container"
        data-aos="zoom-in-right"
        data-aos-duration="100"
        data-aos-once="true"
      >
        <div className="md:flex pt-6">
          <div className="md:w-full">
            {/* <p className="text-center font-size-16 cursor-pointer text-[#ff663b] tracking-normal font-medium">
              LEARN MORE ON
            </p> */}
            <div
              className="main-title1"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h1
                className={ ` ${style.baloo_paaji} text-[35px] ${style.black_colour_text} tracking-normal font-bold text-center`}
              >
                {/* <i class="brush-stroke-shap"></i> */}
                <span style={{fontSize:"38px"}} >Custom Software Development </span> &nbsp;
              </h1>
            </div>
          </div>
        </div>
        <div
          className="lg:flex lg:flex-wrap md:flex md:flex-wrap pt-12 mb-6"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="100"
          data-aos-once="true"
        >
          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0">
            {/* <Link to="/project"> */}
            <div className={`${style.part_box} ${style.service_yellow} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                Product Engineering
              </span>
            </div>
            {/* </Link> */}
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="110"
            data-aos-once="true"
          >
            <div className={`${style.part_box} ${style.service_purple} ${style.baloo_paaji} `}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                Digital Transformation
              </span>
            </div>
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="120"
            data-aos-once="true"
          >
            {/* <Link to="/backend"> */}
            <div className={`${style.part_box} ${style.service_orange} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                MVP Development
              </span>
            </div>
            {/* </Link> */}
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="130"
            data-aos-once="true"
          >
            <div className={`${style.part_box} ${style.service_pink} ${style.baloo_paaji}`}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                Enterprise Applications
              </span>
            </div>
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="zoom-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="140"
            data-aos-once="true"
          >
            {/* <Link to="/infradev"> */}
            <div className={`${style.part_box} ${style.service_green} `}>
              <span className="mt-3 text-[18px] font-bold tracking-normal">
                Integration Services
              </span>
            </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
