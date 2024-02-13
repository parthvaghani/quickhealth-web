import PropTypes from "prop-types";
import classNames from "classnames";
import FooterNav from "./partials/FooterNav";
import FooterLogo from "./partials/FooterLogo";
import style from "../../src/styles/module/common.module.css";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes}>
      <div style={{ margin: "30px 30px 0px 30px" }}>
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className={`footer-bottom space-between text-[15px]  invert-order-desktop text-color-primary ${style.baloo_paaji}`}
            style={{ fontSize: "15px", lineHeight: "1rem" }}>
            <p className="mb-0">
            Contact Us
              <br />
              Dial :<br />
              RIPPLESTACKS Connect @{" "}
              <a href="tel:+916353528830">+91 6353528830</a>
              <br />
              Email: <br />
              <a href="mailto:contact@ripplestacks.com">
                contact@ripplestacks.com
              </a>
            </p>
            <div>
              <p className="mb-0" >
                 <span style={{ fontSize: "20px" }}>India 🇮🇳</span>
                <br />
                A-307, Ripplestacks, Atlanta Mall, Sudama Chowk, Mota Varachha,
                <br />
                Surat, Gujarat 394101.
              </p>
              {/* <p className="mb-0">
                Germany <span style={{ fontSize: "20px" }}>🇩🇪</span>
                <br />
                Henckellweg 23 , 30459 hannover, Germany
              </p> */}
            </div>
          </div>
          <div
            className="footer-top space-between text-xxs pt-3"
            style={{ alignItems: "flex-end" }}
          >
            <FooterLogo />
            <FooterNav />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
