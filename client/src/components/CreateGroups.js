import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

function CreateGroups() {
  const lightTheme = useSelector((state) => {
    return state.themeKey;
  });
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={"anticipate"}
        className={"createGroups-container" + (lightTheme ? "" : " dark")}
      >
        <input
          type="text"
          placeholder="Enter Group Name"
          className={"search-box" + (lightTheme ? "" : " dark")}
        />
        <IconButton>
          <DoneIcon className={"icon" + (lightTheme ? "" : " dark")} />
        </IconButton>
      </motion.div>
    </AnimatePresence>
  );
}

export default CreateGroups;
