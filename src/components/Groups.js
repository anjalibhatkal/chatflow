import React from "react";
import logo from "./../assets/chatflow.png";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Groups() {
  return (
    <div className="list-container">
      <div className="ug-header">
        <img src={logo} alt="Logo" style={{ height: "2rem", width: "2rem" }} />
        <p className="ug-title">Available Groups</p>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="Search" className="search-box" />
      </div>
      <div className="ug-list">
        <div className="ug-item">
          <p className="convo-icon">T</p>
          <p className="convo-title">Text Group</p>
        </div>
        <div className="ug-item">
          <p className="convo-icon">T</p>
          <p className="convo-title">Text Group</p>
        </div>
        <div className="ug-item">
          <p className="convo-icon">T</p>
          <p className="convo-title">Text Group</p>
        </div>
        <div className="ug-item">
          <p className="convo-icon">T</p>
          <p className="convo-title">Text Group</p>
        </div>
        <div className="ug-item">
          <p className="convo-icon">T</p>
          <p className="convo-title">Text Group</p>
        </div>
        <div className="ug-item">
          <p className="convo-icon">T</p>
          <p className="convo-title">Text Group</p>
        </div>
        <div className="ug-item">
          <p className="convo-icon">T</p>
          <p className="convo-title">Text Group</p>
        </div>
        <div className="ug-item">
          <p className="convo-icon">T</p>
          <p className="convo-title">Text Group</p>
        </div>
        <div className="ug-item">
          <p className="convo-icon">T</p>
          <p className="convo-title">Text Group</p>
        </div>
        <div className="ug-item">
          <p className="convo-icon">T</p>
          <p className="convo-title">Text Group</p>
        </div>
        <div className="ug-item">
          <p className="convo-icon">T</p>
          <p className="convo-title">Text Group</p>
        </div>
        <div className="ug-item">
          <p className="convo-icon">T</p>
          <p className="convo-title">Text Group</p>
        </div>
      </div>
    </div>
  );
}

export default Groups;
