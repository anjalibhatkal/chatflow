import React, { useState } from "react";
import "../components/myStyles.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainContainer() {
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default MainContainer;
