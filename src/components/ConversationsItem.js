import React from "react";
import { useNavigate } from "react-router-dom";

function ConversationsItem({ props }) {
  const navigate = useNavigate();
  return (
    <div
      className="convo-container"
      onClick={() => {
        navigate("chat");
      }}
    >
      <p className="convo-icon">{props.name[0]}</p>
      <p className="convo-title">{props.name}</p>
      <p className="convo-lastMessage">{props.lastMessage}</p>
      <p className="convo-timeStamp">{props.timeStamp}</p>
    </div>
  );
}

export default ConversationsItem;
