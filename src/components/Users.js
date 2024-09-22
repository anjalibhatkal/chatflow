import React from "react";
import logo from "./../assets/chatflow.png";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Users() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => {
    return state.themeKey;
  });

  return (
    <div className="list-container">
      <div className={"ug-header" + (lightTheme ? "" : " dark")}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: "2.5rem", width: "2.5rem" }}
        />
        <p className={"ug-title" + (lightTheme ? "" : " dark")}>Online Users</p>
      </div>
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton>
          <SearchIcon className={"icon" + (lightTheme ? "" : " dark")} />
        </IconButton>
        <input
          type="text"
          placeholder="Search"
          className={"search-box" + (lightTheme ? "" : " dark")}
        />
      </div>
      <div className="ug-list">
        <div className={"ug-item" + (lightTheme ? "" : " dark")}>
          <p className={"convo-icon" + (lightTheme ? "" : " dark-outer")}>T</p>
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            Text User
          </p>
        </div>
        <div className={"ug-item" + (lightTheme ? "" : " dark")}>
          <p className={"convo-icon" + (lightTheme ? "" : " dark-outer")}>T</p>
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            Text User
          </p>
        </div>
        <div className={"ug-item" + (lightTheme ? "" : " dark")}>
          <p className={"convo-icon" + (lightTheme ? "" : " dark-outer")}>T</p>
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            Text User
          </p>
        </div>
        <div className={"ug-item" + (lightTheme ? "" : " dark")}>
          <p className={"convo-icon" + (lightTheme ? "" : " dark-outer")}>T</p>
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            Text User
          </p>
        </div>
        <div className={"ug-item" + (lightTheme ? "" : " dark")}>
          <p className={"convo-icon" + (lightTheme ? "" : " dark-outer")}>T</p>
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            Text User
          </p>
        </div>
        <div className={"ug-item" + (lightTheme ? "" : " dark")}>
          <p className={"convo-icon" + (lightTheme ? "" : " dark-outer")}>T</p>
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            Text User
          </p>
        </div>
      </div>
    </div>
  );
}

export default Users;
