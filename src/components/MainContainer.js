import React, { useState } from "react";
import "../components/myStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";

function MainContainer() {
  const [convos, setConvos] = useState([
    { name: "Anjali", lastMessage: "hello", timeStamp: "Today" },
  ]);

  return (
    <div className="main-container">
      <Sidebar />
      {convos.map((convo) => {
        return <ChatArea props={convo} />;
      })}
    </div>
  );
}

export default MainContainer;
