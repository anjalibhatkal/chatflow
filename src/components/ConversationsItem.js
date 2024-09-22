import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ConversationsItem({ props }) {
  const navigate = useNavigate();
  const lightTheme = useSelector((state) => {
    return state.themeKey;
  });

  return (
    <div
      className={"convo-container" + (lightTheme ? "" : " dark-outer")}
      onClick={() => {
        navigate("chat");
      }}
    >
      <p className={"convo-icon" + (lightTheme ? "" : " dark")}>
        {props.name[0]}
      </p>
      <p className={"convo-title" + (lightTheme ? "" : " dark-outer")}>
        {props.name}
      </p>
      <p className="convo-lastMessage">{props.lastMessage}</p>
      <p className={"convo-timeStamp" + (lightTheme ? "" : " dark-outer")}>
        {props.timeStamp}
      </p>
    </div>
  );
}

export default ConversationsItem;
