import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import Link from "next/link";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);
  // const { t } = useTranslation();

  const nav = useRef(null);
  const hamburger = useRef(null);
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const setClose = () => {
    setOpen(false);
  };

  const setCloseContact = () => {
    setOpenContact(false);
  };
  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
  );

  return (
    <>
      <header  {...props} className={classes}>
        <div
          style={{
            margin: "30px 25px",
          }}
        >
          <div
            className={classNames(
              "site-header-inner",
              bottomDivider && "has-bottom-divider"
            )}
          >
            <Logo />
            {!hideNav && (
              <>
                <button
                  ref={hamburger}
                  className="header-nav-toggle"
                  onClick={isActive ? closeMenu : openMenu}
                >
                  <span className="screen-reader">Menu</span>
                  <span className="hamburger">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
                <nav
                  ref={nav}
                  className={classNames("header-nav", isActive && "is-active")}
                >
                  <div className="header-nav-inner">
                    <ul
                      className={classNames(
                        "list-reset text-xs",
                        navPosition && `header-nav-${navPosition}`
                      )}
                    ></ul>
                    {!hideSignin && (
                      <ul className="list-reset header-nav-right">
                        <li>
                          <Link
                            onClick={closeMenu}
                            href="/services"
                            style={{ color: "black", transition: "0.3s" }}
                            onMouseEnter={(e) => {
                              e.target.style.color = "#ff851b";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = "black";
                            }}
                          >
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={closeMenu}
                            style={{ color: "black", transition: "0.3s" }}
                            onMouseEnter={(e) => {
                              e.target.style.color = "#ff851b";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = "black";
                            }}
                            href="/technology"
                          >
                            Technologies
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={closeMenu}
                            style={{ color: "black", transition: "0.3s" }}
                            onMouseEnter={(e) => {
                              e.target.style.color = "#ff851b";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = "black";
                            }}
                            href="/about"
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={closeMenu}
                            style={{ color: "black", transition: "0.3s" }}
                            onMouseEnter={(e) => {
                              e.target.style.color = "#ff851b";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = "black";
                            }}
                            href="/career"
                          >
                            Career
                          </Link>
                        </li>
                        <li>
                          <a
                            href="https://blog.ripplestacks.com"
                            style={{ color: "black", transition: "0.3s" }}
                            onMouseEnter={(e) => {
                              e.target.style.color = "#ff851b";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = "black";
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Blog
                          </a>
                        </li>

                        <li>
                          <Link
                            onClick={closeMenu}
                            style={{ color: "black", transition: "0.3s" }}
                            onMouseEnter={(e) => {
                              e.target.style.color = "#ff851b";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = "black";
                            }}
                            href="/contact"
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </nav>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
