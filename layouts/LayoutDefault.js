import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import "../src/styles/globals.css";
import "../src/styles/index.css";
import "../src/styles/loader.css";
import "../src/styles/module/banner.module.css";
import "../src/styles/module/common.module.css";
import "../src/styles/module/headernotify.module.css";

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" />
    <main className="site-content">{children}</main>
    <Footer />
  </>
);

export default LayoutDefault;