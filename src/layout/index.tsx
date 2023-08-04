import React from "react";
// import components
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
