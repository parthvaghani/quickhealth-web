import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";

import "../../src/styles/globals.css";
import "../../src/styles/index.css";
import "../../src/styles/loader.css";
import "../../src/styles/module/banner.module.css";
import "../../src/styles/module/common.module.css";
import "../../src/styles/module/headernotify.module.css";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const ContactFooter = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <>
      <footer {...props} className={classes}>
        <div style={{ margin: "30px 30px 0px 30px" }}>
          <div
            className={classNames(
              "site-footer-inner",
              topDivider && "has-top-divider"
            )}
          >
            <div className="footer-bottom space-between text-xs invert-order-desktop text-color-secondary">
              <p>
                Contact Us
                <br />
                RIPPLESTACKS Support +91 6353528830
                <br />
                <a href="mailto:contact@ripplestacks.com">
                  contact@ripplestacks.com
                </a>
              </p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.open("https://goo.gl/maps/DktH7Dahqtw9Gj4L7");
                }}
              >
                Address
                <br />
                A-307, Ripplestacks, Atlanta Mall, Sudama Chowk, Mota Varachha,
                Surat, Gujarat, India 394101.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

ContactFooter.propTypes = propTypes;
ContactFooter.defaultProps = defaultProps;

export default ContactFooter;
