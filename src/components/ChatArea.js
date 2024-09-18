import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SelfMessage from "./SelfMessage";
import OtherMessage from "./OtherMessage";

function ChatArea({ props }) {
  return (
    <div className="chatarea-container">
      <div className="chatarea-header">
        <p className="convo-icon">{props.name[0]}</p>
        <div className="header-text">
          <p className="convo-title">{props.name}</p>
          <p className="convo-timeStamp">{props.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>

      <div className="chatarea-main">
        <OtherMessage /> <SelfMessage />
        <OtherMessage /> <SelfMessage />
        <OtherMessage /> <SelfMessage />
        <OtherMessage /> <SelfMessage />
      </div>

      <div className="chatarea-textinput">
        <input
          type="text"
          placeholder="Type a Message"
          className="search-box"
        />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatArea;
