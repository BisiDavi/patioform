import React from "react";
// import useForm from "react-hook-form";
import { Header } from "../src/imports";

const Layout = (props) => {
  return (
    <section className="layout">
      <Header />
      {props.children}
    </section>
  );
};

export default Layout;
