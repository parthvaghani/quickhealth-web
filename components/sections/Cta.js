import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from 'next/link'
import { SectionProps } from "../../src/utils/SectionProps";
import InquiryModal from "../third-party-components/InquiryModal";

import "../../src/styles/module/banner.module.css";
import style from "../../src/styles/module/common.module.css";
import "../../src/styles/module/headernotify.module.css";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );
  const setClose = () => {
    setOpen(false);
  };
  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split",
    split || "cta-split",
  );

  return (
    <section {...props} className={outerClasses}>
      <div style={{ margin: "30px 30px 30px 30px" }}>
        <div className={innerClasses}>
          <div className="cta-slogan" data-aos="zoom-in" data-aos-duration="100" data-aos-once="true">
            <h1
              className={`text-[35px] text-[#fff] font-bold tracking-normal mb-0 ${style.baloo_paaji}`}
              style={{ textAlign: "start", lineHeight: "45px", color: "white", fontSize:"38px" }}
            >
              How can we help you develop your project?
            </h1>
            <p className={`font-size-20 font-normal tracking-normal text-[#fff] mt-4 ${style.baloo_paaji}`}>
              Let&apos;s innovate your technology requirements with RIPPLESTACKS.
            </p>
          </div>
          <div className="cta-btn align-middle bounce">
            <Link
              className={`button button-wide-mobile button-sm ${style.baloo_paaji}`}
              style={{ color: "black", backgroundColor: "white" }}
              href="/contact"
            >
              Hire Developers
            </Link>
          </div>
        </div>
      </div>
      <InquiryModal open={open} setClose={setClose} />
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
