import React from "react";
import { useSelector } from "react-redux";

function OtherMessage() {
  const lightTheme = useSelector((state) => {
    return state.themeKey;
  });

  var props1 = { name: "Rando", message: "This is a sample message." };
  return (
    <div className="othermsg-container">
      <p className={"convo-icon" + (lightTheme ? "" : " dark-outer")}>
        {props1.name[0]}
      </p>
      <div className={"other-text" + (lightTheme ? "" : " dark-outer")}>
        <p className={"convo-title" + (lightTheme ? "" : " dark-outer")}>
          {props1.name}
        </p>
        <p className={"convo-lastMessage" + (lightTheme ? "" : " dark-outer")}>
          {props1.message}
        </p>
        <p className={"self-timestamp" + (lightTheme ? "" : " dark-outer")}>
          12:00am
        </p>
      </div>
    </div>
  );
}

export default OtherMessage;
