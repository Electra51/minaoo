import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Common/Header/Header";
import Navbar from "../Common/Navbar/Navbar";
const MainLayout = () => {
  return (
    <div className="h-[100vh]">
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
