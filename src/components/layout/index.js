import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default RootLayout;
