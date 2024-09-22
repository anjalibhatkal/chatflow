import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SelfMessage from "./SelfMessage";
import OtherMessage from "./OtherMessage";
import { useSelector } from "react-redux";

function ChatArea() {
  const lightTheme = useSelector((state) => {
    return state.themeKey;
  });
  const [convos, setConvos] = useState([
    { name: "Anjali", lastMessage: "hello", timeStamp: "Today" },
  ]);
  var props = convos[0];
  return (
    <div className="chatarea-container">
      <div className={"chatarea-header" + (lightTheme ? "" : " dark")}>
        <p className={"convo-icon" + (lightTheme ? "" : " dark-outer")}>
          {props.name[0]}
        </p>
        <div className="header-text">
          <p className={"convo-title" + (lightTheme ? "" : " dark")}>
            {props.name}
          </p>
          <p className={"convo-timeStamp" + (lightTheme ? "" : " dark")}>
            {props.timeStamp}
          </p>
        </div>
        <IconButton>
          <DeleteIcon className={"icon" + (lightTheme ? "" : " dark")} />
        </IconButton>
      </div>

      <div className={"chatarea-main" + (lightTheme ? "" : " dark")}>
        <OtherMessage /> <SelfMessage />
        <OtherMessage /> <SelfMessage />
        <OtherMessage /> <SelfMessage />
        <OtherMessage /> <SelfMessage />
      </div>

      <div className={"chatarea-textinput" + (lightTheme ? "" : " dark")}>
        <input
          type="text"
          placeholder="Type a Message"
          className={"search-box" + (lightTheme ? "" : " dark")}
        />
        <IconButton>
          <SendIcon className={"icon" + (lightTheme ? "" : " dark")} />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatArea;
