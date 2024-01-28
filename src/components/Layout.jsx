import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../container/Footer/Footer";
import Header from "./Header/Header";

export const Layout = () => {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
