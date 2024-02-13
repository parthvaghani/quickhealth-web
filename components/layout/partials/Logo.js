import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes} data-aos="zoom-out" data-wow-delay="0.4s">
      <h1 className="m-0">
        <Link href="/">
          <Image
            src={("./../../../assets/images/logo-no-background.svg")}
            alt="Open"
            style={{ color: "white", boxShadow: "0px 15px 10px -15px #e8c9c9", }}
            width={200}
            height={200}
          />
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
