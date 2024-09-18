import React from "react";

function SelfMessage() {
  var props2 = { name: "You", message: "This is a sample message." };
  return (
    <div className="selfmsg-container">
      <div className="messageBox">
        <p>{props2.message}</p>
        <p className="self-timestamp">12:00am</p>
      </div>
    </div>
  );
}

export default SelfMessage;
