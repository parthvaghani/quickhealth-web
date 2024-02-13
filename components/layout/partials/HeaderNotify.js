import React from "react";
import classNames from "classnames";

import "../../../src/styles/globals.css";
import "../../../src/styles/index.css";
import "../../../src/styles/loader.css";
import "../../../src/styles/module/banner.module.css";
import "../../../src/styles/module/common.module.css";
import "../../../src/styles/module/headernotify.module.css";

// import { Link } from "react-router-dom";
// import FooterSocial from "./FooterSocial";

// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import { LOCALES } from "../../i18n/Constants";
// import GTranslateIcon from "@material-ui/icons/GTranslate";
// import LanguageIcon from "@material-ui/icons/Language";
// import { IconButton } from "@material-ui/core";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const HeaderNotify = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);
  // const [anchorEl, setAnchorEl] = React.useState(null);


  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = (lang) => {
  //   if (lang) {
  //     console.log(lang);
  //     switch (lang) {
  //       case "English":
  //         document.body.setAttribute("dir", "ltr");
  //         changeLanguage(LOCALES.ENGLISH);
  //         break;
  //       case "French":
  //         document.body.setAttribute("dir", "ltr");
  //         changeLanguage(LOCALES.FRANCAIS);
  //         break;
  //       case "German":
  //         document.body.setAttribute("dir", "ltr");
  //         changeLanguage(LOCALES.GERMAN);
  //         break;
  //       case "Japanese":
  //         document.body.setAttribute("dir", "ltr");
  //         changeLanguage(LOCALES.JAPANESE);
  //         break;
  //       case "Portuguese":
  //         document.body.setAttribute("dir", "ltr");
  //         changeLanguage(LOCALES.PORTUGUESE);
  //         break;
  //       case "Russian":
  //         document.body.setAttribute("dir", "ltr");
  //         changeLanguage(LOCALES.RUSSIAN);
  //         break;
  //       case "Spanish":
  //         document.body.setAttribute("dir", "ltr");
  //         changeLanguage(LOCALES.SPANISH);
  //         break;
  //       case "Arabic":
  //         document.body.setAttribute("dir", "rtl");
  //         changeLanguage(LOCALES.ARABIC);
  //         break;
  //       case "Chinese":
  //         document.body.setAttribute("dir", "ltr");
  //         changeLanguage(LOCALES.CHINESE);
  //         break;
  //       case "Korean":
  //         document.body.setAttribute("dir", "ltr");
  //         changeLanguage(LOCALES.KOREAN);
  //         break;
  //       case "Polish":
  //         document.body.setAttribute("dir", "ltr");
  //         changeLanguage(LOCALES.POLISH);
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  //   setAnchorEl(null);
  // };
  return (
    <>
      <nav {...props} className={classes}>
        <div className="alignCenter">
          <div>
            <a
              href="mailto:contact@ripplestacks.com"
              style={{ fontSize: "16px", color: "white" }}
            >
              Inquiry : contact@ripplestacks.com
            </a>
          </div>
          {/* <IconButton
            fontSize="small"
            onClick={(e) => {
              handleClick(e);
            }}
            style={{ margin: "0px", padding: "0px", zIndex: "15" }}
          >
            <LanguageIcon fontSize="small" style={{ color: "white" }} />
            <ArrowDropDownIcon style={{ color: "white" }} fontSize="small" />
          </IconButton> */}
        </div>
      </nav>
      {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose.bind(this, "English")}>English</MenuItem>
        <MenuItem onClick={handleClose.bind(this, "French")}>French</MenuItem>
        <MenuItem onClick={handleClose.bind(this, "Spanish")}>Spanish</MenuItem>
        <MenuItem onClick={handleClose.bind(this, "German")}>German</MenuItem>
        <MenuItem onClick={handleClose.bind(this, "Arabic")}>Arabic</MenuItem>
        <MenuItem onClick={handleClose.bind(this, "Portuguese")}>
          Portuguese
        </MenuItem>
        <MenuItem onClick={handleClose.bind(this, "Chinese")}>Chinese</MenuItem>
        <MenuItem onClick={handleClose.bind(this, "Japanese")}>
          Japanese
        </MenuItem>
        <MenuItem onClick={handleClose.bind(this, "Korean")}>Korean</MenuItem>
        <MenuItem onClick={handleClose.bind(this, "Russian")}>Russian</MenuItem>
        <MenuItem onClick={handleClose.bind(this, "Polish")}>Polish</MenuItem>
      </Menu> */}
    </>
  );
};

export default HeaderNotify;
