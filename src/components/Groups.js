import React from "react";
import logo from "./../assets/chatflow.png";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

function Groups() {
  const lightTheme = useSelector((state) => {
    return state.themeKey;
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={"anticipate"}
        className="list-container"
      >
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "2.5rem", width: "2.5rem" }}
          />
          <p className={"ug-title" + (lightTheme ? "" : " dark")}>
            Available Groups
          </p>
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
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"ug-item" + (lightTheme ? "" : " dark")}
          >
            <p className={"convo-icon" + (lightTheme ? "" : " dark-outer")}>
              T
            </p>
            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
              Text User
            </p>
          </motion.div>
          <div className={"ug-item" + (lightTheme ? "" : " dark")}>
            <p className={"convo-icon" + (lightTheme ? "" : " dark-outer")}>
              T
            </p>
            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
              Text User
            </p>
          </div>
          <div className={"ug-item" + (lightTheme ? "" : " dark")}>
            <p className={"convo-icon" + (lightTheme ? "" : " dark-outer")}>
              T
            </p>
            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
              Text User
            </p>
          </div>
          <div className={"ug-item" + (lightTheme ? "" : " dark")}>
            <p className={"convo-icon" + (lightTheme ? "" : " dark-outer")}>
              T
            </p>
            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
              Text User
            </p>
          </div>
          <div className={"ug-item" + (lightTheme ? "" : " dark")}>
            <p className={"convo-icon" + (lightTheme ? "" : " dark-outer")}>
              T
            </p>
            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
              Text User
            </p>
          </div>
          <div className={"ug-item" + (lightTheme ? "" : " dark")}>
            <p className={"convo-icon" + (lightTheme ? "" : " dark-outer")}>
              T
            </p>
            <p className={"convo-title" + (lightTheme ? "" : " dark")}>
              Text User
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Groups;
