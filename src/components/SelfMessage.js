import React from "react";
import { useSelector } from "react-redux";

function SelfMessage() {
  const lightTheme = useSelector((state) => {
    return state.themeKey;
  });

  var props2 = { name: "You", message: "This is a sample message." };
  return (
    <div className="selfmsg-container">
      <div className={"messageBox" + (lightTheme ? "" : " msgself-dark")}>
        <p className={lightTheme ? "" : " msgself-dark"}>{props2.message}</p>
        <p className={"self-timestamp" + (lightTheme ? "" : " msgself-dark")}>
          12:00am
        </p>
      </div>
    </div>
  );
}

export default SelfMessage;
