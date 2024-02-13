import React, { useEffect } from "react";
import Banner from "../../../components/sections/Banner";
import Webtechnologies from "../../../components/sections/Webtechnologies";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import Brush from "@mui/icons-material/Brush";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import Cta from "../../../components/sections/Cta";
import FeaturesSplit from "../../../components/sections/FeaturesSplit";
import style from "../../styles/module/common.module.css";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Head from "next/head";

export default function Technology() {
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
      Technologies | RIPPLESTACKS :: Empower Your Business with Cutting-Edge Technology Solutions
      </title>
      <meta
          name="title"
          content="Technologies | RIPPLESTACKS :: Empower Your Business with Cutting-Edge Technology Solutions"
        />
        <meta
          name="description"
          content="Technologies | RIPPLESTACKS :: Empower Your Business with Cutting-Edge Technology Solutions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ripplestacks.com" />
        <meta
          property="og:title"
          content="Technologies | RIPPLESTACKS :: Empower Your Business with Cutting-Edge Technology Solutions"
        />
        <meta
          property="og:description"
          content="Technologies | RIPPLESTACKS :: Empower Your Business with Cutting-Edge Technology Solutions"
        />
        <meta
          property="og:image"
          content="https://ripplestacks-next.vercel.app/technologies.png"
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
    <Header/>
      <Banner
        imgName="technology.jpg"
        text1="Technologies we Deploy"
        text2="Our advanced technologies assist in providing our clients with software solutions that are seamless, efficient, and aligned with their vision. We have the knowledge and resources to help client with their software project."
      />
      <FeaturesSplit />
      <div className="md:container md:mx-auto m-container">
        <div
          class="col-lg-6 d-flex align-items-center aos-init aos-animate"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-once="true"
        >
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
              <h1 className={` ${style.baloo_paaji} ${style.black_colour_text} tracking-normal font-bold text-center`}>
                {/* <i class="brush-stroke-shap"></i> */}
                <span style={{fontSize:"38px"}}> Areas we are actively working on </span> &nbsp;
              </h1>
            </div>
          </div>
        </div>
        <div
          className="lg:flex lg:flex-wrap md:flex md:flex-wrap pt-12"
          data-aos="fade-up"
          data-aos-delay="120"
          data-aos-once="true"
        >
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-up"
            data-aos-delay="130"
            data-aos-once="true"
          >
            {/* <Link to="/project"> */}
            <div className={`${style.part_box} ${style.baloo_paaji} `} style={{ minHeight: 300 }}>
              <div className="features-tiles-item-image">
                <LaptopMacOutlinedIcon
                  style={{
                    width: "35",
                    height: "35",
                    color: "",
                    backgroundColor: "#FF851B",
                    margin: "10px",
                  }}
                />
              </div>
              <p className="mt-3 text-[25px] font-bold tracking-normal">
                Front end
              </p>
              <p className="pr-8 text-[16px] font-medium mt-3 tracking-normal">
                With over two decades of industry expertise, we specialize in
                providing front ends that are not only aesthetically pleasing
                but also interactive, seamless, user-friendly, and
                high-performing.
              </p>
            </div>
            {/* </Link> */}
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <div className={`${style.part_box} ${style.baloo_paaji} `} style={{ minHeight: 300 }}>
              <div className="features-tiles-item-image">
                <CodeOutlinedIcon
                  style={{
                    width: "35",
                    height: "35",
                    color: "",
                    backgroundColor: "#FF851B",
                    margin: "10px",
                  }}
                />
              </div>
              <p className="mt-3 text-[25px] font-bold tracking-normal">
                Backend
              </p>
              <p className="pr-8 text-[16px] font-medium mt-3 tracking-normal">
                Having a strong backend is crucial for software success, and we
                can help you achieve it with our proficiency in a variety of
                programming languages such as NodeJS, NestJS and more.
              </p>
            </div>
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
          >
            {/* <Link to="/backend"> */}
            <div className={`${style.part_box} ${style.baloo_paaji} `} style={{ minHeight: 300 }}>
              <div className="features-tiles-item-image">
                <ViewAgendaOutlinedIcon
                  style={{
                    width: "35",
                    height: "35",
                    color: "",
                    backgroundColor: "#FF851B",
                    margin: "10px",
                  }}
                />
              </div>
              <p className="mt-3 text-[25px] font-bold tracking-normal">
                Database
              </p>
              <p className="pr-8 text-[16px] font-medium mt-3 tracking-normal">
                With our knowledge in various database technologies, we can
                assist you in determining the most suitable option for your
                project that aligns with your specifications and target
                audience.
              </p>
            </div>
            {/* </Link> */}
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <div className={`${style.part_box} ${style.baloo_paaji} `} style={{ minHeight: 300 }}>
              <div className="features-tiles-item-image">
                <PhoneAndroidOutlinedIcon
                  style={{
                    width: "35",
                    height: "35",
                    color: "",
                    backgroundColor: "#FF851B",
                    margin: "10px",
                  }}
                />
              </div>
              <p className="mt-3 text-[25px] font-bold tracking-normal">
                Mobile
              </p>
              <p className="pr-8 text-[16px] font-medium mt-3 tracking-normal">
                Our resources possess an average experience of 3 years and
                possess technical expertise in native iOS, Android,
                cross-platform, and hybrid app development across various
                domains.
              </p>
            </div>
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
          >
            {/* <Link to="/infradev"> */}
            <div className={`${style.part_box} ${style.baloo_paaji} `} style={{ minHeight: 300 }}>
              <div className="features-tiles-item-image">
                <AllInclusiveOutlinedIcon
                  style={{
                    width: "35",
                    height: "35",
                    color: "",
                    backgroundColor: "#FF851B",
                    margin: "10px",
                  }}
                />
              </div>
              <p className="mt-3 text-[25px] font-bold tracking-normal">
                Infra and DevOps
              </p>
              <p className="pr-8 text-[16px] font-medium mt-3 tracking-normal">
                Using a range of DevOps tools, we assist you in automating your
                infrastructure, software development and deployment procedures,
                enabling you to revamp your business.
              </p>
            </div>
            {/* </Link> */}
          </div>
          <div
            className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <div className={`${style.part_box} ${style.baloo_paaji} `} style={{ minHeight: 300 }}>
              <div className="features-tiles-item-image">
                <Brush
                  style={{
                    width: "35",
                    height: "35",
                    color: "",
                    backgroundColor: "#FF851B",
                    margin: "10px",
                  }}
                />
              </div>
              <p className="mt-3 text-[25px] font-bold tracking-normal">
                Design
              </p>
              <p className="pr-8 text-[16px] font-medium mt-3 tracking-normal">
                We utilized the latest advancements in design technology to
                create a highly intuitive and user-friendly software experience.
              </p>
                <br />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <Webtechnologies />
      </div>
      <Cta split />
      <Footer />
    </>
  );
}
