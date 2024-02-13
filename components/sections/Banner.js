import React, { useEffect } from "react";
import classNames from "classnames";
import { SectionProps } from "../../src/utils/SectionProps";
import Button from "@mui/material/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../../src/styles/module/banner.module.css";
import style from "../../src/styles/module/common.module.css";
import Link from "next/link";
import Image from "next/image";
import aboutImg from "../../src/assets/images/about.jpg";
import serviceImg from "../../src/assets/images/service.jpg";
import technologyImg from "../../src/assets/images/technology.jpg";
import careerImg from "../../src/assets/images/career.jpg";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Banner = ({
  imgName,
  text1,
  text2,
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const returnImage = (imgName) => {
    switch (imgName) {
      case "about.jpg":
        return aboutImg;
      case "service.jpg":
        return serviceImg;
      case "technology.jpg":
        return technologyImg;
      case "career.jpg":
        return careerImg;
      default:
        return aboutImg;
    }
  }


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
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section {...props} className={outerClasses}>
      <div>
        <div className={innerClasses} style={{ paddingBottom: "0px", backgroundImage: `url(${returnImage(imgName).src})`,
              width: "100%",
              height: "100%",
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover' }}>
          <section
            className={`${banner.showcasebanner}`}
          >
            {/* <Image
              src={selectedImg}
              width={1000}
              height={1000}
              alt="banner"
            /> */}
            <div className={`${banner.overlaybanner}`}>
              <h1
                style={{
                  color: "white",
                  fontWeight: "bold",
                  margin: "30px 15px",
                }}
                className={`${style.baloo_paaji}`}
                data-aos="fade-down"
                data-aos-duration="110"
                data-aos-once="true"
              >
                {text1}
              </h1>
              <h5
                style={{
                  color: "white",
                  fontWeight: "500",
                  marginBottom: "30px",
                }}
                className={`${style.max_width_70} ${style.baloo_paaji}`}
                data-aos="fade-up"
                data-aos-duration="112"
                data-aos-once="true"
              >
                {text2}
              </h5>
              {imgName === "work.jpg" && (
                <Link href="/contact" alt="">
                  <Button
                    style={{
                      backgroundImage:
                        "linear-gradient(270deg,  #0093ed, #74B6E3, #0093ed)",
                      transition: "0.2s",
                      backgroundSize: "200% auto",
                      border: "1px solid transparent",
                      padding: "8px 40px",
                      boxShadow: "0 12px 20px 0 rgb(255 126 95 / 15%)",
                      borderRadius: "50px",
                      color: "white",
                      textTransform: "none",
                      fontWeight: "500",
                      marginTop: "20px",
                    }}
                  >
                    Let&apos;s Talk
                  </Button>
                </Link>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
