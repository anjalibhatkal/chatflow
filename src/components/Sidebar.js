import React, { useState } from "react";
import "../components/myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import ConversationsItem from "./ConversationsItem";

function Sidebar() {
  const [convos, setConvos] = useState([
    { name: "Anjali", lastMessage: "hello", timeStamp: "Today" },
    { name: "Devansh", lastMessage: "heyy", timeStamp: "Today" },
    { name: "Nimisha", lastMessage: "bye bro", timeStamp: "Today" },
  ]);

  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input type="text" placeholder="Search" className="search-box" />
      </div>
      <div className="sb-conversations">
        {convos.map((convo) => {
          return <ConversationsItem key={convo} props={convo} />;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
