import React, { useState } from "react";
import "../components/myStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import CreateGroups from "./CreateGroups";
import Welcome from "./Welcome";
import OnlineUsers from "./OnlineUsers";

function MainContainer() {
  const [convos, setConvos] = useState([
    { name: "Anjali", lastMessage: "hello", timeStamp: "Today" },
  ]);

  return (
    <div className="main-container">
      <Sidebar />
      {/* <Welcome /> */}
      {/* <CreateGroups /> */}
      {/* <ChatArea props={convos[0]} /> */}
      <OnlineUsers />
    </div>
  );
}

export default MainContainer;
