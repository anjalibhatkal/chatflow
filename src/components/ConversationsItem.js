import React from "react";

function ConversationsItem({ props }) {
  return (
    <div className="convo-container">
      <p className="convo-icon">{props.name[0]}</p>
      <p className="convo-title">{props.name}</p>
      <p className="convo-lastMessage">{props.lastMessage}</p>
      <p className="convo-timeStamp">{props.timeStamp}</p>
    </div>
  );
}

export default ConversationsItem;
