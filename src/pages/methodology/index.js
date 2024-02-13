import React, { useEffect } from "react";
import Link from "next/link";
import Banner from "../../../components/sections/Banner";
import Banner2 from "../../../components/sections/Banner2";
import Webtechnologies from "../../../components/sections/Webtechnologies";
import style from "../../styles/module/common.module.css";

export default function Methodology() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Banner
        imgName="methodology.jpg"
        text1="Work Methodology for Building Software Solutions"
        text2="Standing tall since 2020, we have learned not only from success, but from failures too. It helped us
             to understand what you (as a client) really need. Is it just a software product that you require? No, you
             need much more than that. Handful information and clarity about the company before you engage."
      />

      <div className="md:container md:mx-auto m-container">
        <div className="md:flex pt-16">
          <div className="md:w-full">
            <p className="text-center font-size-16 cursor-pointer text-[#ff663b] tracking-normal font-medium">
              LEARN MORE ON
            </p>
            <div className="main-title1 mt-3">
              <h1 className={`text-[35px] ${style.black_colour_text} tracking-normal font-bold text-center`}>
                {/* <i class="brush-stroke-shap"></i> */}
                <span>Our Work Methodology</span> &nbsp;
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-wrap md:flex md:flex-wrap pt-16">
          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0">
            <Link href="/work">
              <div className={`${style.part_box} `}>
                <div>
                  <i class="fab fa-cc-discover"></i>
                </div>
                <p className="mt-3 text-[25px] font-bold tracking-normal">
                  Discovery Workshop
                </p>
                <p className="pr-8 text-[16px] font-medium mt-3 tracking-normal">
                  Transforming idea into a measurable scope with functional
                  UI/UX Design.
                </p>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0">
            <Link href="/project">
              <div className={`${style.part_box} `}>
                <div>
                  <i class="fas fa-tasks"></i>
                </div>
                <p className="mt-3 text-[25px] font-bold tracking-normal">
                  Project Execution
                </p>
                <p className="pr-8 text-[16px] font-medium mt-3 tracking-normal">
                  Get to know how we balance the critical triangle of Cost, Time
                  and Scope.
                </p>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0">
            <div className={`${style.part_box} `}>
              <div>
                <i class="fas fa-users"></i>
              </div>
              <p className="mt-3 text-[25px] font-bold tracking-normal">
                Remote Team
              </p>
              <p className="pr-8 text-[16px] font-medium mt-3 tracking-normal">
                From an expert team who works remotely, under your supervision.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0">
            <Link href="/discoveryprocess">
              <div className={`${style.part_box} `}>
                <div>
                  <i class="fas fa-praying-hands"></i>
                </div>
                <p className="mt-3 text-[25px] font-bold tracking-normal">
                  Discovery Workshop
                </p>
                <p className="pr-8 text-[16px] font-medium mt-3 tracking-normal">
                  Resources with average experience of 3 years and tech
                  expertise across the domains of native iOS, Android, cross
                  platform, and hybrid apps.
                </p>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0">
            <Link href="/discoveryprocess">
              <div className={`${style.part_box} `}>
                <div>
                  <i class="fas fa-praying-hands"></i>
                </div>
                <p className="mt-3 text-[25px] font-bold tracking-normal">
                  Discovery Workshop
                </p>
                <p className="pr-8 text-[16px] font-medium mt-3 tracking-normal">
                  Resources with average experience of 3 years and tech
                  expertise across the domains of native iOS, Android, cross
                  platform, and hybrid apps.
                </p>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 mb-5 m-pl-0 m-pr-0">
            <Link href="/project">
              <div className={`${style.part_box} `}>
                <div>
                  <i class="fas fa-search-dollar"></i>
                </div>
                <p className="mt-3 text-[25px] font-bold tracking-normal">
                  Project Review
                </p>
                <p className="pr-8 text-[16px] font-medium mt-3 tracking-normal">
                  Get to know how we balance the critical triangle of Cost, Time
                  and Scope.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <section className="pt-16 mb-5">
        <div className="demo-website-show">
          <div className="md:container md:mx-auto m-container">
            <div className="md:flex justify-center">
              <div className="md:w-3/4">
                <h1 className={`text-[35px] ${style.heading_title_color} font-bold tracking-normal text-center`}>
                  Why is it important to You and Us?
                </h1>
                <p className={`text-[18px] tracking-norma font-medium ${style.heading_title_color} mt-8 text-center`}>
                  RIPPLESTACKS working mantra has always been cemented around
                  client satisfaction and quality. Over two decades of
                  experience and stability as a trusted software development
                  company has taught us many things about the customer’s initial
                  needs. In most cases, the most common question is what will
                  happen and how, right?
                </p>
                <p className={`text-[18px] ${style.heading_title_color} font-medium tracking-normal mt-8 text-center`}>
                  The information hereby will help you to understand what is
                  essential for your business idea, how do we work, and how to
                  save time by coming up with the required information
                  beforehand. Please remember that we care about your business
                  idea as much as you do!
                </p>
                <div>
                  <div
                    className="flex items-center pt-8 flex-wrap justify-center"
                    style={{ gap: "10px" }}
                  >
                    <div className="pr-5">
                      <div className={`${style.icon_box} flex items-center justify-center cursor-pointer`}>
                        <i class="fab fa-apple text-[28px] yellow-icon-text-color"></i>
                      </div>
                    </div>
                    <div className="pr-5">
                      <div className={`${style.icon_box} flex items-center justify-center cursor-pointer`}>
                        <i class="fas fa-robot text-[28px] yellow-icon-text-color"></i>
                      </div>
                    </div>
                    <div className="pr-5">
                      <div className={`${style.icon_box} flex items-center justify-center cursor-pointer`}>
                        <i class="fab fa-react text-[28px] yellow-icon-text-color"></i>
                      </div>
                    </div>
                    <div className="pr-5">
                      <div className={`${style.icon_box} flex items-center justify-center cursor-pointer`}>
                        <i class="fab fa-creative-commons-pd-alt text-[28px] yellow-icon-text-color"></i>
                      </div>
                    </div>
                    <div className="pr-5">
                      <div className={`${style.icon_box} flex items-center justify-center cursor-pointer`}>
                        <i class="fas fa-volleyball-ball text-[28px] yellow-icon-text-color"></i>
                      </div>
                    </div>
                    <div className="pr-5">
                      <div className={`${style.icon_box} flex items-center justify-center cursor-pointer`}>
                        <i class="fas fa-graduation-cap text-[28px] yellow-icon-text-color"></i>
                      </div>
                    </div>
                  </div>
                  <div className="pt-16 flex justify-center">
                    {/* <Image src={require('../../assets/img/demo.png').default} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-16">
        <Webtechnologies />
      </div>

      <Banner2 />
    </>
  );
}
