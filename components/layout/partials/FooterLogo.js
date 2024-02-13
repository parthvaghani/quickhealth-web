import React from "react";
import classNames from "classnames";
import Image from "../../elements/Image";
import Link from "next/link";

import "../../../src/styles/module/banner.module.css";
import style from "../../../src/styles/module/common.module.css";
import "../../../src/styles/module/headernotify.module.css";

const FooterLogo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link href="/">
          <Image
            src={("./../../../assets/images/logo-no-background-white.svg")}
            alt="Open"
            style={{ color: "white" }}
            width={200}
            height={200}
          />
          <p className={`${style.baloo_paaji}`}
            style={{
              marginBottom: 0,
              fontSize: "14px",
              textAlign: "center",
              color: "white",
              lineHeight:"25px",
            }}
          >
            {new Date().getFullYear()} RIPPLESTACKS. All rights reserved.
          </p>
        </Link>
      </h1>
    </div>
  );
};

export default FooterLogo;
