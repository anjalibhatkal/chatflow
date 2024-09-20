import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { IconButton } from "@mui/material";

function CreateGroups() {
  return (
    <div className="createGroups-container">
      <input
        type="text"
        placeholder="Enter Group Name"
        className="search-box"
      />
      <IconButton>
        <DoneIcon />
      </IconButton>
    </div>
  );
}

export default CreateGroups;
