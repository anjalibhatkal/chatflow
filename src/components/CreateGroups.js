import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

function CreateGroups() {
  const lightTheme = useSelector((state) => {
    return state.themeKey;
  });
  return (
    <div className={"createGroups-container" + (lightTheme ? "" : " dark")}>
      <input
        type="text"
        placeholder="Enter Group Name"
        className={"search-box" + (lightTheme ? "" : " dark")}
      />
      <IconButton>
        <DoneIcon className={"icon" + (lightTheme ? "" : " dark")} />
      </IconButton>
    </div>
  );
}

export default CreateGroups;
