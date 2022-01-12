import React from "react";
import Header from "./header";
import Footer from "./footer";

import "./layout.css";

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
