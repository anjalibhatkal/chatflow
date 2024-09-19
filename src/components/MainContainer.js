import React, { useState } from "react";
import "../components/myStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";

function MainContainer() {
  const [convos, setConvos] = useState([
    { name: "Anjali", lastMessage: "hello", timeStamp: "Today" },
  ]);

  return (
    <div className="main-container">
      <Sidebar />
      <Welcome />
      {/* <ChatArea props={convos[0]} />; */}
    </div>
  );
}

export default MainContainer;
