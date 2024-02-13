import React from "react";
import classNames from "classnames";
import Link from "next/link";

import "../../../src/styles/module/banner.module.css";
import style from "../../../src/styles/module/common.module.css";
import "../../../src/styles/module/headernotify.module.css";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className={`list-reset ${style.baloo_paaji}`}>
        {/* <li>
          <Link
            onClick={() => {
              document.getElementById("aboutus").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {t('aboutus')}
          </Link>
        </li> */}
        {/* <li>
          <Link to="#0">FAQ's</Link>
        </li> */}
        {/* <li>
          <Link to="#0">Support</Link>
        </li> */}
        {/* <li>
          <Link
            onClick={() => {
              document.getElementById("testimonials").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
                 {t('testimonials')}
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              document.getElementById("businessprocess").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
               {t('businessprocess')}
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              document.getElementById("categories").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
                 {t('categories')}
          </Link>
        </li> */}
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/technology">Technologies</Link>
        </li>
        <li>
          <Link href="/career">Career</Link>
        </li>
        {/* <li>
          <Link to="/work">Portfolio</Link>
        </li> */}
        {/* <li>
          <Link href="/methodology">Methodology</Link>
        </li> */}
        <a
          href="https://blog.ripplestacks.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
