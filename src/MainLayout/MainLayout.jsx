import React from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Banner from "../Pages/Banner";

const MainLayout = () => {
  
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="min-h-[calc(100vh-306px)] w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
