import React, { useState } from "react";
import "../components/myStyles.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/themeSlice";

function MainContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => {
    return state.themeKey;
  });

  return (
    <div className={"main-container" + (lightTheme ? "" : " dark-outer")}>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default MainContainer;
