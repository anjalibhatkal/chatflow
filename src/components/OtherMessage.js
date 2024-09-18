import React from "react";

function OtherMessage() {
  var props1 = { name: "Rando", message: "This is a sample message." };
  return (
    <div className="othermsg-container">
      <div className="convo-container">
        <p className="convo-icon">{props1.name[0]}</p>
        <div className="other-text">
          <p className="convo-title">{props1.name}</p>
          <p className="convo-lastMessage">{props1.message}</p>
          <p className="self-timestamp">12:00am</p>
        </div>
      </div>
    </div>
  );
}

export default OtherMessage;
